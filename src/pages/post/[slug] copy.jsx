import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client/react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { Share } from 'react-bootstrap-icons'
import Nav from '../../components/layout/Nav'
import Footer from '../../components/layout/Footer'
import PageHead from '../../components/misc/PageHead'
import { GET_ARTICLE } from '../../utils/graphql/Queries'
import { articlesPageIndex } from '../../utils/constants/nav'
import CustomStateUpdater from '../../components/lexical/CustomStateUpdater'
import Sidebar from '../../components/layout/Sidebar'

const EventPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const [coverImage, setCoverImage] = useState(null)
  const [postTitle, setPostTitle] = useState(null)
  const [fetchedEditorStateJSON, setFetchedEditorStateJSON] = useState(null)

  const { data } = useQuery(GET_ARTICLE, {
    variables: { slug }
  })

  const onError = (error) => error

  // fix: clearing article state when moving between articles
  useEffect(() => {
    setCoverImage(null)
    setPostTitle(null)
    setFetchedEditorStateJSON(null)

    if (data && data.articles && data.articles.length) {
      const article = data.articles[0]
      setPostTitle(article.title)
      setCoverImage(article.cover_image)
      setFetchedEditorStateJSON(article.editor_state)
    }
  }, [data])

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={articlesPageIndex} />

      <div className="border_color--main w-full border-b pb-5">
        <div className="page_width_wide  mx-auto flex w-full flex-grow select-none  overflow-hidden pt-5">
          <div className="flex w-3/5 items-center  ">
            <div className="pr-6">
              <div className="select-text text-4xl font-bold leading-tight">
                {postTitle}
              </div>
              <div className="mt-4 mb-2.5 flex items-center text-sm">
                <div className="card_author_image mr-2 flex items-center justify-center overflow-hidden rounded-full bg-neutral-100 text-white">
                  <img src={coverImage} alt="" className="h-full w-full" />
                </div>
                <span className="inline_author font-semibold">basicseez</span>
                <div className="mx-1.5 h-0.5 w-0.5 rounded-full bg-neutral-500" />
                <span className="inline_publish_time text-neutral-500">
                  updated 23 Feb
                </span>
              </div>
              <div className="mt-5 flex space-x-3">
                {/* <div className="box_radius flex cursor-pointer items-center space-x-3 bg-neutral-50 py-2 px-3">
                      <HeartFill />
                      <div className="text-sm">Like</div>
                    </div> */}
                <div className="box_radius bg-neutral-50F flex cursor-pointer items-center space-x-3 rounded-full border py-2 px-3 transition-shadow hover:shadow-md">
                  <Share />
                  <div className="text-sm">Share</div>
                </div>
              </div>
            </div>
          </div>

          <div className="box_radius image_bg w-3/5F h-96F relative h-[17rem] w-1/2 overflow-hidden">
            <img
              className="absolute left-0 h-full w-full object-cover object-center"
              draggable="false"
              src={coverImage}
              alt={postTitle}
            />
          </div>
        </div>
      </div>

      <div className="page_width_wide mx-auto flex w-full">
        <div className="w-full">
          <main className="mx-auto flex w-full justify-end">
            <div className="mt-10 flex justify-center">
              {/* <div className="mr-10 w-full max-w-2xl bg-neutral-100" /> */}
              {/* ============================================================ */}
              <div className="main_content_container flex-row pb-20">
                <div className="block w-full flex-grow">
                  <div className="text-lgF mr-0 ml-auto block w-full max-w-xl">
                    <LexicalComposer
                      initialConfig={{ editable: false, onError }}
                    >
                      <PlainTextPlugin
                        contentEditable={<ContentEditable className="" />}
                      />
                      <CustomStateUpdater
                        editorStateJSON={fetchedEditorStateJSON}
                      />
                    </LexicalComposer>
                  </div>
                </div>
              </div>
              {/* <div className="mt-12 h-96 w-28" /> */}
            </div>
            <Sidebar />
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EventPage

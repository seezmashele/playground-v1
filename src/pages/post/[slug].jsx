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

  const images = [
    '/avatars/image-1.png',
    '/avatars/image-2.png',
    '/avatars/image-3.png',
    '/avatars/image-4.png',
    '/avatars/image-5.png',
    '/avatars/image-6.png',
    '/avatars/image-7.png',
    '/avatars/image-8.png',
    '/avatars/image-9.png',
    '/avatars/image-10.png',
    '/avatars/image-11.png',
    '/avatars/image-12.png',
    '/avatars/image-13.png',
    '/avatars/image-14.png',
    '/avatars/image-15.png',
    '/avatars/image-16.png',
    '/avatars/image-17.png',
    '/avatars/image-18.png',
    '/avatars/image-19.png',
    '/avatars/image-20.png'
  ]
    const cardAuthor = 'littledragon'
  // const cardOverview = "Star Wars is an American epic space opera franchise, created by George Lucas and centered around a film series that began with the eponymous 1977 movie."
  const authorImage = images[Math.floor(Math.random() * 20)]
  // const postAge = getPostAge(data)
    const postAge = '8 days ago'


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

            <main className="page_width_wide page_padding_x mx-auto mt-0 w-full">
        <div className=" flex flex-row">
          <div className="main_content_container mt-16">
    <div className="card_container mt-1 relative mb-7 w-full flex-grow">
      <div className="flex w-full select-none space-x-10">
        <div className="relative inline-block w-1/2 flex-grow">
          <div className="flex items-center text-sm">
            <div className="card_author_image mr-2 overflow-hidden">
              <img src={authorImage} alt="" className="h-full w-full" />
            </div>
            <span className="inline_author">{cardAuthor}</span>
          </div>
            <div className="card_title hover:no-underline hover:cursor-default text-2xl font-bold mt-2 max-h-[6rem] overflow-hidden">
              {postTitle}
            </div>
          {/* <div className="h-12 mt-3.5 w-full max-w-xl overflow-hidden truncateF text-smF leading-normal">
            {cardOverview}
          </div> */}
          <div className="light_text_color mt-3 flex items-center text-xs">
            <span className="inline_publish_time">
              {postAge || 'a long time ago'}
            </span>
            <div className="mx-1.5 h-0.5 w-0.5 rounded-full bg-neutral-500" />
            <div className="box_radius px-1 pb-0.5">gaming</div>
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
          <div className="image_bg box_radius relative top-0 left-0 inline-block h-52 w-80 overflow-hidden">
            <img
              draggable="false"
              className="absolute left-0 h-full w-full object-cover"
              src={coverImage}
              alt={postTitle}
            />
          </div>
      </div>
              <div className="border_color--main mt-5 w-full border-b" />

    </div>
    <div className="block w-full flex-grow">
                  <div className="text-[1.05rem]F pr-5 leading-relaxedF mr-0 ml-auto block w-full max-w-xlF">
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
          <Sidebar />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default EventPage

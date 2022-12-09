import Nav from '../../components/layout/Nav'
import PageHead from '../../components/misc/PageHead'
import ProfileSidebar from '../../components/layout/ProfileSidebar'
import Footer from '../../components/layout/Footer'
import ArticlesListBlock from '../../components/blocks/ArticlesListBlock'
import { useDatabase } from '../../context/DatabaseContext'
import Pagination from '../../components/layout/Pagination'

const HomePage = () => {
  const { useNewsPageArticles } = useDatabase()
  const { newsPageArticles1 } = useNewsPageArticles()

  return (
    <>
      <PageHead title="" />
      <Nav />

      <main className="border_color--main w-full overflow-hidden border-b">
        <div className="bg-purple-50F page_padding_x mx-auto h-full w-full max-w-4xl pt-10 pb-10">
          <div className="flex w-full space-x-5">
            <div className="container_bg_color--secondary h-28 w-28 flex-shrink-0 rounded-full" />
            <div className="mt-5 w-full">
              <h3 className="text-2xl font-bold">ChloGeraghty</h3>
            </div>
          </div>
        </div>
      </main>

      <main className="page_width_wide mx-auto flex w-full flex-row">
        <div className="main_content_container">
          {newsPageArticles1 && (
            <ArticlesListBlock
              articles={newsPageArticles1}
              title="Latest posts"
            />
          )}
          <Pagination />
        </div>
        <ProfileSidebar />
      </main>

      <Footer />
    </>
  )
}

export default HomePage

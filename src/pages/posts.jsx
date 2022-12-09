import Nav from '../components/layout/Nav'
import PageHead from '../components/misc/PageHead'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import ArticlesListBlock from '../components/blocks/ArticlesListBlock'
import { useDatabase } from '../context/DatabaseContext'
import { articlesPageIndex } from '../utils/constants/nav'
import Pagination from '../components/layout/Pagination'
import FeaturedBlockThin from '../components/blocks/FeaturedBlockThin'

const HomePage = () => {
  const { useNewsPageArticles } = useDatabase()
  const { newsPageArticles1 } = useNewsPageArticles()

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={articlesPageIndex} />
      <FeaturedBlockThin articles={newsPageArticles1} />

      <main className="page_width_wide mx-auto flex w-full flex-row">
        <div className="main_content_container">
          {newsPageArticles1 && (
            <ArticlesListBlock
              articles={newsPageArticles1}
              title="Popular Posts"
            />
          )}
          <Pagination />
        </div>
        <Sidebar />
      </main>

      <Footer />
    </>
  )
}

export default HomePage

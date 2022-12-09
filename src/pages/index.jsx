import Nav from '../components/layout/Nav'
import PageHead from '../components/misc/PageHead'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import ArticlesListBlock from '../components/blocks/ArticlesListBlock'
import FeaturedStories from '../components/blocks/FeaturedStories'
import { useDatabase } from '../context/DatabaseContext'
import { homePageIndex } from '../utils/constants/nav'
import EventsListBlock from '../components/blocks/EventsListBlock'
import Pagination from '../components/layout/Pagination'
import NavSpacer from '../components/widgets/NavSpacer'

const HomePage = () => {
  const { useHomePageEvents, useHomePageArticles } = useDatabase()
  const { homePageEvents1 } = useHomePageEvents()
  const { homePageArticles1, homePageArticles2, homePageArticles3 } =
    useHomePageArticles()

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={homePageIndex} />

      <NavSpacer />
      <FeaturedStories articles={homePageArticles1} />

      <main className="page_width_wide page_padding_x mx-auto mt-0 w-full">
        <div className=" flex flex-row">
          <div className="main_content_container">
            {homePageEvents1 && (
              <EventsListBlock
                events={homePageEvents1}
                title="Trending Events"
              />
            )}

            <div className="container_bg_color--secondaryF box_radius border_color--main my-10 h-28 w-full border dark:bg-neutral-800" />

            {homePageArticles2 && (
              <ArticlesListBlock
                articles={homePageArticles2}
                title="Latest Topics"
              />
            )}

            <div className="border_color--main box_radius my-10 flex h-28 w-full items-center justify-center border dark:bg-neutral-800">
              {/* <div className="h-32 w-full max-w-xl bg-neutral-50" /> */}
            </div>

            {homePageArticles3 && (
              <ArticlesListBlock
                articles={homePageArticles3}
                title="More Topics"
              />
            )}
            <Pagination />
          </div>
          <Sidebar />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default HomePage

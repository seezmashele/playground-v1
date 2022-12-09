import Nav from '../components/layout/Nav'
import PageHead from '../components/misc/PageHead'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import EventsListBlock from '../components/blocks/EventsListBlock'
import { useDatabase } from '../context/DatabaseContext'
import { eventsPageIndex } from '../utils/constants/nav'
import Pagination from '../components/layout/Pagination'
import FeaturedBlockThin from '../components/blocks/FeaturedBlockThin'

const EventsPage = () => {
  const { useEventsPageEvents, useNewsPageArticles } = useDatabase()
  const { eventsPageEvents1 } = useEventsPageEvents()
  const { newsPageArticles1 } = useNewsPageArticles()

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={eventsPageIndex} />
      <FeaturedBlockThin articles={newsPageArticles1} />

      <main className="page_width_wide mx-auto flex w-full flex-row">
        <div className="main_content_container">
          {eventsPageEvents1 && (
            <EventsListBlock
              events={eventsPageEvents1}
              title="Trending Events"
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

export default EventsPage

import Nav from '../components/layout/Nav'
import PageHead from '../components/misc/PageHead'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import GroupsBlock from '../components/blocks/GroupsBlock'
import { useDatabase } from '../context/DatabaseContext'
import { groupsPageIndex } from '../utils/constants/nav'
import FeaturedBlockThin from '../components/blocks/FeaturedBlockThin'

const HomePage = () => {
  const { useGroupsPageGroups, useNewsPageArticles } = useDatabase()
  const { groupsPageGroups1 } = useGroupsPageGroups()
  const { newsPageArticles1 } = useNewsPageArticles()

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={groupsPageIndex} />
      <FeaturedBlockThin articles={newsPageArticles1} />

      <main className="page_width_wide mx-auto flex w-full flex-row">
        <div className="main_content_container">
          {groupsPageGroups1 && (
            <GroupsBlock
              articles={groupsPageGroups1}
              title="Many awesome profiles"
            />
          )}
        </div>
        <Sidebar />
      </main>

      <Footer />
    </>
  )
}

export default HomePage

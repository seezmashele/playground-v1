import Nav from '../components/layout/Nav'
import PageHead from '../components/misc/PageHead'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'
import GroupsBlock from '../components/blocks/GroupsBlock'
import { useDatabase } from '../context/DatabaseContext'
import { peoplePageIndex } from '../utils/constants/nav'

const HomePage = () => {
  const { useGroupsPageGroups } = useDatabase()
  const { groupsPageGroups1 } = useGroupsPageGroups()

  return (
    <>
      <PageHead title="" />
      <Nav selectedPageIndex={peoplePageIndex} />

      <main className="page_width_wide mx-auto flex w-full flex-row">
        <div className="main_content_container">
          {groupsPageGroups1 && (
            <GroupsBlock
              articles={groupsPageGroups1}
              title="Local communities"
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

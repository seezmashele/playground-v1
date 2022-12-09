import SidebarTitle from '../widgets/SidebarTitle'
import { useDatabase } from '../../context/DatabaseContext'
import SidebarTopic from './Sidebar/SidebarTopic'
import SidebarProfile from './Sidebar/SidebarProfile'

const Sidebar = () => {
  const { useSidebarGroups } = useDatabase()
  const { sidebarGroups1 } = useSidebarGroups()

  const tempTags = [
    'Valorant',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'Overwatch',
    'MMO',
    'Fifa',
    'Sandbox',
    'Indie',
    'Tournament',
    'Guide',
    'Rocket League',
    'Sea of Thieves',
    'Minecraft',
    'Dota',
    'Rust',
    'GTA',
    'V Rising',
    'Vanguard',
    'Cyberpunk',
    'Skyrim',
    'Announcement',
    'Cosplay'
  ]
  const tempTags2 = tempTags.splice(9)
  tempTags2.splice(9)

  return (
    <aside className="border_color--main bg-neutral-50 overflow-hidden py-4 ml-7 rounded-lg sidebar_width border-lF sticky top-5 bottom-5 my-5 h-full min-h-screenF flex-shrink-0  xs:hidden sidebar-breakpoint:block">
      {tempTags && (
        <>
          <SidebarTitle title="Trending Topics" />
          <div className="box_radius darkmode_transition px-5 mb-8 flex h-[8rem] w-full flex-grow flex-wrap gap-2.5 overflow-hidden">
            {tempTags.map((item, index) => (
              <SidebarTopic
                item={item}
                key={`sidebarTags1${index}`}
                isLastItem={tempTags.length - 1 === index}
              />
            ))}
          </div>
        </>
      )}

      {/* <div className="border_color--main mb-5 w-full border-t" /> */}

      {/* {sidebarArticles1 && (
        <>
          <SidebarTitle title="Recommended" />
          <div className="mb-7 w-full">
            {sidebarArticles1.map((item, index) => (
              <SidebarArticleCard
                item={item}
                key={`sidebarArticles1${index}`}
              />
            ))}
          </div>
        </>
      )} */}

      {sidebarGroups1 && (
        <>
          <SidebarTitle title="Communities" />
          <div className="w-full">
            {sidebarGroups1.map((item, index) => (
              <SidebarProfile item={item} key={`sidebarGroups1${index}`} />
            ))}
          </div>
        </>
      )}
    </aside>
  )
}

export default Sidebar

// import SidebarTitle from '../widgets/SidebarTitle'
import { useDatabase } from '../../context/DatabaseContext'
// import SidebarProfile from './Sidebar/SidebarProfile'
import SidebarAuthorCard from './Sidebar/SidebarAuthorCard'

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
  const tempTags2 = tempTags.splice(6)
  tempTags2.splice(9)

  return (
    <aside className="border_color--main sidebar_width xs:w-sidebar_xsF sticky top-7 bottom-7 my-7 h-full flex-shrink-0 pt-3 pl-20 xs:hidden sidebar-breakpoint:block">
      {sidebarGroups1 && <SidebarAuthorCard item={sidebarGroups1[0]} />}

      <div className="border_color--main mt-8 mb-3 w-full border-t" />
      {/* <SidebarTitle title="Communities" /> */}

      {/* {sidebarGroups1 && (
        <>
          <div className="mb-9 w-full">
            {sidebarGroups1.map((item, index) => (
              <SidebarProfile item={item} key={`sidebarGroups1${index}`} />
            ))}
          </div>
        </>
      )} */}
    </aside>
  )
}

export default Sidebar

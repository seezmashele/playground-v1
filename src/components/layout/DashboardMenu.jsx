import Link from 'next/link'
import {
  Person,
  PlusCircle,
  Pencil,
  Calendar2,
  Bookmark,
  Gear
} from 'react-bootstrap-icons'

const DashboardMenu = () => {
  const menuItems = [
    {
      sectionTitle: true,
      title: 'Profile'
    },
    {
      icon: <Person className="dashboard_menu_icon" />,
      title: 'Profile',
      link: '/profile'
    },
    {
      icon: <Bookmark className="dashboard_menu_icon" />,
      title: 'Saved',
      link: '/dashboard'
    },
    // { divider: true },
    {
      sectionTitle: true,
      title: 'Uploads'
    },
    {
      icon: <Pencil className="dashboard_menu_icon" />,
      title: 'Create Post',
      link: '/dashboard/create-post'
    },
    {
      icon: <Calendar2 className="dashboard_menu_icon" />,
      title: 'Create Event',
      link: '/dashboard/create-event'
    },
    {
      icon: <PlusCircle className="dashboard_menu_icon" />,
      title: 'Create Group',
      link: '/dashboard/create-group'
    },
    {
      icon: <Gear className="dashboard_menu_icon" />,
      title: 'Settings',
      link: '/dashboard/create-group'
    },
    // { divider: true },
    {
      sectionTitle: true,
      title: 'Settings'
    }
  ]

  return (
    <div className="border_color--main box_radius my-5 hidden h-screen w-52 flex-shrink-0 flex-grow-0 border-r">
      {menuItems &&
        menuItems.map((item, index) => {
          const itemKey = `dashboardmenu${item.title}${index}`
          if (item.divider) {
            return (
              <div
                className="border_color--main my-1.5 w-full border-b"
                key={itemKey}
              />
            )
          }
          // if (item.sectionTitle) {
          //   return (
          //     <div className="box_radius mt-1 h-10 w-full pl-2 text-xs font-bold uppercase leading-10 text-neutral-400">
          //       {item.title}
          //     </div>
          //   )
          // }
          if (item.link) {
            return (
              <Link href={item.link} passHref key={itemKey}>
                <div
                  className={`hover_color--neutral mb-2 flex w-full select-none items-center border-violet-500 px-2 py-2 text-sm ${
                    index === 2
                      ? 'bg-violet-100F border-r-2 dark:bg-violet-800 dark:text-white'
                      : ''
                  }`}
                >
                  <div className="ml-2 mr-4 opacity-70">{item.icon}</div>
                  {item.title}
                </div>
              </Link>
            )
          }
          return null
        })}
    </div>
  )
}

export default DashboardMenu

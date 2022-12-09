import Link from 'next/link'
import { useTheme } from 'next-themes'
import { navPageButtons } from './Nav/PageButtons'
// import ProfileDropdown from './Nav/ProfileDropdown'
import { useAuth } from '../../context/AuthContext'
import PostDropdown from './Nav/PostDropdown'
import MenuDropdown from './Nav/MenuDropdown'

// import SettingsDropdown from './Nav/SettingsDropdown'

const Nav = ({ selectedPageIndex = -1, hideNavButtons = false }) => {
  const { theme } = useTheme()
  const { currentUser } = useAuth()

  return (
    <nav className="border_color--main fixedF container_bg_color--primary relative top-0 z-40 w-full border-b">
      <div className="relative mx-auto h-14 px-5">
        <div className="align-center flex h-full w-full items-center justify-between">
          <div className="flex h-7 w-48">
            <Link href="/" passHref>
              <div className="h-7 w-32 flex-shrink-0 cursor-pointer select-none">
                <img
                  className="h-full w-full object-contain object-left"
                  src={
                    theme === 'dark' ? '/logo-min-white.svg' : '/logo-min.svg'
                  }
                  alt="playground logo"
                />
              </div>
            </Link>
          </div>

          <div
            className={` relative mx-auto flex text-center text-sm ${
              hideNavButtons && 'hidden'
            }`}
          >
            {navPageButtons &&
              navPageButtons.map((item, index) => (
                <Link href={item.link} passHref key={`navbutton${index}`}>
                  <div className="box_radius mx-1.5 mt-0 inline-block cursor-pointer select-none px-2">
                    <div className="mt-2 flex h-10 items-center px-1">
                      <div
                        className={`text-sm ${
                          selectedPageIndex === index &&
                          'text-accent-main dark:text-accent-main'
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                    <div
                      className={`pointer-events-none relative mt-1.5 h-0.5 w-full bg-accent-main dark:text-accent-main ${
                        selectedPageIndex !== index && 'opacity-0'
                      }`}
                    />
                  </div>
                </Link>
              ))}
          </div>

          <div className="relative flex h-9 w-48 flex-shrink select-none justify-end space-x-2.5 text-sm">
            {currentUser && <PostDropdown />}
            <MenuDropdown currentUser={currentUser} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

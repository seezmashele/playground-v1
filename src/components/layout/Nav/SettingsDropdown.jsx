// import Link from 'next/link'
import { Fragment } from 'react'
import Link from 'next/link'
import { Gear } from 'react-bootstrap-icons'
import { Menu, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'

const SettingsDropdown = () => {
  const { theme, setTheme } = useTheme()

  const menuItems = [
    // {
    //   icon: <Globe />,
    //   title: 'Language',
    //   link: '/'
    // }
  ]

  return (
    <Menu>
      {() => (
        <>
          <Menu.Button className="hover_color--neutral -mt-0.5 h-9 w-9 flex-shrink-0 cursor-pointer whitespace-nowrap rounded-full text-sm leading-9 ">
            <Gear className="m-auto h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="dropdown_bg box_radius absolute right-0 mt-12 w-56 origin-top-right divide-y divide-neutral-100 text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:text-white">
              <div className="px-1 py-1 ">
                {menuItems &&
                  menuItems.map((item, index) => {
                    const itemKey = `profileDropdown${item.title}${index}`
                    if (item.divider) {
                      return (
                        <div
                          className="border_color--main my-1.5 w-full border-b"
                          key={itemKey}
                        />
                      )
                    }
                    if (item.link) {
                      return (
                        <Link href={item.link} passHref key={itemKey}>
                          <Menu.Item>
                            {() => (
                              <div className="hover_color--neutral flex w-full select-none items-center rounded-md px-2 py-2 text-sm">
                                {/* <div className="mr-3">{item.icon}</div> */}
                                {item.title}
                              </div>
                            )}
                          </Menu.Item>
                        </Link>
                      )
                    }
                    if (item.action) {
                      return (
                        <Menu.Item key={itemKey}>
                          {() => (
                            <button
                              onClick={item.action}
                              type="button"
                              className="hover_color--neutral flex w-full select-none items-center rounded-md px-2 py-2 text-sm"
                            >
                              {/* <div className="mr-3">{item.icon}</div> */}
                              {item.title}
                            </button>
                          )}
                        </Menu.Item>
                      )
                    }
                    return null
                  })}
                <button
                  onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                  }}
                  type="button"
                  className="darkmode_transition hover_color--neutral flex w-full select-none items-center rounded-md py-2 pr-2 pl-3 text-sm"
                >
                  {/* <div className="mr-3">
                    <Sun />
                  </div> */}
                  Dark mode
                  <div
                    className={`${
                      theme === 'dark' ? 'bg-accent-main' : 'bg-neutral-300'
                    } darkmode_transition relative mr-0 ml-auto inline-flex h-4 w-7 items-center rounded-full`}
                  >
                    <span className="sr-only">Toggle dark mode</span>
                    <span
                      className={`${
                        theme === 'dark' ? 'translate-x-3.5' : 'translate-x-0.5'
                      } inline-block h-3 w-3 transform  rounded-full bg-white transition duration-500`}
                    />
                  </div>
                </button>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default SettingsDropdown

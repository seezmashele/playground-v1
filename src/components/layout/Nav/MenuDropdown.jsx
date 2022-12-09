import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { List, PersonFill } from 'react-bootstrap-icons'
import { useAuth } from '../../../context/AuthContext'

const PostDropdown = () => {
  const { currentUser, logout } = useAuth()
  const signUserOut = () => {
    logout()
  }

  const menuItems = [
    {
      title: 'Sign up',
      semibold: true,
      link: '/signup'
    },
    {
      title: 'Login',
      link: '/login'
    },
    { divider: true },
    {
      title: 'Profile',
      link: '/profile'
    },
    {
      title: 'Theme',
      link: '/signup'
    },
    {
      title: 'Settings',
      link: '/settings'
    },
    { divider: true },
    {
      title: 'Logout',
      action: signUserOut
    }
  ]

  return (
    <Menu>
      {() => (
        <>
          <Menu.Button className="border_color--main flex cursor-pointer items-center justify-center space-x-1 rounded-full border px-1.5 transition-shadow hover:shadow-md">
            <div className="flex h-8 w-8 items-center justify-center">
              <List className="h-4 w-4" />
            </div>
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full font-semibold text-white ${
                currentUser ? 'bg-accent-main' : 'bg-neutral-500'
              }`}
            >
              {currentUser ? 'S' : <PersonFill className="h-4 w-4" />}
            </div>
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
            <Menu.Items className="dropdown_bg box_radius absolute right-0 mt-14 w-56 origin-top-right divide-y divide-neutral-100 bg-white text-black shadow-[0_5px_25px_-5px_rgb(0_0_0_/_0.25)] ring-0 ring-black ring-opacity-5 focus:outline-none dark:text-white">
              <div className="px-1 py-1 ">
                {menuItems &&
                  menuItems.map((item, index) => {
                    const itemKey = `profileDropdown${item.title}${index}`
                    if (item.divider) {
                      return (
                        <div
                          className="border_color--main my-1.5 w-full border-b dark:border-neutral-500"
                          key={itemKey}
                        />
                      )
                    }
                    if (item.link) {
                      return (
                        <Link href={item.link} passHref key={itemKey}>
                          <Menu.Item>
                            {() => (
                              <div className="hover_color--neutral flex w-full select-none items-center rounded-md px-3 py-2 text-sm">
                                {/* <div className="mr-4 ml-1">{item.icon}</div> */}
                                <div className="overflow-hidden">
                                  <div
                                    className={`${
                                      item.semibold && 'font-semibold'
                                    } w-full`}
                                  >
                                    {item.title}
                                  </div>
                                  {/* <div className="mt-1 w-full overflow-hidden truncate text-xs opacity-50">
                                    {item.description}
                                  </div> */}
                                </div>
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
                              {/* <div className="mr-2.5">{item.icon}</div> */}
                              <div className="flex flex-col justify-start">
                                <div className="text-left font-semibold">
                                  {item.title}
                                </div>
                                <div className="mt-0.5 text-left text-xs opacity-70">
                                  {item.description}
                                </div>
                              </div>
                            </button>
                          )}
                        </Menu.Item>
                      )
                    }
                    return null
                  })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default PostDropdown

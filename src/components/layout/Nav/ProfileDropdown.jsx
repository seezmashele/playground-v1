import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useAuth } from '../../../context/AuthContext'

const ProfileDropdown = () => {
  const { currentUser, logout } = useAuth()
  const signUserOut = () => {
    logout()
  }

  const getFirstletter = (displayName) => (displayName ? displayName[0] : '')
  const menuItems = [
    {
      userTitle: true
    },
    { divider: true },
    {
      title: 'Profile',
      link: '/profile'
    },
    {
      title: 'Settings',
      link: '/dashboard'
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
          <Menu.Button
            className={`h-8 w-8 flex-shrink-0 cursor-pointer whitespace-nowrap rounded-full border-neutral-600 text-sm text-white ${
              currentUser
                ? 'bg-accent-mainF bg-black hover:bg-accent-main-hover'
                : 'hidden bg-neutral-700 hover:bg-neutral-600'
            }`}
          >
            {currentUser && getFirstletter(currentUser.displayName)}
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
            <Menu.Items className="dropdown_bg absolute right-0 mt-12 w-56 origin-top-right divide-y divide-neutral-100 rounded-md border-red-300 bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:text-white">
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
                    if (item.userTitle) {
                      return (
                        <div
                          className="ml-0.5 select-none py-1.5 pr-3 pl-4 text-sm"
                          key={itemKey}
                        >
                          <div className="font-semibold">
                            {currentUser && currentUser.displayName}
                          </div>
                        </div>
                      )
                    }
                    if (item.link) {
                      return (
                        <Link href={item.link} passHref key={itemKey}>
                          <Menu.Item>
                            {() => (
                              <div className="hover_color--neutral flex w-full select-none items-center rounded-md py-2 pr-2 pl-4 text-sm">
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
                              className="hover_color--neutral flex w-full select-none items-center rounded-md py-2 pr-2 pl-4 text-sm"
                            >
                              {item.title}
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

export default ProfileDropdown

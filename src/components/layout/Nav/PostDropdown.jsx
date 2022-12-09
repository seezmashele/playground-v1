import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Calendar2Event, ChatSquareText, Plus } from 'react-bootstrap-icons'

const PostDropdown = () => {
  const menuItems = [
    {
      icon: <ChatSquareText className="h-3.5 w-3.5" />,
      title: 'Share your thoughts',
      link: '/create/post'
    },
    // { divider: true },
    {
      icon: <Calendar2Event className="h-3.5 w-3.5" />,
      title: 'Create an event',
      link: '/create/event'
    }
  ]

  return (
    <Menu>
      {() => (
        <>
          <Menu.Button className="border_color--main flex h-full flex-shrink-0 cursor-pointer select-none items-center space-x-2.5 overflow-hidden rounded-full border pl-2.5 pr-3.5 text-sm transition-shadow hover:shadow-md">
            <Plus className="h-4 w-4 flex-shrink-0" />
            <div className="whitespace-nowrap">Create post</div>
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
            <Menu.Items className="dropdown_bg absolute right-0 mt-14 w-56 origin-top-right divide-y divide-neutral-100 rounded-md border-red-300 bg-white text-black shadow-[0_5px_25px_-5px_rgb(0_0_0_/_0.25)] ring-0 ring-black ring-opacity-5 focus:outline-none dark:text-white">
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
                                <div className="mr-4 ml-0 text-accent-main">
                                  {item.icon}
                                </div>
                                <div className="overflow-hidden">
                                  <div className="font-semiboldF w-full">
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

// import Link from 'next/link'
import { ThreeDotsVertical } from 'react-bootstrap-icons'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const MoreDropdown = () => (
  <Menu>
    {() => (
      <>
        <Menu.Button>
          <div className="box_radius mx-2.5 mt-0.5 inline-block cursor-pointer select-none px-2">
            <div className="flex h-10 items-center">
              <div className="mr-2">
                <ThreeDotsVertical className="h-4 w-4 text-neutral-500" />
              </div>
              <div className="text-sm">More</div>
            </div>
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-neutral-100 rounded-md border-red-300 bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? 'bg-accent-main text-white' : 'text-neutral-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Edit
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? 'bg-accent-main text-white' : 'text-neutral-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Duplicate
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? 'bg-accent-main text-white' : 'text-neutral-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Archive
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? 'bg-accent-main text-white' : 'text-neutral-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Move
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? 'bg-accent-main text-white' : 'text-neutral-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Delete
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </>
    )}
  </Menu>
)

export default MoreDropdown

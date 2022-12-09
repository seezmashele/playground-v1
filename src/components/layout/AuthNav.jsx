import Link from 'next/link'
import SettingsDropdown from './Nav/SettingsDropdown'

const AuthNav = () => (
  <nav className="border_color--main relative top-0 z-40 w-full border-b">
    <div className="relative mx-auto h-14 px-8">
      <div className="align-center flex h-full w-full items-center justify-end">
        <div className="relative flex h-8 w-48 flex-shrink select-none justify-end space-x-2.5 text-sm">
          <SettingsDropdown />
          <div className="flex h-full flex-nowrap items-center space-x-2.5 text-xs font-semibold">
            <Link href="/login">
              <button
                type="button"
                className="box_radius h-8 whitespace-nowrap px-3 pb-1 align-middle hover:bg-neutral-100 dark:hover:bg-violet-500"
              >
                Log in
              </button>
            </Link>
            <Link href="/signup">
              <button
                type="button"
                className="box_radius h-8 whitespace-nowrap border px-3 pb-1 align-middle hover:bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-violet-500"
              >
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default AuthNav

import Link from 'next/link'
import { Twitch } from 'react-bootstrap-icons'

const SidebarSearchItem = ({ item }) => {
  const linkURL = '/category/example'
  return (
    <div className="w-full select-none text-xs">
      <Link href={linkURL} passHref>
        <div className="box_radius transition-dark flex w-full cursor-pointer items-center pr-4 pb-2.5 pt-2.5 pl-5 align-middle hover:bg-neutral-100 dark:hover:bg-neutral-700">
          <Twitch className="mr-4 h-3.5 w-3.5 text-violet-500" />
          <div className="inline flex-grow">{item}</div>
        </div>
      </Link>
    </div>
  )
}

export default SidebarSearchItem

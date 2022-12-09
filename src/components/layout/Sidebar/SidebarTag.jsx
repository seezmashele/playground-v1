import Link from 'next/link'

const SidebarTag = ({ item, isLastItem }) => {
  const linkURL = '/category/example'
  return (
    <Link href={linkURL} passHref>
      <div className="w-full cursor-pointer select-none text-xs text-neutral-800 hover:bg-neutral-50">
        <div className="flex w-full pr-4 pb-3 pt-2.5">
          <div className="inline flex-grow">{item}</div>
        </div>
        {!isLastItem && <div className="border_color--main w-full border-b" />}
      </div>
    </Link>
  )
}

export default SidebarTag

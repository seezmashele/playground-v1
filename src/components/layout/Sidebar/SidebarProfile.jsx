import Link from 'next/link'

const SidebarProfile = ({ item }) => {
  const itemTitle = item.title
  const itemImage = item.coverImage
  const itemLink = item.slug ? `/profile/${item.slug}` : '/profile'
  const itemAuthor = item.author ? item.author : 'madamesavage'

  return (
    <div className=" relative mb-0 py-3 px-5 flex w-full flex-grow cursor-pointer select-none flex-row items-center overflow-hidden hover:bg-neutral-150">
      <div className="w-full flex-shrink overflow-hidden">
        <Link href={itemLink}>
          <div className="card_title text-sidebar_card_title hover:no-underline">
            {itemTitle}
          </div>
        </Link>
        <div className="mt-0.5 truncate text-sm text-neutral-500">
          {itemAuthor}
        </div>
      </div>
      <Link href={itemLink}>
        <div className="image_bg relative top-0 left-0 h-12 w-12 flex-shrink-0 cursor-pointer overflow-hidden rounded-full">
          <img
            draggable="false"
            className=" absolute left-0 h-full w-full object-cover"
            src={itemImage}
            alt={itemTitle}
          />
        </div>
      </Link>
    </div>
  )
}

export default SidebarProfile

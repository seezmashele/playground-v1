import Link from 'next/link'

const SidebarAuthorCard = ({ item }) => {
  const itemTitle = item && item.title
  const itemImage = item && item.coverImage
  const itemLink = item && item.slug ? `/profile/${item.slug}` : '/'
  // const itemAuthor = item.author ? item.author : 'john_doe'
  const itemOverview = item && item.overview

  return (
    <div className="relative mt-0 mb-4 w-full flex-grow overflow-hidden">
      <Link href={itemLink}>
        <div className="image_bg mx-auto h-12 w-12 flex-shrink-0 cursor-pointer overflow-hidden rounded-full">
          <img
            draggable="false"
            className="h-full w-full object-cover"
            src={itemImage}
            alt={itemTitle}
          />
        </div>
      </Link>
      <div className="mt-3 w-full flex-shrink overflow-hidden">
        <Link href={itemLink}>
          <div className="cursor-pointer truncate text-center text-base font-semibold leading-snug decoration-2 hover:underline">
            {itemTitle}
          </div>
        </Link>
        <div className="mt-3 max-h-10 text-center text-sm">{itemOverview}</div>
      </div>
      {/* <div className="mt-4 w-20 flex-shrink-0 cursor-pointer select-none rounded-full bg-black py-1 text-center text-sm font-semibold leading-7 text-white hover:bg-violet-500">
        Follow
      </div> */}
    </div>
  )
}

export default SidebarAuthorCard

import Link from 'next/link'

const TrendingBarCard = ({ data }) => {
  const itemTitle = data.title
  const itemImage = data.coverImage
  const itemLink = data.slug ? `/category/${data.slug}` : '/'

  return (
    <Link href={itemLink} passHref>
      <div className="image_zoom_container box_radius relative top-0 left-0 mr-2 block h-14 w-28 flex-shrink-0 cursor-pointer select-none overflow-hidden">
        <img
          draggable="false"
          className="zoom_card_image object-cover"
          src={itemImage}
          alt={itemTitle}
        />
        <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-1 w-full truncate px-2 pt-2 pb-1 text-sm text-white">
          {itemTitle}
        </div>
      </div>
    </Link>
  )
}

export default TrendingBarCard

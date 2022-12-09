import Link from 'next/link'

const LargeFeaturedCard = ({ item }) => {
  const itemTitle = item.title
  const itemImage = item.cover_image
  const itemLink = item.slug ? `/post/${item.slug}` : '/'

  return (
    <Link href={itemLink}>
      <div className="box_radius gradient_card_container h-64F relative h-full w-full flex-grow cursor-pointer overflow-hidden">
        <div className="absolute h-full w-full overflow-hidden">
          <img
            draggable="false"
            className="gradient_card_image left-0 h-full w-full object-cover"
            src={itemImage}
            alt={itemTitle}
          />
        </div>
        <div className="absolute -bottom-0 h-2/3 w-full bg-gradient-to-t from-black to-transparent" />
        <p className="card_title absolute bottom-0 z-10 px-5 pb-5 text-2xl leading-tight text-white hover:no-underline">
          {itemTitle}
        </p>
      </div>
    </Link>
  )
}

export default LargeFeaturedCard

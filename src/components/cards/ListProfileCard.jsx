import Link from 'next/link'

const CategoryCard = ({ data }) => {
  const tempTags = [
    'Valorant',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'Overwatch',
    'MMO',
    'Fifa',
    'Sandbox',
    'Indie',
    'Tournament',
    'Guide',
    'Rocket League',
    'Sea of Thieves',
    'Minecraft',
    'Dota',
    'Rust',
    'GTA',
    'V Rising',
    'Vanguard',
    'Cyberpunk',
    'Skyrim',
    'Announcement',
    'Cosplay'
  ].sort(() => Math.random() - 0.5)
  tempTags.splice(4)

  const cardTitle = data.title
  const cardImage = data.coverImage
  const cardLink = data.slug ? `/profile/${data.slug}` : '/'
  const cardTags = data.tags || tempTags
  const cardOverview = data.overview

  return (
    <div className="card_container border_color--main relative w-full min-w-sm flex-grow overflow-hidden border-b pb-6">
      <div className="flex w-full select-none space-x-7 items-center">
        <Link href={cardLink} passHref>
          <div className="image_bg relative top-0 left-0 inline-block h-24 w-24 cursor-pointer overflow-hidden rounded-full">
            <img
              draggable="false"
              className="absolute left-0 h-full w-full object-cover"
              src={cardImage}
              alt={cardTitle}
            />
          </div>
        </Link>
        <div className="relative inline-block w-1/2 flex-grow pb-0">
          <Link href={cardLink} passHref>
            <div className="card_title table max-h-14">{cardTitle}</div>
          </Link>
          <div className="mt-3 flex items-center text-sm text-neutral-400">
                        <span className="inline_publish_time text-xs">@{data.slug}</span>
            <div className="mx-1.5 h-0.5 w-0.5 rounded-full bg-neutral-500" />
            <span className="inline_publish_time text-xs">309 Followers</span>
            {/* <div className="box_radius dark:bg bg-neutral-50F px-1 pb-0.5 text-xs">
              gaming, meetup
            </div> */}
          </div>
          <div className="mt-1.5 max-h-10 w-full max-w-xl overflow-hidden truncate text-sm">
            {cardOverview}
          </div>
          <div className="card_tags_container flexF mt-4 hidden space-x-2">
            {cardTags &&
              cardTags.map((item, index) => (
                <div
                  key={`articleCard${item.slug}${index}`}
                  className="darkmode_transition box_radius bg-neutral-100 px-2 pb-0.5 text-sm text-neutral-700 dark:bg-opacity-20 dark:text-neutral-100"
                >
                  {item}
                  {/* {index < cardTags.length - 1 && ','} */}
                </div>
              ))}
          </div>
        </div>
          <div className="rounded-full hover:bg-neutral-500 flex h-9 w-20 cursor-pointer items-center justify-center bg-black text-white text-sm font-semibold">
            Follow
        </div>
      </div>
    </div>
  )
}

export default CategoryCard

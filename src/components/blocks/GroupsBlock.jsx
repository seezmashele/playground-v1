import { ThreeDotsVertical } from 'react-bootstrap-icons'
import ListProfileCard from '../cards/ListProfileCard'

const GroupsBlock = ({ articles, title = '' }) => (
  <>
    {title && (
      <>
        <div className="flex justify-between pt-4 pb-1.5">
          <h2 className="text-sidebar_card_titleF uppercaseF tracking-widerF pointer-events-none mb-5 select-none truncate whitespace-nowrap align-middle text-base font-semibold leading-7">
            {title}
          </h2>
          <div className="flex hidden select-none space-x-2 text-sm">
            <button
              type="button"
              className="border_color--main h-7 whitespace-nowrap rounded-full border px-3 pb-0.5 align-middle hover:bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-violet-500"
            >
              All
            </button>
            <button
              type="button"
              className="h-7 whitespace-nowrap rounded-full border border-violet-500 bg-violet-50 px-3 pb-0.5 align-middle hover:bg-violet-200 dark:bg-neutral-700 dark:hover:bg-violet-500"
            >
              Artists
            </button>
            <button
              type="button"
              className="border_color--main h-7 whitespace-nowrap rounded-full border px-3 pb-0.5 align-middle hover:bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-violet-500"
            >
              Streamers
            </button>
            <button
              type="button"
              className="border_color--main h-7 whitespace-nowrap rounded-full border px-3 pb-0.5 align-middle hover:bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-violet-500"
            >
              Writers
            </button>
            <button
              type="button"
              className="box_radius border_color--main flex hidden h-7 items-center whitespace-nowrap pl-3 pr-1.5 pb-0.5 align-middle "
            >
              More <ThreeDotsVertical className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
        {/* <div className="border_color--main mb-6 w-full border-b" /> */}
      </>
    )}
    <div className="relative mb-20 flex w-full flex-wrap gap-y-6 overflow-hidden">
      {articles &&
        articles.map((item, index) => (
          <ListProfileCard
            data={item}
            isLastItem={index > articles.length - 5}
            key={`groupsblock${item.slug}${index}`}
          />
        ))}
      <div className="absolute bottom-0 h-1 w-full bg-white dark:bg-neutral-900" />
    </div>
  </>
)

export default GroupsBlock

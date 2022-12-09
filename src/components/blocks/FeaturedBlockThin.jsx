import FeaturedCard from './ThinFeaturedBlock/FeaturedCard'

const FeaturedBlockThin = ({ articles }) => (
  <div className="page_width_wideF hidden  flex xs:px-0F h-10 bg-neutral-50 showSidebar:px-10F mx-auto mt-0 w-full items-center px-8">
    {/* <div className='whitespace-nowrap mr-5 text-sm'>Top Picks</div> */}
    <div className="flex hidden h-9 w-full flex-wrap flex-grow space-x-2.5 overflow-hidden">
      {articles &&
        articles.map((item, index) => (
          <FeaturedCard item={item} key={`TopPick${index}`} />
        ))}
    </div>
  </div>
)

export default FeaturedBlockThin

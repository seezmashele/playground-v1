import FeaturedCard from './FeaturedStories/FeaturedCard'

const FeaturedBlock = ({ articles }) => (
  <div className="page_width_wide page_padding_x mx-auto mt-7 flex w-full select-none xs:flex-col xs:space-y-2.5  xs:space-x-0 showSidebar:flex-row showSidebar:space-y-0 showSidebar:space-x-2.5">
    <div className="flex h-40 space-x-2.5 xs:w-full showSidebar:w-1/2">
      <FeaturedCard item={articles[0]} />
      <FeaturedCard item={articles[1]} />
    </div>
    <div className="flex h-40 space-x-2.5 xs:w-full showSidebar:w-1/2">
      <FeaturedCard item={articles[2]} />
      <FeaturedCard item={articles[3]} />
    </div>
  </div>
)

export default FeaturedBlock

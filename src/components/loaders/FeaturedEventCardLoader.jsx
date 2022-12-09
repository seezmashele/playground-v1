const FeaturedEventCardLoader = () => (
  <div className="w-52 flex-shrink-0 flex-grow animate-pulse">
    <div className="box_radius loader_bg_color relative top-0 left-0 block h-32 w-full cursor-pointer overflow-hidden" />
    <div className="mt-3 flex items-center text-sm">
      <div className="loader_bg_color mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-full text-white" />
      <span className="loader_bg_color box_radius h-4 w-72 font-semibold" />
    </div>
    <div className="loader_bg_color box_radius mt-2.5 h-4 w-full" />
    <div className="loader_bg_color box_radius mt-2.5 h-4 w-full" />
    <div className="loader_bg_color box_radius mt-4 h-4 w-full" />
  </div>
)

export default FeaturedEventCardLoader

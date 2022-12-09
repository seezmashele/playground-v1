const SectionTitle = ({ title = '' }) => (
  <div className="pt-8 pb-7">
    <h2 className="pointer-events-none select-none truncate whitespace-nowrap align-middle text-sidebar_card_title font-bold leading-7">
      {title}
    </h2>
    {/* <div className="border_color--main border-bF mb-4 w-full" /> */}
  </div>
)

export default SectionTitle

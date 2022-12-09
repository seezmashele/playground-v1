const Footer = () => (
  <div className="border_color--main container_bg_color--primary relative w-full overflow-hidden border-t pt-5 text-white">
    <div className="page_width_wideF h-24F relative mx-auto px-8 pb-5">
      {/* <div className="select-none text-xs text-black">Sponsors</div> */}
      <div className="flex h-16 items-center justify-center">
        <div />
      </div>
    </div>
    <div className="border_color--main w-full border-t py-3 text-sm text-neutral-600 dark:text-neutral-200">
      <div className="page_width_wide relative mx-auto flex select-none justify-end gap-x-3 text-xs">
        {/* <span className="mx-0.5 cursor-pointer hover:underline">Support</span>| */}
        <span className="mx-0.5 cursor-pointer hover:underline">
          Terms of Service
        </span>
        |
        <span className="mx-0.5 cursor-pointer hover:underline">
          Privacy Policy
        </span>
      </div>
    </div>
  </div>
)

export default Footer

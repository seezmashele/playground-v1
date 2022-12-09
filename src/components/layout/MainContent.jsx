const MainContent = ({ children }) => (
  <div className="outer_wrapper mt-8 w-full overflow-hidden">
    <div className="flex h-full flex-col">{children}</div>
  </div>
)

export default MainContent

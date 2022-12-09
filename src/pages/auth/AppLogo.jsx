import { useTheme } from 'next-themes'

const AppLogo = () => {
  const { theme } = useTheme()

  return (
    <div className="mx-auto h-6.5 w-48 flex-shrink-0 select-none">
      <img
        className="h-full w-full object-contain object-center"
        src={theme === 'dark' ? '/logo-min-white.svg' : '/logo-min.svg'}
        alt="playground logo"
      />
    </div>
  )
}

export default AppLogo

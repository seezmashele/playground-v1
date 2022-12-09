import Nav from '../../components/layout/Nav'
import PageHead from '../../components/misc/PageHead'
import Footer from '../../components/layout/Footer'
import DashboardMenu from '../../components/layout/DashboardMenu'

const DashboardHomePage = () => (
  <>
    <PageHead title="" />
    <Nav hideStories />

    <main className="page_width_wide mx-auto flex w-full flex-row">
      <DashboardMenu />
      <div className="flex min-h-screen w-full pl-6">
        <div className="h-96 w-full max-w-3xl" />
      </div>
    </main>
    <Footer />
  </>
)

export default DashboardHomePage

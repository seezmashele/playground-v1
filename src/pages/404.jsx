import Nav from '../components/layout/Nav'
import PageHead from '../components/misc/PageHead'
import Footer from '../components/layout/Footer'

const ErrorPage = () => (
  <>
    <PageHead title="" />
    <Nav />

    <main className="page_width_wide mx-auto flex w-full flex-row">
      <div className="mx-auto h-full w-full max-w-xl pt-5 pb-20">
        <div className="bg-gradient-to-r from-[#AA0000] to-[#FF0000] bg-clip-text text-center text-[12rem] font-semibold text-transparent">
          404
        </div>
        <div className=" text-center text-2xl font-semibold">
          Something isnt right here...
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default ErrorPage

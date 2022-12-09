import { useEffect, useState } from 'react'
import Nav from '../../components/layout/Nav'
import PageHead from '../../components/misc/PageHead'
import ProfileSidebar from '../../components/layout/ProfileSidebar'
import Footer from '../../components/layout/Footer'
import ArticlesListBlock from '../../components/blocks/ArticlesListBlock'
import { useDatabase } from '../../context/DatabaseContext'
import Pagination from '../../components/layout/Pagination'

const HomePage = () => {
  const { useNewsPageArticles, useSidebarGroups } = useDatabase()
  const { newsPageArticles1 } = useNewsPageArticles()
  const { sidebarGroups1 } = useSidebarGroups()
  const [tempPic, setTempPic] = useState(null)
  const [tempProfileName, setTempProfileName] = useState('ChloGeraghty')

  useEffect(() => {
    if (sidebarGroups1 && sidebarGroups1[0]) {
      if (sidebarGroups1[0].coverImage) {
        setTempPic(sidebarGroups1[0].coverImage)
        setTempProfileName(sidebarGroups1[0].title)
      }
    }
  }, [sidebarGroups1])

  return (
    <>
      <PageHead title="" />
      <Nav />

      <main className="border_color--main w-full overflow-hidden border-b">
        {/* <div className="absolute top-0 left-0 -z-50 h-80 w-full bg-gradient-to-b from-neutral-300 to-transparent opacity-10" /> */}
        <div className="page_width_wide mx-auto flex h-full w-full justify-end pt-10 pb-10">
          <div className="space-between items-centerF bg-purple-100F flex w-full max-w-4xl space-x-5">
            <div className="flex flex-grow">
              <div className="container_bg_color--secondary mr-7 mt-1 h-32 w-32 flex-shrink-0 overflow-hidden rounded-full">
                <img src={tempPic} draggable="false" alt="temp profile pic" />
              </div>
              <div className="text-sm">
                <h3 className="text-2xl font-bold">{tempProfileName}</h3>
                <p className="light_text_color mt-0.5">@chlodawg911</p>
                <p className="mt-4 leading-relaxed">
                  Destroyer of sesame chicken wraps <br />
                  📺http://twitch.tv/dead_oryx 📷http://instagram.com/dead_oryx
                  📱http://tiktok.com/@deadoryx
                </p>
              </div>
            </div>
            {/* <div className="mt-5 w-full" /> */}
          </div>
          <div className="sidebar_width shrink-0 pl-10">
            <div>something</div>
            <div>something</div>
            <div>something</div>
            <div>something</div>
          </div>
        </div>
      </main>

      <main className="page_width_wide mx-auto flex w-full flex-row">
        <div className="main_content_container">
          {newsPageArticles1 && (
            <ArticlesListBlock
              articles={newsPageArticles1}
              title="Latest posts"
            />
          )}
          <Pagination />
        </div>
        <ProfileSidebar />
      </main>

      <Footer />
    </>
  )
}

export default HomePage

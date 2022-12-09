import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import Nav from '../../components/layout/Nav'
import PageHead from '../../components/misc/PageHead'
import Footer from '../../components/layout/Footer'
import DashboardMenu from '../../components/layout/DashboardMenu'
import { createCategory } from '../../utils/firebase/createData'
import { storage } from '../../utils/firebase'
import { stringToSlug } from '../../utils/helpers/strings'

const CreateCategoryPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [imageToUpload, setImageToUpload] = useState(null)

  const submitNewDocument = async (data) => {
    if (imageToUpload && data && data.title) {
      const itemSlug = stringToSlug(data.title)
      const imageRef = ref(storage, `images/categories/${itemSlug}`)
      uploadBytes(imageRef, imageToUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          createCategory(
            {
              title: data.title,
              coverImageUrl: url,
              slug: itemSlug
            },
            itemSlug
          )
        })
      })
    }
  }

  return (
    <>
      <PageHead title="" />
      <Nav hideStories />

      <main className="page_width_wide mx-auto flex w-full flex-row">
        <DashboardMenu />
        <div className="min-h-screen w-full  p-5">
          <h2 className="mb-5 text-xl font-bold">Add a new category</h2>
          <div className="mb-2 text-sm">Image</div>
          <div className="box_radius mb-3 h-52 w-96 overflow-hidden border">
            <img
              className="h-full w-full object-contain"
              src={imageToUpload ? URL.createObjectURL(imageToUpload) : ''}
              alt=""
            />
          </div>
          <div className="mb-10 w-full">
            <div className="mb-5 w-full">
              <input
                type="file"
                onChange={(event) => {
                  setImageToUpload(event.target.files[0])
                }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit(submitNewDocument)}>
            <div className="mb-2 text-sm">Title</div>
            <input
              className="box_radius mr-3 mb-5 w-full border p-2"
              {...register('title')}
            />
            <div className="mb-2 text-sm">Body</div>
            <input
              className="box_radius mr-3 w-full border p-2"
              {...register('body')}
            />
            {errors.body && (
              <div className="mt-2 w-full text-sm text-red-500">
                This field is required
              </div>
            )}
            <button
              type="submit"
              className="box_radius mt-8 bg-blue-500 px-10 py-2 text-sm text-white"
            >
              Create new post
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CreateCategoryPage

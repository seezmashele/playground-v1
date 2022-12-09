import { useEffect, useRef, useState } from 'react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { useForm } from 'react-hook-form'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { Calendar2Event, Image, Upload } from 'react-bootstrap-icons'
import { useMutation } from '@apollo/client'
import DatePicker from 'react-datepicker'
import Nav from '../../components/layout/Nav'
import PageHead from '../../components/misc/PageHead'
import { storage } from '../../utils/firebase'
import {
  stringToSlug,
  getEditorStateOverview
} from '../../utils/helpers/strings'
import { CREATE_EVENT_MUTATION } from '../../utils/graphql/Mutations'
import LexicalToolbar from '../../components/widgets/LexicalToolbar'
import Footer from '../../components/layout/Footer'
import 'react-datepicker/dist/react-datepicker.css'

const HomePage = () => {
  const editorStateRef = useRef()
  const [createEventMutation, { error }] = useMutation(CREATE_EVENT_MUTATION)
  const [startDate, setStartDate] = useState(new Date())
  const [submitting, setSubmitting] = useState(false)
  // const [successfulUpload, setSuccessfulUpload] = useState(false)
  const [imageToUpload, setImageToUpload] = useState(null)

  const theme = {}
  const onError = (err) => err

  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError
  }

  useEffect(() => {
    const temp = () => error
    temp()
  }, [error])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const submitNewDocument = async (data) => {
    if (imageToUpload && data && data.title && editorStateRef.current) {
      setSubmitting(true)
      try {
        const editorStateString = JSON.stringify(editorStateRef.current)
        const overview = getEditorStateOverview(editorStateRef.current)
        const itemSlug = stringToSlug(data.title)
        const dateISO = startDate ? startDate.toISOString() : null
        const imageRef = ref(storage, `images/posts/${itemSlug}`)
        uploadBytes(imageRef, imageToUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then(async (url) => {
            await createEventMutation({
              variables: {
                title: data.title,
                editorState: editorStateString,
                coverImage: url,
                startDate: dateISO,
                slug: itemSlug,
                overview
              }
            })
            setSubmitting(false)
          })
        })
      } catch (err) {
        setSubmitting(false)
        return err
      }
    }
    return { success: true }
  }

  return (
    <>
      <PageHead title="" />
      <Nav hideStories />

      <main className="border_color--mainw-full border-bF">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-5 pt-5">
          <div className="flex items-center space-x-3">
            <div className="text-[#ff0000]">
              <Calendar2Event />
            </div>
            <div className="whitespace-nowrap text-sm">
              {`Create an event | `}
              <span className="font-semibold">miragrox</span>
            </div>
          </div>
                    <div className='flex'>

          <div
              role="status"
              className={`mr-5 flex w-auto items-center text-accent-main ${
                !submitting && 'hidden'
              }`}
            >
              <svg
                className="-ml-1 mr-3 h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <div className="select-none text-sm">Uploading event</div>
            </div>
          <button
            type="button"
            onClick={handleSubmit(submitNewDocument)}
            className="box_radius h-8F flex cursor-pointer select-none items-center bg-accent-main px-3 pt-1.5 pb-2 text-sm font-semibold text-white hover:bg-accent-main-hover"
            >
            <Upload className="mr-2.5 h-3.5 w-3.5" />
            Publish
          </button>
            </div>
        </div>
      </main>

      <main className="border_color--main w-full border-bF pb-5">
        <div className="mx-auto w-full max-w-4xl px-5">
          <div className="mb-5 flex w-full items-center justify-end text-sm">
            <div
              role="status"
              className={`mr-5 flex w-auto items-center text-accent-main ${
                !submitting && 'hidden'
              }`}
            >
              <svg
                className="-ml-1 mr-3 h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <div className="select-none text-sm">Uploading event</div>
            </div>
            {/* <button
              type="button"
              onClick={handleSubmit(submitNewDocument)}
              className="box_radius flex cursor-pointer select-none items-center bg-accent-main px-3 pt-1.5 pb-2 font-semibold text-white hover:bg-accent-main-hover"
            >
              <Upload className="mr-2.5 h-3.5 w-3.5" />
              Publish
            </button> */}
          </div>

          <form onSubmit={handleSubmit(submitNewDocument)}>
            <div className="space-between flex gap-4">
              <div className="w-1/2">
                <textarea
                  placeholder="Event title here"
                  className="box_radius container_bg_color--primary black_border mb-2.5 h-28 w-full border py-4 px-4 text-2xl font-bold leading-normal focus:border-none"
                  defaultValue=""
                  {...register('title')}
                />
                {errors.title && (
                  <div className="mt-2 w-full text-sm text-red-500">
                    This field is required
                  </div>
                )}
                <div className="black_border box_radius w-full border p-3">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    monthsShown={2}
                    showPopperArrow={false}
                  />
                </div>
                <div className="mt-4">
                  <input
                    placeholder="Tags or dates"
                    className="box_radius container_bg_color--primary black_border mb-5 w-full border  py-4 px-4 leading-normal focus:border-none"
                    defaultValue=""
                    {...register('dates')}
                  />
                </div>
              </div>
              <div className="black_border box_radius w-1/2 overflow-hidden border">
                <div
                  className="blockF mb-3 hidden text-sm font-medium text-neutral-900 dark:text-neutral-300"
                  htmlFor="file_input"
                >
                  Image
                </div>
                <div className="box_radiusF container_bg_color--primary black_border borderF h-56 w-full overflow-hidden">
                  <div className="absolute z-20 flex h-56 w-full max-w-md items-center justify-center">
                    <Image className="h-12 w-12 text-neutral-200" />
                  </div>
                  <img
                    className="image_preview box_radiusF z-50 h-full w-full overflow-hidden object-cover"
                    src={
                      imageToUpload ? URL.createObjectURL(imageToUpload) : null
                    }
                    alt=""
                  />
                </div>
                <div className="mt-0 w-full p-1">
                  <div className="box_radius w-full cursor-pointer bg-neutral-50">
                    <div
                      className="mb-3 hidden text-sm font-medium text-neutral-900 dark:text-neutral-300"
                      htmlFor="file_input"
                    >
                      Upload file
                    </div>

                    <input
                      id="post_image_file_input"
                      type="file"
                      className="file_input_button_color file:box_radius file:border_color--main blockF hiddenF w-full border-none text-sm text-black file:mr-2.5 file:cursor-pointer file:border-0 file:border-solid  file:border-[neutral-150] file:py-2 file:px-2.5 file:shadow-none focus:outline-none dark:text-neutral-400"
                      onChange={(event) => {
                        setImageToUpload(event.target.files[0])
                      }}
                    />
                    {/* <div className="flex w-full justify-end">
                      <input
                        type="button"
                        className="box_radius border_color--main container_bg_color--secondary cursor-pointer border px-2.5 py-2 text-sm text-black focus:outline-none dark:text-neutral-400"
                        value="Choose File"
                        onClick={() => {
                          const fileButton = document.getElementById(
                            'post_image_file_input'
                          )
                          if (fileButton) fileButton.click()
                        }}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* <div className="border_color--main mb-5 mt-5 w-full border-b" /> */}

      <main className="mx-auto mt-5 flex w-full flex-row pb-14">
        <LexicalComposer initialConfig={initialConfig}>
          <div className="mx-auto w-full max-w-2xl">
            <LexicalToolbar title="Write your content stuff here" />
            <div className="mt-1" />
            <PlainTextPlugin
              // placeholder="This is where your awesome post begins"
              contentEditable={
                <ContentEditable className="container_bg_color--primary black_border box_radius min-h-post border p-5" />
              }
            />
            <OnChangePlugin
              onChange={(editorState) => {
                editorStateRef.current = editorState
              }}
            />
            <HistoryPlugin />
          </div>
        </LexicalComposer>
      </main>
      <Footer />
    </>
  )
}

export default HomePage

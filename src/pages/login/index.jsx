import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Nav from '../../components/layout/Nav'
import PageHead from '../../components/misc/PageHead'
import { useAuth } from '../../context/AuthContext'

const LoginPage = () => {
  const router = useRouter()
  const { login } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const convertErrorMessage = (error) => {
    switch (error) {
      case 'auth/user-not-found':
        return 'That account does not exist'
      case 'auth/wrong-password':
        return 'Email or password is incorrect'
      default:
        return 'Something went wrong'
    }
  }

  const submitLogin = async (data) => {
    if (data) {
      setSubmitting(true)
      const result = await login(data.email, data.password)
      if (result.errorCode) {
        setErrorMessage(convertErrorMessage(result.errorCode))
        setSubmitting(false)
      } else {
        router.push('/')
      }
    }
  }

  return (
    <>
      <PageHead title="Sign in" />
      <Nav hideStories hideNavButtons />

      <div className="page_width_wide z-10 mx-auto flex w-full flex-row">
        <div className="box_radius mx-auto mt-10 w-full max-w-md py-8 ">
          <div className=" mt-8 px-5 text-center text-xl font-semibold">
            Welcome back 👋
          </div>
          <div className="mt-8 px-5 text-sm">
            <form onSubmit={handleSubmit(submitLogin)}>
              <div className="mt-5">
                <div className="text-sm font-semibold">Email</div>
                <input
                  type="email"
                  className="textfield_radius bg-neutral-150F mt-1.5 w-full border border-neutral-200 px-4 pt-2.5 pb-2.5"
                  defaultValue=""
                  {...register('email')}
                />
                {errors.email && (
                  <div className="mt-2 w-full text-sm text-red-500">
                    This field is required
                  </div>
                )}
              </div>
              <div className="">
                <div className="mt-5 text-sm font-semibold">Password</div>
                <input
                  type="password"
                  className="textfield_radius mt-1.5 w-full border border-neutral-200 px-4 py-2.5"
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <div className="mt-2 w-full text-sm text-red-500">
                    This field is required
                  </div>
                )}
              </div>
              <div
                role="status"
                className={`mx-auto mt-8 flex w-auto items-center justify-center text-accent-main ${
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
                <div className="select-none text-sm">Logging in...</div>
              </div>
              <div
                className={`box_radius mt-8 bg-red-50 p-2 text-sm text-red-600 ${
                  !errorMessage && 'hidden'
                }`}
              >
                {errorMessage}
              </div>
              <div className="mt-8 text-xs text-neutral-500">
                By creating an account, I agree to the{' '}
                <span className="cursor-pointer font-semibold text-theme-blue hover:underline">
                  Terms
                </span>{' '}
                and{' '}
                <span className="cursor-pointer font-semibold text-theme-blue hover:underline">
                  Privacy Policy
                </span>
                .
              </div>
              <button
                type="submit"
                className="button_radius mt-7 w-full bg-accent-main px-10 py-2.5 text-sm font-semibold text-white hover:bg-accent-main-hover"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage

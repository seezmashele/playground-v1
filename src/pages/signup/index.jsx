import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Transition, Listbox } from '@headlessui/react'
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useAuth } from '../../context/AuthContext'
import Nav from '../../components/layout/Nav'
import PageHead from '../../components/misc/PageHead'
// import AppLogo from '../auth/AppLogo'

const LoginPage = () => {
  const router = useRouter()
  const { signup } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [errorMessage, setErrorMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const months = [
    { name: 'January' },
    { name: 'Febuary' },
    { name: 'March' },
    { name: 'April' },
    { name: 'May' },
    { name: 'June' },
    { name: 'July' },
    { name: 'August' },
    { name: 'September' },
    { name: 'October' },
    { name: 'November' },
    { name: 'December' }
  ]
  const [selectedMonth, setSelectedMonth] = useState(months[0])

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

  const submitSignup = async (data) => {
    if (data) {
      setSubmitting(true)
      const result = await signup(
        data.email,
        data.password,
        data.username,
        data.displayName,
        12345
      )
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
        <div className="h-fullF textfield_radius h-96F shadow-lgF borderF bg-whiteF mx-auto mt-0 w-full max-w-md py-5">
          {/* <AppLogo /> */}
          <div className=" mt-8 px-5 text-center text-xl font-semibold">
            Create an account 😀
          </div>
          <div className="mt-8 px-5 text-sm">
            <form onSubmit={handleSubmit(submitSignup)}>
              <div className="mt-5">
                {/* <div className="text-sm font-semibold">Username</div>
                <input
                  type="text"
                  className="textfield_radius mt-1.5 w-full border border-neutral-200 px-4 py-2.5"
                  {...register('username', {
                    required: true
                  })}
                />
                {errors.username && (
                  <div className="mt-2 w-full text-sm text-red-500">
                    This field is required
                  </div>
                )} */}
                <div className="mt-6 text-sm font-semibold">Email</div>
                <input
                  type="email"
                  className="textfield_radius mt-1.5 w-full border border-neutral-200 px-4 py-2.5"
                  defaultValue=""
                  {...register('email')}
                />
                {errors.email && (
                  <div className="mt-2 w-full text-sm text-red-500">
                    This field is required
                  </div>
                )}
              </div>
              {/* <div className="mt-6 text-sm font-semibold">Name</div>
              <input
                type="text"
                className="textfield_radius mt-1.5 w-full bg-neutral-150 px-3 pt-1 pb-1.5"
                {...register('displayName', {
                  required: true
                })}
              />
              {errors.displayName && (
                <div className="mt-2 w-full text-sm text-red-500">
                  This field is required
                </div>
              )} */}
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
              <div className="mt-5 text-sm font-semibold">Date of birth</div>
              <div className="mt-1.5 flex w-full flex-nowrap space-x-2">
                <Listbox
                  className="w-48 flex-shrink-0"
                  value={selectedMonth}
                  onChange={setSelectedMonth}
                >
                  <div className="relative mt-1">
                    <Listbox.Button className="textfield_radius relative w-full cursor-default bg-neutral-150 pt-1 pb-1.5 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">
                        {selectedMonth.name}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        {/* <SelectorIcon
                          className="h-5 w-5 text-neutral-400"
                          aria-hidden="true"
                        /> */}
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white pb-0.5 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {months.map((month, monthIndex) => (
                          <Listbox.Option
                            key={`birthmonth${monthIndex}`}
                            className={({ active }) =>
                              `relative cursor-default select-none py-1 pl-5 pr-4 ${
                                active
                                  ? 'bg-accent-main text-white'
                                  : 'text-neutral-900'
                              }`
                            }
                            value={month}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {month.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    {/* <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    /> */}
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
                <input
                  placeholder="Day"
                  type="text"
                  className="textfield_radius mt-1.5 w-full border border-neutral-200 px-4 py-2.5"
                  {...register('birthDay', {
                    required: true
                  })}
                />
                <input
                  placeholder="Year"
                  type="text"
                  className="textfield_radius mt-1.5 w-full border border-neutral-200 px-4 py-2.5"
                  {...register('birthYear', {
                    required: true
                  })}
                />
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
                <div className="select-none text-sm">Creating account...</div>
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
              <div
                className={`textfield_radius mt-8 bg-red-50 p-2 text-sm text-red-600 ${
                  !errorMessage && 'hidden'
                }`}
              >
                {errorMessage}
              </div>
              <button
                type="submit"
                className="button_radius mt-7 w-full bg-accent-main px-10 py-2.5 text-sm font-semibold text-white hover:bg-accent-main-hover"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage

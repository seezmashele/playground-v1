import { Fragment, useState } from 'react'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { useForm } from 'react-hook-form'
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useAuth } from '../../../context/AuthContext'

// make titles and messages not selectable
const LoginModal = ({
  closeModal,
  modalIsOpen,
  loginFormIsSelected,
  setLoginFormIsSelected
}) => {
  const { signup, login } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
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
  const {
    register,
    handleSubmit,
    reset,
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
      setIsSubmitting(true)
      const result = await login(data.email, data.password)
      if (result.errorCode) {
        setErrorMessage(convertErrorMessage(result.errorCode))
      } else {
        closeModal()
        reset()
      }
      setIsSubmitting(false)
    }
  }

  const submitSignup = async (data) => {
    if (data) {
      setIsSubmitting(true)
      const result = await signup(
        data.email,
        data.password,
        data.username,
        data.displayName,
        12345
      )
      if (result.errorCode) {
        setErrorMessage(result.errorCode)
      } else {
        closeModal()
        reset()
      }
      setIsSubmitting(false)
    }
  }

  return (
    <Transition appear show={modalIsOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-4 py-8 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="dialog_box_radius w-full max-w-md transform bg-white p-5 text-left align-middle text-black shadow-xl transition-all">
                <div className="space-between flex items-center">
                  <div className="h-5 w-28 flex-shrink-0">
                    <img
                      draggable="false"
                      className="h-full w-full object-contain object-left"
                      src="/logo-min.svg"
                      alt="playground logo"
                    />
                  </div>
                  <div className="mr-5 h-5 w-px bg-neutral-300" />
                  <Dialog.Title
                    as="h3"
                    className="select-none text-xl font-semibold leading-6 text-neutral-900"
                  >
                    {loginFormIsSelected
                      ? 'Welcome back 👋'
                      : 'Join the Playground 🎉'}
                  </Dialog.Title>
                </div>
                <div className="mt-6 flex w-full justify-start space-x-6 border-b text-sm font-semibold">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      setLoginFormIsSelected(true)
                    }}
                    className="whitespace-nowrap"
                  >
                    Log in
                    <div
                      style={{ opacity: loginFormIsSelected ? 1 : 0 }}
                      className="pointer-events-none relative mt-1.5 h-0.5 w-full bg-accent-main"
                    />
                  </button>
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      setLoginFormIsSelected(false)
                    }}
                    className="whitespace-nowrap"
                  >
                    Sign up
                    <div
                      style={{ opacity: loginFormIsSelected ? 0 : 1 }}
                      className="pointer-events-none relative mt-1.5 h-0.5 w-full bg-accent-main"
                    />
                  </button>
                </div>
                <form
                  onSubmit={handleSubmit(
                    loginFormIsSelected ? submitLogin : submitSignup
                  )}
                >
                  <div className={`mt-6 ${loginFormIsSelected && 'hidden'}`}>
                    <div className="text-sm font-semibold">Name</div>
                    <input
                      type="text"
                      className="box_radius mt-1.5 w-full bg-neutral-150 px-3 pt-1 pb-1.5"
                      {...register('displayName', {
                        required: !loginFormIsSelected
                      })}
                    />
                    {errors.displayName && (
                      <div className="mt-2 w-full text-sm text-red-500">
                        This field is required
                      </div>
                    )}
                  </div>
                  <div className={`mt-6 ${loginFormIsSelected && 'hidden'}`}>
                    <div className="text-sm font-semibold">Username</div>
                    <input
                      type="text"
                      className="box_radius mt-1.5 w-full bg-neutral-150 px-3 pt-1 pb-1.5"
                      {...register('username', {
                        required: !loginFormIsSelected
                      })}
                    />
                    {errors.username && (
                      <div className="mt-2 w-full text-sm text-red-500">
                        This field is required
                      </div>
                    )}
                  </div>
                  <div className="mt-5">
                    <div className="text-sm font-semibold">Email</div>
                    <input
                      type="email"
                      className="box_radius mt-1.5 w-full bg-neutral-150 px-3 pt-1 pb-1.5"
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
                      className="box_radius mt-1.5 w-full bg-neutral-150 px-3 pt-1 pb-1.5"
                      {...register('password', { required: true })}
                    />
                    {errors.password && (
                      <div className="mt-2 w-full text-sm text-red-500">
                        This field is required
                      </div>
                    )}
                  </div>
                  <div className={`${loginFormIsSelected && 'hidden'} hidden`}>
                    <div className="mt-5 text-sm font-semibold">
                      Date of birth
                    </div>
                    <div className="mt-1.5 flex w-full flex-nowrap space-x-2">
                      <Listbox
                        className="w-48 flex-shrink-0"
                        value={selectedMonth}
                        onChange={setSelectedMonth}
                      >
                        <div className="relative mt-1">
                          <Listbox.Button className="box_radius relative w-full cursor-default bg-neutral-150 pt-1 pb-1.5 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                                          selected
                                            ? 'font-medium'
                                            : 'font-normal'
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
                        className="box_radius mt-1.5 w-full bg-neutral-150 px-3 pt-1 pb-1.5"
                        {...register('birthDay', {
                          required: false
                        })}
                      />
                      <input
                        placeholder="Year"
                        type="text"
                        className="box_radius mt-1.5 w-full bg-neutral-150 px-3 pt-1 pb-1.5"
                        {...register('birthYear', {
                          required: false
                        })}
                      />
                    </div>
                  </div>
                  <div
                    role="status"
                    className={`mx-auto mt-8 flex w-auto items-center justify-center text-accent-main ${
                      !isSubmitting && 'hidden'
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
                    <div className="select-none text-sm">
                      {loginFormIsSelected ? 'Logging in' : 'Creating account'}
                      ...
                    </div>
                  </div>
                  <div
                    className={`mt-8 text-xs text-neutral-500 ${
                      loginFormIsSelected && 'hidden'
                    }`}
                  >
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
                    className={`box_radius mt-8 bg-red-50 p-2 text-sm text-red-600 ${
                      !errorMessage && 'hidden'
                    }`}
                  >
                    {errorMessage}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="box_radius mt-6 w-full select-none bg-accent-main px-10 py-2 text-sm font-semibold text-white hover:bg-violet-600"
                  >
                    {loginFormIsSelected ? 'Log in' : 'Sign up'}
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default LoginModal

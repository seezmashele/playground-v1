const Pagination = () => (
  <div className="border_color--main mt-10 flex items-center justify-between border-t py-14 dark:text-neutral-300">
    <div className="flex flex-1 justify-between sm:hidden">
      <div
        href="#"
        className="hover_color--neutral border_color--pagination relative inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
      >
        Previous
      </div>
      <div
        href="#"
        className="hover_color--neutral border_color--pagination relative ml-3 inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
      >
        Next
      </div>
    </div>
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-nuetral-700 text-sm dark:text-neutral-300">
          Showing
          <span className="font-medium"> 1 </span>
          to
          <span className="font-medium"> 10 </span>
          of
          <span className="font-medium"> 97 </span>
          results
        </p>
      </div>
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <div
            href="#"
            className="hover_color--neutral border_color--pagination relative inline-flex items-center rounded-l-md border px-2 py-2 text-sm font-medium focus:z-20"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center border border-violet-500 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600 focus:z-20 dark:bg-violet-800 dark:text-neutral-200"
          >
            1
          </div>
          <div
            href="#"
            className="hover_color--neutral border_color--pagination relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"
          >
            2
          </div>
          <div
            href="#"
            className="hover_color--neutral border_color--pagination relative hidden items-center border px-4 py-2 text-sm font-medium focus:z-20 md:inline-flex"
          >
            3
          </div>
          <span className="border_color--pagination relative inline-flex items-center border px-4 py-2 text-sm font-medium">
            ...
          </span>
          <div
            href="#"
            className="hover_color--neutral border_color--pagination relative hidden items-center border px-4 py-2 text-sm font-medium focus:z-20 md:inline-flex"
          >
            8
          </div>
          <div
            href="#"
            className="hover_color--neutral border_color--pagination relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"
          >
            9
          </div>
          <div
            href="#"
            className="hover_color--neutral border_color--pagination relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"
          >
            10
          </div>
          <div
            href="#"
            className="hover_color--neutral border_color--pagination relative inline-flex items-center rounded-r-md border px-2 py-2 text-sm font-medium focus:z-20"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </nav>
      </div>
    </div>
  </div>
)

export default Pagination

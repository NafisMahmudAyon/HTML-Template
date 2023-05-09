import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  function toggleExpansion() {
    setNavbar(!navbar);
  }
  return (
    <nav class=" border-gray-200 relative w-full bg-background">
      <div class="max-w-screen-xl border-b-[1px] border-res-head flex flex-wrap items-center justify-between mx-auto py-4 px-20 sm:px-4">
        {/* <div>
          
        </div> */}
        <a href="/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-text text-2xl font-semibold whitespace-nowrap">
            Flowbite
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 border-text border-[2px] ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleExpansion}
        >
          
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="#f5c763"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class={`  ${navbar ? "absolute top-14 left-1/2 -translate-x-1/2 w-[85%] block  rounded-lg shadow-md shadow-res-head z-10" : "hidden"} `} id="navbar-default">
          <ul class="font-medium flex flex-col p-4 mt-4 border  rounded-lg bg-back  border-res-head">
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 text-text hover:text-text-mark hover:bg-text hover:rounded-md "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/post"
                class="block py-2 pl-3 pr-4 text-text hover:text-text-mark hover:bg-text hover:rounded-md "
              >
                Post Layout
              </a>
            </li>
            <li>
              <a
                href="/Section"
                class="block py-2 pl-3 pr-4 text-text hover:text-text-mark hover:bg-text hover:rounded-md "
              >
                Section
              </a>
            </li>
            <li>
              <a
                href="/post"
                class="block py-2 pl-3 pr-4 text-text hover:text-text-mark hover:bg-text hover:rounded-md "
              >
                Full Post Template
              </a>
            </li>
            <li>
              <a
                href="/post"
                class="block py-2 pl-3 pr-4 text-text hover:text-text-mark hover:bg-text hover:rounded-md "
              >
                Full Page Template
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

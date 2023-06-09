import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  function toggleExpansion() {
    setNavbar(!navbar);
  }
  return (
    <nav className=" border-gray-200 relative w-full bg-background">
      <div className="max-w-screen-xl border-b-[1px] border-res-head flex flex-wrap items-center justify-between mx-auto py-4 px-20 sm:px-4">
        {/* <div>
          
        </div> */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            width={32}
            height={32}
            alt="HTML Template Logo"
          />
          <span className="self-center text-text text-2xl font-semibold whitespace-nowrap">
            HTML Template
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 border-text border-[2px] ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleExpansion}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="#f5c763"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`  ${
            navbar
              ? "absolute top-14 left-1/2 -translate-x-1/2 w-[85%] block  rounded-lg shadow-md shadow-res-head z-10"
              : "hidden"
          } `}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 mt-4 border  rounded-lg bg-back  border-res-head">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-text hover:text-text-mark hover:bg-text hover:rounded-md "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/post"
                className="block py-2 pl-3 pr-4 text-text hover:text-text-mark hover:bg-text hover:rounded-md "
              >
                Post Layout
              </Link>
            </li>
            <li>
              <Link
                href="/Section"
                className="block py-2 pl-3 pr-4 text-text hover:text-text-mark hover:bg-text hover:rounded-md "
              >
                Section
              </Link>
            </li>
            <li>
              <Link
                href="/post"
                className="block py-2 pl-3 pr-4 text-text hover:text-text-mark hover:bg-text hover:rounded-md "
              >
                Full Post Template
              </Link>
            </li>
            <li>
              <Link
                href="/post"
                className="block py-2 pl-3 pr-4 text-text hover:text-text-mark hover:bg-text hover:rounded-md "
              >
                Full Page Template
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="w-full block ">
        <ul className="flex justify-between ">
          <li>
            <img className="w-48" src={Logo} alt="" />
          </li>
          <li>
            <ul className="flex justify-between space-x-6">
              <li ><button ><span className="flex space-x-1 p-1 border-solid border-2 border-sky-500"><CiSquarePlus className="text-3xl font-bold" /><span className="text-2xl font-medium">Add Trip</span></span></button></li>
              
              <li>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      PROFILE
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Account settings
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Support
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          License
                        </a>
                        <form method="POST" action="#">
                          <button
                            type="submit"
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            Sign out
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

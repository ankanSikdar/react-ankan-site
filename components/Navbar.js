import Image from "next/image";

import logo_dark from "../public/assets/images/logo_dark.png";
import logo_light from "../public/assets/images/logo_light.png";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  return (
    <nav className="mx-auto">
      <ul className="flex items-center justify-between">
        <li>
          <Image
            src={isDarkMode ? logo_dark : logo_light}
            alt="Logo Light Color"
            width={180}
          />
        </li>
        <li className="mr-3">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {isDarkMode ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            }
          </button>
        </li>
      </ul>
    </nav>
  );
}

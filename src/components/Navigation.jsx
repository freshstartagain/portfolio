import React, { useEffect, useState, useCallback } from "react";

function Navigation() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-row-reverse bg-white py-5 px-5 dark:bg-stone-900 md:flex-row md:justify-between md:text-left">
      <div className="hidden w-full md:block md:w-auto">
        <a
          href="#profile"
          className="text-2xl font-semibold text-black no-underline hover:text-black dark:text-white dark:hover:text-white"
        >
          Profile
        </a>
        <a
          href="#timeline"
          className="ml-10 text-2xl font-semibold text-sky-700 no-underline hover:text-black dark:text-gray-500 dark:hover:text-white"
        >
          Timeline
        </a>
        <a
          href="#tools"
          className="ml-10 text-2xl font-semibold text-sky-700 no-underline hover:text-black dark:text-gray-500 dark:hover:text-white"
        >
          Tools
        </a>
      </div>
      <div>
        <button
          type="button"
          class="right-20 top-4 z-10 ml-3 rounded-md p-1 text-lg text-gray-500 md:hidden"
        >
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
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
      </div>
      <div className="mb-2 sm:mb-0">
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="right-20 top-4 z-10 rounded-md bg-violet-300 p-1 text-lg dark:bg-orange-300 dark:text-black"
        >
          {theme === "dark" ? sun : moon}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;

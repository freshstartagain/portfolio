import React from "react";

function Nav() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white w-full">
      <div>
        <a
          href="#profile"
          className="text-lg no-underline text-grey-darkest"
        >
          Profile
        </a>
        <a
          href="#timeline"
          className="text-lg no-underline text-grey-darkest ml-5"
        >
          Timeline
        </a>
        <a
          href="#tools"
          className="text-lg no-underline text-grey-darkest ml-5"
        >
          Tools
        </a>
        <a
          href="#contacts"
          className="text-lg no-underline text-grey-darkest ml-5"
        >
          Contacts
        </a>
      </div>
      <div className="mb-2 sm:mb-0">
        <a
          href="/home"
          className="text-lg no-underline text-grey-darkest"
        >
          Dark/Light
        </a>
      </div>
    </nav>
  );
}

export default Nav;

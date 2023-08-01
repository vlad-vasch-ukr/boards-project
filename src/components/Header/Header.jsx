import {useState} from 'react';
import {Link} from "react-router-dom";
import {navLinks, profileLinks} from '../../constants/index.js';
import './Header.scss';

function Header() {
  const [isProfileOpen, setProfile] = useState(false);

  return (
    <header className="header">
      <nav>
        <div className="header__container">
          <div className="header__actions">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                     alt="Your Company"/>
              </div>
              <ul className="header__nav-list">
                {
                  Object.values(navLinks).map(function ({name, path}) {
                    return (
                      <li key={name}>
                        <Link to={path}>
                          {name}
                        </Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                     aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                </svg>
              </button>

              <div className="relative ml-3">
                <button type="button"
                        className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        onClick={() => setProfile(!isProfileOpen)}
                >
                  <img className="h-8 w-8 rounded-full"
                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt=""/>
                </button>

                {
                  isProfileOpen &&
                  <ul
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    {
                      Object.values(profileLinks).map(function ({name, path}) {
                        return (
                          <li key={name}>
                            <Link to={path} className="block px-4 py-2 text-sm text-gray-700">
                              {name}
                            </Link>
                          </li>
                        );
                      })
                    }
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
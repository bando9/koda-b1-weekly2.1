import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative py-3.5 px-6 max-w-full">
      <div className="flex justify-between items-center">
        <h2 className="fw-semibold  font-bold text-lg">Alex Carter</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer md:hidden"
        >
          {isOpen ? <IconX /> : <IconMenu2 />}
        </button>
        <nav className="md:flex items-center hidden">
          <ul className="flex space-x-4">
            <li>
              {/* <a
                href="/"
                className="py-2 px-4 bg-[#F3F4F6] text-[#111111] rounded-lg"
              >
                Home
              </a> */}
              <Link
                to="/"
                className="py-2 px-4 bg-[#F3F4F6] text-[#111111] rounded-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <button className="bg-black button-sm text-white px-5 py-2 rounded-lg ml-3.5 cursor-pointer">
            Hire Me
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-6 space-y-3">
          <ul className="space-y-1">
            <li>
              <a
                href="/"
                className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors `}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/project"
                className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors `}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/experience"
                className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors `}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors `}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="pt-2">
            <button className="w-full bg-[#111111] hover:bg-black text-white text-sm font-semibold py-3.5 rounded-2xl transition-colors cursor-pointer">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

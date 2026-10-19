import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative py-3.5 px-6 max-w-full lg:px-28">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Alex Carter</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer lg:hidden"
        >
          {isOpen ? <IconX /> : <IconMenu2 />}
        </button>
        <nav className="lg:flex items-center hidden">
          <ul className="flex lg:space-x-5">
            <li>
              <Link
                to="/"
                className="py-2 px-4 bg-[#F3F4F6] text-[#111111] rounded-lg font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium text-sm text-[#4A5565]">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="font-medium text-sm text-[#4A5565]"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="font-medium text-sm text-[#4A5565]"
              >
                Experience
              </Link>
            </li>
            <li>
              <a href="/contact" className="font-medium text-sm text-[#4A5565]">
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-black button-sm text-white px-5 py-2 rounded-lg ml-3.5 cursor-pointer">
            Hire Me
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white px-6 pt-2 pb-6 space-y-3">
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

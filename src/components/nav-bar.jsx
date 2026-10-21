import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { NavLink } from "react-router";
import { links } from "../data";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const getActiveLink = ({ isActive }) => {
    return `py-2 px-4 rounded-lg font-medium text-sm ${isActive ? "bg-[#F3F4F6] text-[#111111]" : "text-[#4A5565]"}`;
  };

  const getActiveLinkMobile = ({ isActive }) => {
    return `block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${isActive ? "bg-[#F3F4F6] text-[#111111]" : "text-[#4A5565]"}`;
  };

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
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={getActiveLink} end>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="bg-black button-sm text-white px-5 py-2 rounded-lg ml-3.5 cursor-pointer">
            Hire Me
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white px-6 pt-2 pb-6 space-y-3">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={getActiveLinkMobile} end>
                  {link.label}
                </NavLink>
              </li>
            ))}
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

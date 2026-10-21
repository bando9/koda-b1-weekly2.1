import BadgeFooter from "../features/home/components/badge-footer";

import { IconArrowUp } from "@tabler/icons-react";
import { Link } from "react-router";

/**
 * Komponen digunakan untuk menampilkan footer pada setiap halaman
 * menampilkan profil singkat, kumpulan link cepat, kontak pribadi, dan hak cipta.
 * @returns {JSX.Element} Elemen struktur footer halaman.
 */

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#101828]">
      <div className="px-6 flex flex-col lg:px-28">
        <div className="pt-14 pb-10 space-y-10 lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="left">
            <h2 className="text-white font-bold text-xl">Alex Carter</h2>
            <p className="mt-3 font-normal text-sm text-[#99A1AF]">
              Full-stack software developer based in San Francisco, CA. Building
              thoughtful web experiences one commit at a time.
            </p>
            <div className="mt-6 flex gap-3">
              <BadgeFooter tech="Github" />
              <BadgeFooter tech="Linkedin" />
              <BadgeFooter tech="Twitter" />
            </div>
          </div>
          <div className="mid">
            <h2 className="text-white font-semibold text-sm uppercase">
              Quick Links
            </h2>
            <ul className="mt-6 text-[#99A1AF] space-y-3.5 font-normal text-sm">
              <li>
                <Link to="/">Home</Link>
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
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="right">
            <h2 className="uppercase font-semibold text-sm text-white">
              Contact
            </h2>
            <ul className="mt-6 text-[#99A1AF] space-y-3.5 font-normal text-sm">
              <li>alex.carter@email.com</li>
              <li>+1 (415) 555-0192</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>

        <div className="pb-14 flex flex-col md:flex-row md:justify-between md:items-center justify-center items-center border-t border-[#1E2939]">
          <p className="text-[#6A7282] font-normal text-sm mt-6">
            @2026 Alex Carter. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            to="/"
            className="text-[#99A1AF] flex mt-3 gap-2 cursor-pointer"
          >
            Back to Top <IconArrowUp stroke={2} />
          </button>
        </div>
      </div>
    </footer>
  );
}

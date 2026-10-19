import BadgeFooter from "../features/home/components/badge-footer";

import { IconArrowUp } from "@tabler/icons-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#101828]">
      <div className="mx-6 flex flex-col items-center justify-center">
        <div className="pt-14 pb-10 space-y-10">
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

        <div className="mx-6 flex flex-col justify-center border-t border-[#1E2939]">
          <p className="text-[#6A7282] font-normal text-sm text-center mt-6">
            @2026 Alex Carter. All rights reserved.
          </p>
          <Link
            to="/"
            className="text-[#99A1AF] flex mt-3 justify-center gap-2 pb-14"
          >
            Back to Top <IconArrowUp stroke={2} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

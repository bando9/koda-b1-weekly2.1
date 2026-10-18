export default function NavBar() {
  return (
    <header className="flex justify-between items-center py-3.5 mx-6">
      <h2 className="fw-semibold  font-bold text-lg">Alex Carter</h2>
      <div>
        <div className="md:hidden space-y-1 ">
          <div className="h-0.5 w-5 bg-slate-800"></div>
          <div className="h-0.5 w-5 bg-slate-800"></div>
          <div className="h-0.5 w-5 bg-slate-800"></div>
        </div>
        <nav className="md:flex items-center hidden">
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="active-link py-2 px-4 bg-[#F3F4F6] text-[#111111] rounded-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="">
                About
              </a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/experience">Experience</a>
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
    </header>
  );
}

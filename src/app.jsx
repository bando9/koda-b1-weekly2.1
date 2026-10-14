import profile from "./assets/profile.png";

function App() {
  return (
    <div className="mx-30">
      <header className="flex justify-between py-3.5">
        <h2 class="fw-semibold  font-bold text-lg">Alex Carter</h2>
        <nav className="flex items-center">
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
          <button class="bg-black button-sm text-white px-5 py-2 rounded-lg ml-3.5 cursor-pointer">
            Hire Me
          </button>
        </nav>
      </header>

      <main>
        <section id="header" className="grid grid-cols-2 mt-28 gap-16 mb-20">
          <div className="header-content">
            <h2 className="text-[#FF5F22] uppercase font-semibold text-sm mb-5">
              available for hire
            </h2>
            <h1 className="text-title font-bold text-6xl mb-5 text-[#111111]">
              Hi, I'm <br />
              Alex Carter
            </h1>

            <h3 className="text-[#4A5565] text-xl font-medium">
              Full-Stack Software Developer
            </h3>

            <p className="pt-4 text-[#6A7282] mb-8">
              I build fast, accessible, and beautifully designed web
              applications. With 3+ years of experience across the full stack, I
              turn complex problems into elegant digital products.
            </p>

            <div className="flex space-x-4 mb-10">
              <button className="button bg-[#111111]  py-3.5 px-7 rounded-lg text-white">
                View My Work
              </button>
              <button className="button border-2 border-[#111111] py-3.5 px-7 rounded-lg ">
                Contact Me
              </button>
            </div>

            <div className="flex space-x-10">
              <div>
                <h3 className="font-bold text-2xl text-[#101828">20+</h3>
                <p className="font-normal text-sm text-[#6A7282] ">Projects</p>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#101828">3+</h3>
                <p className="font-normal text-sm text-[#6A7282] ">
                  Years Exp.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#101828">15+</h3>
                <p className="font-normal text-sm text-[#6A7282] ">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          <div class="header-image ml-auto ">
            <img src={profile} alt="profile image" />
          </div>
        </section>

        <section id="about" className="bg-[#F9FAFB]">
          <div>
            <h2>Who I am</h2>
            <h1>A Little About Me</h1>
            <p>
              I'm passionate about writing clean, maintainable code and crafting
              experiences that users genuinely enjoy.
            </p>
          </div>
          <br />

          <div>
            <div>
              <h2>Problem Solver</h2>
              <p>
                I enjoy breaking down complex challenges into simple, elegant
                solutions that scale well over time.
              </p>
            </div>

            <div>
              <h2>Team Player</h2>
              <p>
                Experienced collaborating with designers, product managers, and
                engineers in agile environments.
              </p>
            </div>

            <div>
              <h2>Lifelong Learner</h2>
              <p>
                Always exploring new tools and technologies. Currently deepening
                my cloud architecture and DevOps skills.
              </p>
            </div>
            <button>Learn more about me (icon: right arrow)</button>
          </div>
        </section>

        <section id="skills">
          <div>
            <h2>Technical Skills</h2>
            <h1>What I Work With</h1>
            <p>
              A snapshot of the tools and technologies I use to build modern web
              applications.
            </p>
          </div>

          <div>
            <div>
              <p>React</p>
            </div>
            <div>
              <p>TypeScript</p>
            </div>
            <div>
              <p>JavaScript</p>
            </div>
            <div>
              <p>Node.js</p>
            </div>
            <div>
              <p>Python</p>
            </div>
            <div>
              <p>PostgreSQL</p>
            </div>
            <div>
              <p>MongoDB</p>
            </div>
            <div>
              <p>Docker</p>
            </div>
            <div>
              <p>AWS</p>
            </div>
            <div>
              <p>Next.js</p>
            </div>
            <div>
              <p>REST APIs</p>
            </div>
            <div>
              <p>GraphQL</p>
            </div>
            <div>
              <p>Tailwind CSS</p>
            </div>
            <div>
              <p>Figma</p>
            </div>
            <div>
              <p>Git</p>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>My Work</h2>
          <h1>Featured Projects</h1>
          <p>
            A selection of projects that showcase my skills across the full
            development stack.
          </p>
          <div>
            <div>
              <img src="#" alt="gambar 1" />
              <div>
                <h2>ShopEase</h2>
                <p>
                  A full-featured e-commerce platform with product catalog, cart
                  management, and Stripe payment integration.
                </p>
                <div>
                  <div>
                    <p>React</p>
                  </div>
                  <div>
                    <p>Node.js</p>
                  </div>
                  <div>
                    <p>MongoDB</p>
                  </div>
                  <div>
                    <p>Stripe</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img src="#" alt="gambar 2" />
              <div>
                <h2>TaskFlow</h2>
                <p>
                  A drag-and-drop task manager with real-time collaboration,
                  team workspaces, and deadline tracking.
                </p>
                <div>
                  <div>
                    <p>React</p>
                  </div>
                  <div>
                    <p>TypeScript</p>
                  </div>
                  <div>
                    <p>Firebase</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img src="#" alt="gambar 1" />
              <div>
                <h2>ChatSpace</h2>
                <p>
                  Real-time messaging platform with channels, direct messages,
                  file sharing, and emoji reactions.
                </p>
                <div>
                  <div>
                    <p>React</p>
                  </div>
                  <div>
                    <p>Socket.io</p>
                  </div>
                  <div>
                    <p>Express</p>
                  </div>
                  <div>
                    <p>MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button>View ALl Projects</button>
        </section>

        <section>
          <div>
            <h2>testimonials</h2>
            <h1>What Clients Say</h1>
            <p>Feedback from people I've had the pleasure of working with.</p>
          </div>
          <div>
            <div class="card">
              <div>
                <p>
                  “Alex delivered our e-commerce platform ahead of schedule. The
                  code quality was outstanding and the UI exceeded our
                  expectations.”
                </p>
              </div>
              <div>
                <img src="#" alt="gb1" />
                <div>
                  <p>Sarah Johnson</p>
                  <p>CEO, BrightShop Inc.</p>
                </div>
              </div>
            </div>

            <div class="card">
              <div>
                <p>
                  “Working with Alex was a pleasure. They understood our
                  requirements immediately and brought creative solutions to
                  complex problems.”
                </p>
              </div>
              <div>
                <img src="#" alt="gb1" />
                <div>
                  <p>Michael Chen</p>
                  <p>CTO, Velocity Labs</p>
                </div>
              </div>
            </div>

            <div class="card">
              <div>
                <p>
                  “Alex transformed our outdated website into a modern,
                  responsive platform. Traffic increased 40% within the first
                  month of launch.”
                </p>
              </div>
              <div>
                <img src="#" alt="gb1" />
                <div>
                  <p>Emily Rodriguez</p>
                  <p>Marketing Director, Apex Digital</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <h2>Let's Work Together</h2>
          <p>
            I'm currently available for freelance projects and full-time
            opportunities. Let's build something great.
          </p>
          <button>Get In Touch</button>
        </div>

        <div>
          <div class="left">
            <h2>Alex Carter</h2>
            <p>
              Full-stack software developer based in San Francisco, CA. Building
              thoughtful web experiences one commit at a time.
            </p>
            <div>
              <div>
                <p>GitHub</p>
              </div>
              <div>
                <p>Linkedin</p>
              </div>
              <div>
                <p>Twitter</p>
              </div>
            </div>
          </div>
          <div class="mid">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Experience</li>
              <li>Contact</li>
            </ul>
          </div>

          <div class="right">
            <h2>Contact</h2>
            <ul>
              <li>alex.carter@email.com</li>
              <li>+1 (415) 555-0192</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>

        <div>
          <p>@2026 Alex Carter. All rights reserved.</p>
          <button>Back to Top</button>
        </div>
      </footer>
    </div>
  );
}

export default App;

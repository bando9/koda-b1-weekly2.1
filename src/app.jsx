import profile from "./assets/profile.png";
import Badge from "./features/home/components/badge";
import CardHome from "./features/home/components/card-home";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import CardHomeWork from "./features/home/components/card-home-work";
import SectionHeading from "./features/home/components/section-heading";

function App() {
  return (
    <div>
      <header className="flex justify-between items-center py-3.5 mx-6">
        <h2 class="fw-semibold  font-bold text-lg">Alex Carter</h2>
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
            <button class="bg-black button-sm text-white px-5 py-2 rounded-lg ml-3.5 cursor-pointer">
              Hire Me
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="header"
          className="md:grid md:grid-cols-2 mt-20 mx-3.5 gap-16 mb-20"
        >
          <div className="header-content mx-6">
            <div className="space-y-5">
              <h2 className="text-[#FF5F22] uppercase font-semibold text-sm">
                available for hire
              </h2>
              <h1 className="font-extrabold md:text-6xl text-5xl text-[#111111]">
                Hi, I'm <br />
                Alex Carter
              </h1>
              <h3 className="text-[#4A5565] text-xl font-medium">
                Full-Stack Software Developer
              </h3>
            </div>

            <p className="mt-4 text-[#6A7282]">
              I build fast, accessible, and beautifully designed web
              applications. With 3+ years of experience across the full stack, I
              turn complex problems into elegant digital products.
            </p>

            <div className="flex space-x-4 mt-8 justify-between">
              <button className="bg-[#111111]  py-3.5 px-7 rounded-lg text-white text-base font-semibold">
                View My Work
              </button>
              <button className="border-2 border-[#111111] py-3.5 px-7 rounded-lg font-semibold text-base">
                Contact Me
              </button>
            </div>

            <div className="flex space-x-10 mt-10">
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
          <div class="mt-15 md:ml-auto flex justify-center ">
            <img src={profile} alt="profile image" />
          </div>
        </section>

        <section id="about" className="bg-[#F9FAFB] py-20">
          <div className="mx-6 ">
            <SectionHeading
              label="Who I am"
              title="A Little About Me"
              description="I'm passionate about writing clean, maintainable code and crafting experiences that users genuinely enjoy."
            />

            <div className="mt-14 space-y-6">
              <CardHome
                description="I enjoy breaking down complex challenges into simple, elegant solutions
        that scale well over time."
                title="Problem Solver"
              />

              <CardHome
                title="Team Player"
                description="Experienced collaborating with designers, product managers,
                  and engineers in agile environments."
              />

              <CardHome
                title="Lifelong Learner"
                description="Always exploring new tools and technologies. Currently
                  deepening my cloud architecture and DevOps skills."
              />

              <button className="mt-10 flex items-center mx-auto text-sm font-semibold">
                Learn more about me
                <IconArrowNarrowRight stroke={2} />
              </button>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="px-6 ">
            <SectionHeading
              label="Technical Skills"
              title="What I Work With"
              description="A snapshot of the tools and technologies I use to build modern
                web applications."
            />

            <div className="space-y-3 mt-17">
              <div className="flex gap-3 items-center justify-center">
                <Badge name="React" />
                <Badge name="TypeScript" />
                <Badge name="JavaScript" />
              </div>
              <div className="flex gap-3 items-center justify-center">
                <Badge name="Node.js" />
                <Badge name="Python" />
                <Badge name="PostgreSQL" />
              </div>
              <div className="flex gap-3 items-center justify-center">
                <Badge name="MongoDB" />
                <Badge name="Docker" />
                <Badge name="AWS" />
              </div>
              <div className="flex gap-3 items-center justify-center">
                <Badge name="Next.js" />
                <Badge name="REST APIs" />
                <Badge name="GraphQL" />
              </div>
              <div className="flex gap-3 items-center justify-center">
                <Badge name="Tailwind CSS" />
                <Badge name="Figma" />
                <Badge name="Git" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-[#F9FAFB]">
          <div className="mx-6">
            <SectionHeading
              label="My Work"
              title="Featured Projects"
              description="A selection of projects that showcase my skills across the full
                development stack."
            />

            <div className="mt-15 mx-6 space-y-8">
              <CardHomeWork
                src="work1"
                title="ShopEase"
                description=" A full-featured e-commerce platform with product catalog, cart management, and Stripe payment integration."
                technologies={["React", "Node.js", "MongoDB", "Stripe"]}
              />
              <CardHomeWork
                src="work2"
                title="TaskFlow"
                description="A drag-and-drop task manager with real-time collaboration, team workspaces, and deadline tracking."
                technologies={["React", "TypeScript", "Firebase"]}
              />
              <CardHomeWork
                src="work3"
                title="ChatSpace"
                description="Real-time messaging platform with channels, direct messages, file sharing, and emoji reactions."
                technologies={["React", "Socket.io", "Express", "MongoDB"]}
              />
            </div>
            <div className="mt-10 justify-center flex">
              <button className="px-6 py-3 bg-[#111111] text-white rounded-xl ">
                View All Projects
              </button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="mx-6">
            <SectionHeading
              label="testimonials"
              title="What Clients Say"
              description="Feedback from people I've had the pleasure of working with."
            />

            <div className="mt-15">
              <div className="bg-[#F9FAFB] p-7 rounded-xl">
                <div>
                  <p className="text-[#4A5565] font-normal text-sm">
                    “Alex delivered our e-commerce platform ahead of schedule.
                    The code quality was outstanding and the UI exceeded our
                    expectations.”
                  </p>
                </div>
                <div className="flex justify-start items-center pt-6 gap-4">
                  <img
                    src="/images/testimonial1.png"
                    alt="Sarah profile"
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="font-semibold text-sm">Sarah Johnson</p>
                    <p className="font-normal text-xs">CEO, BrightShop Inc.</p>
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

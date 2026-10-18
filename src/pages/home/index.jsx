import Badge from "../../features/home/components/badge";
import CardHome from "../../features/home/components/card-home";
import CardHomeWork from "../../features/home/components/card-home-work";
import SectionHeading from "../../features/home/components/section-heading";
import CardHomeTestimonial from "../../features/home/components/card-home-testimonial";
import Footer from "../../components/footer";
import NavBar from "../../components/nav-bar";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <NavBar />

      <main>
        <section
          id="header"
          className="md:grid md:grid-cols-2 mt-20 gap-16 mb-20"
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

            <div className="space-x-4 mt-8 flex">
              <Link to="/work">
                <button className="bg-[#111111] py-3.5 px-7 rounded-lg text-center text-white text-base font-semibold">
                  View My Work
                </button>
              </Link>
              <button className="border-2 border-[#111111] py-3.5 px-7 rounded-lg font-semibold text-base">
                <Link to="/contact">Contact Me</Link>
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
          <div className="mt-15 md:ml-auto flex justify-center ">
            <img src="/images/profile.png" alt="profile image" />
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

            <div className="mt-15 space-y-7">
              <CardHomeTestimonial
                name="Sarah Johnson"
                background="CEO, BrightShop Inc."
                src="testimonial1"
                description="“Alex delivered our e-commerce platform ahead of schedule. The code quality was outstanding and the UI exceeded our expectations.”"
              />

              <CardHomeTestimonial
                name="Michael Chen"
                description="“Working with Alex was a pleasure. They understood our
                    requirements immediately and brought creative solutions to
                    complex problems.”"
                src="testimonial2"
                background="CTO, Velocity Labs"
              />

              <CardHomeTestimonial
                name="Emily Rodriguez"
                background="Marketing Director, Apex Digital"
                src="testimonial3"
                description="“Alex transformed our outdated website into a modern, responsive platform. Traffic increased 40% within the first month of launch.”"
              />
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-[#111111]">
          <div className="mx-6">
            <h2 className="font-bold text-3xl text-white">
              Let's Work Together
            </h2>
            <p className="mt-4 text-[#FFD6A8]">
              I'm currently available for freelance projects and full-time
              opportunities. Let's build something great.
            </p>
            <button
              href="/contact"
              className="bg-[#FF5F22] rounded-lg py-4 px-8 mt-8 font-bold text-lg"
            >
              Get In Touch
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

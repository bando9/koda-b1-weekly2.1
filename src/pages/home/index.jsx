import Badge from "../../features/home/components/badge";
import CardHome from "../../features/home/components/card-home";
import CardHomeWork from "../../features/home/components/card-home-work";
import SectionHeading from "../../features/home/components/section-heading";
import CardHomeTestimonial from "../../features/home/components/card-home-testimonial";
import Footer from "../../components/footer";
import NavBar from "../../components/nav-bar";

import { Link } from "react-router";
import {
  abouts,
  projects,
  skills,
  testimonials,
} from "../../features/home/data";

export default function Home() {
  return (
    <div>
      <NavBar />

      <main>
        <section
          id="header"
          className="md:grid md:grid-cols-2 mt-20 gap-16 mb-20 lg:px-28"
        >
          <div className="header-content px-6">
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
              <Link
                to="/project"
                className="bg-[#111111] py-3.5 px-7 rounded-lg text-center text-white text-base font-semibold cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#111111] py-3.5 px-7 rounded-lg font-semibold text-base"
              >
                Contact Me
              </Link>
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
          <div className="mt-15 flex justify-center ">
            <img
              src="/images/profile.png"
              alt="profile image"
              className="object-contain"
            />
          </div>
        </section>

        <section id="about" className="bg-[#F9FAFB] py-20">
          <div className="mx-6 lg:px-28">
            <SectionHeading
              label="Who I am"
              title="A Little About Me"
              description="I'm passionate about writing clean, maintainable code and crafting experiences that users genuinely enjoy."
            />

            <div className="mt-14 space-y-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {abouts.map((about) => (
                  <CardHome
                    key={about.id}
                    title={about.title}
                    description={about.description}
                  />
                ))}
              </div>

              <div className="flex justify-center items-center">
                <Link to="/about" className="mt-10 text-sm font-semibold">
                  Learn more about me ➜
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="px-6 lg:px-28">
            <SectionHeading
              label="Technical Skills"
              title="What I Work With"
              description="A snapshot of the tools and technologies I use to build modern
                web applications."
            />

            <div className="space-y-3 space-x-4 mt-17 flex flex-wrap items-center justify-center">
              {skills.map((skill, i) => (
                <Badge name={skill} key={i} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-[#F9FAFB]">
          <div className="mx-6 lg:px-28">
            <SectionHeading
              label="My Work"
              title="Featured Projects"
              description="A selection of projects that showcase my skills across the full
                development stack."
            />

            <div className="mt-15 px-6 space-y-8 lg:space-y-0 lg:flex lg:space-x-7">
              {projects.map((project) => (
                <CardHomeWork
                  key={project.id}
                  src={project.src}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              ))}
            </div>
            <div className="mt-10 justify-center flex">
              <Link
                to="/project"
                className="px-6 py-3 bg-[#111111] text-white rounded-xl "
              >
                View All Projects
              </Link>
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

            <div className="mt-15 space-y-7 lg:space-y-0 lg:flex lg:px-28 lg:gap-7">
              {testimonials.map((testimonial) => (
                <CardHomeTestimonial
                  key={testimonial.id}
                  name={testimonial.name}
                  background={testimonial.background}
                  src={testimonial.src}
                  description={testimonial.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-[#111111]">
          <div className="mx-6">
            <div className="px-6">
              <div>
                <h2 className="font-bold text-3xl text-white">
                  Let's Work Together
                </h2>
                <p className="mt-4 text-[#FFD6A8]">
                  I'm currently available for freelance projects and full-time
                  opportunities. Let's build something great.
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-[#FF5F22] rounded-lg py-4 px-8 mt-8 inline-block font-bold text-lg"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

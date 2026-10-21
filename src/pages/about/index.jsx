import Footer from "../../components/footer";
import Header from "../../components/header";
import NavBar from "../../components/nav-bar";
import CardAbout from "../../features/about/card-about";
import { experiences } from "../../features/about/data";
import { InterestTags } from "../../features/about/interest-tag";
import SectionHeading from "../../features/about/section-heading";
import { SkillsProgress } from "../../features/about/skills-progress";
import Timeline from "../../features/about/timeline";

export default function About() {
  return (
    <div>
      <NavBar />

      <main>
        <Header
          label="Get to know me"
          title="About Alex"
          description="A passionate developer who loves building things that make a real difference."
        />

        <section className="py-20 lg:grid lg:grid-cols-2 lg:px-28 lg:justify-center lg:items-center lg:gap-8">
          <div className="flex justify-center items-center ">
            <img
              src="/images/profile1.png"
              alt="Alex profile"
              className="rounded-xl w-72 h-72 object-contain"
            />
          </div>

          <div className="mt-15 mx-6 lg:mt-0 lg:mx-0">
            <h2 className="text-2xl font-bold">
              Building the web, one line at a time.
            </h2>
            <div className="text-[#6A7282] font-normal text-base space-y-4 mt-5">
              <p>
                I'm Alex Carter, a full-stack software developer based in San
                Francisco, CA. I graduated from UC Berkeley with a B.S. in
                Computer Science in 2023 and have been building web products
                professionally ever since.
              </p>
              <p>
                My stack spans React and TypeScript on the frontend, Node.js and
                Python on the backend, and PostgreSQL and MongoDB for data. I
                care deeply about performance, accessibility, and writing code
                that my future self won't hate.
              </p>
              <p>
                When I'm not coding, you'll find me rock climbing at the local
                gym, experimenting with pour-over coffee, or reading science
                fiction. I'm actively looking for my next challenge.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <div className="py-2 px-4 bg-[#F9FAFB] rounded-full text-sm font-normal">
                <p>San Francisco, CA</p>
              </div>

              <div className="py-2 px-4 bg-[#F9FAFB] rounded-xl text-sm font-normal">
                Open to Roles
              </div>

              <div className="py-2 px-4 bg-[#F9FAFB] rounded-xl text-sm font-normal">
                CS, UC Berkeley
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#F9FAFB]">
          <SectionHeading title="Academic Background" label="education" />
          <Timeline />
        </section>

        <section className="py-20 px-6 lg:px-70">
          <SectionHeading label="career" title="work experience" />

          <div className="space-y-6 mt-14">
            {experiences.map((experience) => (
              <CardAbout
                key={experience.id}
                listItems={experience.listItems}
                title={experience.title}
                label={experience.label}
                date={experience.date}
              />
            ))}
          </div>
        </section>

        <section className="py-20 px-6 lg:px-70 bg-[#F9FAFB]">
          <SectionHeading label="skills" title="technical proficiency" />
          <div className="mt-14">
            <SkillsProgress />
          </div>
        </section>

        <section className="py-20 px-6 lg:px-70">
          <SectionHeading
            label="personal"
            title="interests & hobbies"
            description="A few things I'm passionate about beyond the keyboard."
          />

          <div className="mt-14">
            <InterestTags />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

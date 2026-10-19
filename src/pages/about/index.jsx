import Footer from "../../components/footer";
import Header from "../../components/header";
import NavBar from "../../components/nav-bar";
import CardAbout from "../../features/about/card-about";
import SectionHeading from "../../features/about/section-heading";
import Timeline from "../../features/about/timeline";

const jsdItems = [
  "Build and maintain full-stack features for a B2B SaaS platform serving 10,000+ users.",
  "Collaborate with designers and senior engineers in 2-week agile sprints.",
  "Reduced API response times by 35% through query optimization and Redis caching.",
];

const seItems = [
  "Developed React components for the company's customer-facing dashboard.",
  "Wrote unit and integration tests, achieving 85% code coverage across new modules.",
];

const wdItems = [
  "Built responsive websites and web apps for 8 small business clients.",
  "Managed client communication, requirements gathering, scoping, and delivery.",
];

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

        <section className="py-20">
          <img
            src="/images/profile1.png"
            alt="Alex profile"
            className="rounded-xl mx-auto"
          />

          <div className="mt-15 mx-6">
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
            <div className="mt-7 grid grid-cols-2 gap-3">
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

        <section className="py-20 px-6">
          <SectionHeading label="career" title="work experience" />

          <div className="space-y-6 mt-14">
            <CardAbout
              listItems={jsdItems}
              title="Junior Software Developer"
              label="TechCorp Inc. · San Francisco, CA"
              date="Jan 2023 – Present"
            />
            <CardAbout
              listItems={seItems}
              title="Software Engineering Intern"
              label="StartupXYZ · San Jose, CA"
              date="May 2022 – Aug 2022"
            />
            <CardAbout
              listItems={wdItems}
              title="Web Developer"
              label="Freelance · Remote"
              date="Jun 2022 – Dec 2022"
            />
          </div>
        </section>

        <section className="py-20 px-6 bg-[#F9FAFB]">
          <SectionHeading label="skills" title="technical proficiency" />
          <div className="mt-14">
            <SkillsProgress />
          </div>
        </section>

        <section className="py-20 px-6">
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

export function SkillsProgress() {
  const skills = [
    { name: "React / Next.js", percentage: 90 },
    { name: "TypeScript / JavaScript", percentage: 88 },
    { name: "Node.js / Express", percentage: 82 },
    { name: "Python / Django", percentage: 74 },
    { name: "PostgreSQL / MongoDB", percentage: 80 },
    { name: "Docker / AWS", percentage: 65 },
  ];

  return (
    <div className="w-full max-w-xl mx-auto space-y-6 font-sans p-4">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center text-sm font-semibold text-[#364153]">
            <span>{skill.name}</span>
            <span className="text-[#FF5F22] font-semibold">
              {skill.percentage}%
            </span>
          </div>

          <div className="w-full bg-[#E5E7EB] h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-black h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function InterestTags() {
  const interests = [
    "Open Source",
    "UI/UX Design",
    "Machine Learning",
    "System Design",
    "Rock Climbing",
    "Photography",
    "Coffee Brewing",
    "Reading Sci-Fi",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-md ">
      {interests.map((interest, index) => (
        <div key={index} className="pill bg-[#F9FAFB] text-[#364153]">
          {interest}
        </div>
      ))}
    </div>
  );
}

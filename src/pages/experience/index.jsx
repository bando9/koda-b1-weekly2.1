import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SectionHeading from "../../features/about/section-heading";
import CardCertificate from "../../features/experience/card-certificate";
import CardAward from "../../features/experience/card-award";

export default function Experience() {
  return (
    <div>
      <NavBar />

      <main>
        <Header
          align="left"
          label="career history"
          title="experience"
          description="My professional journey, credentials, and recognition."
          button={true}
        />

        <section className="px-6 py-16">
          <SectionHeading
            align="start"
            label="work history"
            title="Professional Experience"
          />

          <div className="mt-10">
            <ExperienceTable />
          </div>
        </section>

        <section className="px-6 py-16">
          <SectionHeading
            label="credentials"
            title="certifications"
            align="start"
          />
          <div className="mt-10 space-y-6">
            <CardCertificate
              initial="aws"
              title="AWS Certified Developer – Associate"
              label="Amazon Web Services"
              date="Dec 2023 · Valid until Dec 2026"
            />

            <CardCertificate
              initial="gcp"
              title="Google Professional Cloud Developer"
              label="Google Cloud"
              date="Oct 2023 · Valid until Oct 2025"
            />

            <CardCertificate
              initial="mdb"
              title="MongoDB Certified Developer Associate"
              label="MongoDB Inc."
              date="Mar 2022 · Valid until Mar 2024"
            />
          </div>
        </section>

        <section className="px-6 py-12">
          <SectionHeading
            align="start"
            label="recognition"
            title="awards & honors"
          />
          <div className="mt-10 space-y-6">
            {awards.map((award) => (
              <CardAward
                title={award.title}
                date={award.date}
                corp={award.corp}
                description={award.description}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const awards = [
  {
    id: 1,
    title: "Employee of the Month",
    date: "March 2024",
    corp: "TechCorp Inc.",
    description:
      "Recognized for delivering the customer portal redesign ahead of schedule with zero post-launch bugs.",
  },
  {
    id: 2,
    title: "Best Overall Project",
    date: "November 2022",
    corp: "Bay Area CodeFest Hackathon",
    description:
      "First place out of 48 teams for building a real-time food rescue coordination app in 24 hours.",
  },
  {
    id: 3,
    title: "Dean's List",
    date: "2021 & 2022",
    corp: "UC Berkeley",
    description:
      "Achieved top academic standing in the College of Engineering for two consecutive academic years.",
  },
  {
    id: 4,
    title: "Outstanding Senior Project",
    date: "May 2023",
    corp: "CS Department, UC Berkeley",
    description:
      "Capstone project — an AI-assisted code review tool — recognized as the top project in the graduating class.",
  },
];

const defaultExperiences = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Junior Software Developer",
    duration: "Jan 2023 – Present",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: 2,
    company: "Freelance",
    position: "Web Developer",
    duration: "Jun 2022 – Dec 2022",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 3,
    company: "StartupXYZ",
    position: "Software Engineering Intern",
    duration: "May 2022 – Aug 2022",
    location: "San Jose, CA",
    type: "Internship",
  },
  {
    id: 4,
    company: "UC Berkeley Tech Club",
    position: "President & Lead Developer",
    duration: "Sep 2021 – May 2023",
    location: "Berkeley, CA",
    type: "Volunteer",
  },
];

export function ExperienceTable({ experiences = defaultExperiences }) {
  return (
    <div className="w-full font-sans bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider">
              <th className="py-4 px-6 rounded-tl-xl">Company</th>
              <th className="py-4 px-6">Position</th>
              <th className="py-4 px-6">Duration</th>
              <th className="py-4 px-6">Location</th>
              <th className="py-4 px-6 text-right rounded-tr-xl">Type</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-sm">
            {experiences.map((exp) => (
              <tr
                key={exp.id}
                className="hover:bg-slate-50/60 transition-colors"
              >
                <td className="py-4 px-6 font-bold text-slate-900">
                  {exp.company}
                </td>
                <td className="py-4 px-6 text-slate-500 font-medium">
                  {exp.position}
                </td>
                <td className="py-4 px-6 text-slate-500">{exp.duration}</td>
                <td className="py-4 px-6 text-slate-500">{exp.location}</td>
                <td className="py-4 px-6 text-right">
                  <span className="inline-block px-3 py-1 bg-[#FFF2ED] text-[#FF6B35] font-semibold text-xs rounded-full">
                    {exp.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="block md:hidden divide-y divide-slate-100 p-2">
        {experiences.map((exp) => (
          <div key={exp.id} className="p-4 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-bold text-slate-900 text-base">
                {exp.company}
              </h4>
              <span className="inline-block px-2.5 py-0.5 bg-[#FFF2ED] text-[#FF6B35] font-semibold text-xs rounded-full shrink-0">
                {exp.type}
              </span>
            </div>

            <p className="text-sm font-medium text-slate-700">{exp.position}</p>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 gap-1">
              <span>{exp.duration}</span>
              <span>{exp.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

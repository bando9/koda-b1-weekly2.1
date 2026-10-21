import Header from "../../components/header";
import SectionHeading from "../../features/about/section-heading";
import CardCertificate from "../../features/experience/card-certificate";
import CardAward from "../../features/experience/card-award";
import { awards, certificates } from "../../features/experience/data";
import { ExperienceTable } from "../../features/experience/experience-table";

export default function Experience() {
  return (
    <main>
      <Header
        align="left"
        label="career history"
        title="experience"
        description="My professional journey, credentials, and recognition."
        button={true}
      />

      <section className="px-6 py-16 lg:px-28">
        <SectionHeading
          align="start"
          label="work history"
          title="Professional Experience"
        />

        <div className="mt-10">
          <ExperienceTable />
        </div>
      </section>

      <section className="px-6 py-16 lg:px-28">
        <SectionHeading
          label="credentials"
          title="certifications"
          align="start"
        />
        <div className="mt-10 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:space-x-6">
          {certificates.map((certificate) => (
            <CardCertificate
              key={certificate.id}
              initial={certificate.initial}
              title={certificate.title}
              label={certificate.label}
              date={certificate.date}
            />
          ))}
        </div>
      </section>

      <section className="px-6 py-12 lg:px-28">
        <SectionHeading
          align="start"
          label="recognition"
          title="awards & honors"
        />
        <div className="mt-10 space-y-6 lg:space-x-6 lg:grid-cols-2 lg:grid">
          {awards.map((award) => (
            <CardAward
              key={award.id}
              title={award.title}
              date={award.date}
              corp={award.corp}
              description={award.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

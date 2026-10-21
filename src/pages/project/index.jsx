import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Card from "../../features/project/card";
import { projects } from "../../features/project/data";

export default function Project() {
  return (
    <div>
      <NavBar />
      <main>
        <Header
          label="portfolio"
          title="my projects"
          description="A collection of work that demonstrates my skills across the full development stack."
        />

        <section className="py-16 px-6">
          <div className="flex justify-center items-center gap-3">
            <p className="rounded-full bg-[#111111] py-2.5 px-5 font-medium  text-white text-sm">
              All
            </p>
            <p className="pill">Frontend</p>
            <p className="pill">Backend</p>
            <p className="pill">Full Stack</p>
          </div>

          <div className="mt-12 space-y-7 lg:grid lg:grid-cols-3 lg:gap-7 lg:px-28">
            {projects.map((project) => (
              <Card
                key={project.id}
                techs={project.techs}
                title={project.title}
                src={project.src}
                description={project.description}
                label={project.label}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from "react";
import Header from "../../components/header";
import Card from "../../features/project/card";
import { projects } from "../../features/project/data";

export default function Project() {
  const [filter, setFilter] = useState("all");

  const activeFilter = "bg-[#111111] text-white";

  const filteredProjects = projects.filter((project) => {
    return project.label.toLocaleLowerCase() == filter.toLowerCase();
  });

  console.log(filteredProjects);

  return (
    <>
      <Header
        label="portfolio"
        title="my projects"
        description="A collection of work that demonstrates my skills across the full development stack."
      />

      <section className="py-16 px-6">
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full py-2.5 px-5 font-medium text-sm ${activeFilter}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className="rounded-full bg-[#111111] py-2.5 px-5 font-medium  text-white text-sm"
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("backend")}
            className="rounded-full bg-[#111111] py-2.5 px-5 font-medium  text-white text-sm"
          >
            Backend
          </button>

          <button
            onClick={() => setFilter("full stack")}
            className="rounded-full bg-[#111111] py-2.5 px-5 font-medium  text-white text-sm"
          >
            Full Stack
          </button>
        </div>

        <div className="mt-12 space-y-7 lg:grid lg:grid-cols-3 lg:gap-7 lg:px-28">
          {filter !== "all"
            ? filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  techs={project.techs}
                  title={project.title}
                  src={project.src}
                  description={project.description}
                  label={project.label}
                />
              ))
            : projects.map((project) => (
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
        {/* <div className="mt-12 space-y-7 lg:grid lg:grid-cols-3 lg:gap-7 lg:px-28">
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
        </div> */}
      </section>
    </>
  );
}

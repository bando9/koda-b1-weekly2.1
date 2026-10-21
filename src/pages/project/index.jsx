import { useState } from "react";
import Header from "../../components/header";
import Card from "../../features/project/card";
import { categories, projects } from "../../features/project/data";

export default function Project() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => {
          return project.label.toLocaleLowerCase() == filter.toLowerCase();
        });

  return (
    <>
      <Header
        label="portfolio"
        title="my projects"
        description="A collection of work that demonstrates my skills across the full development stack."
      />

      <section className="py-16 px-6">
        <div className="flex justify-center items-center gap-3">
          {categories.map((category) => {
            const isActive = filter === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`rounded-full py-2.5 px-5 font-medium text-sm cursor-pointer ${isActive ? "bg-[#111111] text-white" : "border border-[#E5E7EB]"}`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 space-y-7 lg:grid lg:grid-cols-3 lg:gap-7 lg:px-28">
          {filteredProjects.map((project) => (
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
    </>
  );
}

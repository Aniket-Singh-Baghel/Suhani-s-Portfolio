import { featuredProjects } from "./portfolioData"; ;
import ProjectCard from "./ProjectCard";

const FeaturedEditorials = () => {
  return (
    <section className="py-32 px-6 lg:px-16 bg-[#f5e5d4]">

      <div className="mb-20">
        <p className="uppercase tracking-[0.25em] text-[#5A5A5A] text-sm">
          Selected Works
        </p>

        <h2 className="font-serif text-5xl lg:text-7xl mt-4 max-w-4xl">
          Featured Editorials
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-8">

        <div className="col-span-12 lg:col-span-5">
          <ProjectCard project={featuredProjects[0]} />
        </div>

        <div className="col-span-12 lg:col-span-3">
          <ProjectCard project={featuredProjects[1]} />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <ProjectCard project={featuredProjects[2]} />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <ProjectCard project={featuredProjects[3]} />
        </div>

      </div>
    </section>
  );
};

export default FeaturedEditorials;
import {featuredProjects} from "./PortfolioData";
import ProjectCard from "./ProjectCard";

const FeaturedEditorials = () => {
  return (
    <section className="py-2 md:py-10 px-2 lg:px-4 bg-[#f5e5d4] -mt-12 md:-mt-10">

      <div className="mb-8 md:mb-20">
        <h2 className="font-serif text-2xl md:text-5xl lg:text-7xl mt-4 max-w-4xl">
          Featured Editorials
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        <div className="col-span-1 md:col-span-6 lg:col-span-5">
          <ProjectCard project={featuredProjects[0]} />
        </div>

        <div className="col-span-1 md:col-span-6 lg:col-span-3">
          <ProjectCard project={featuredProjects[1]} />
        </div>

        <div className="col-span-1 md:col-span-6 lg:col-span-4">
          <ProjectCard project={featuredProjects[2]} />
        </div>

        <div className="col-span-1 md:col-span-6 lg:col-span-6">
          <ProjectCard project={featuredProjects[3]} />
        </div>

      </div>
    </section>
  );
};

export default FeaturedEditorials;
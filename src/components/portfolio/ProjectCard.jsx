import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
    console.log(project);
    console.log(project.image);
  return (
    <>
    <h1>TEST CARD</h1>
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">
          {project.category}
        </p>

        <h3 className="font-serif text-2xl text-[#2B2B2B]">
          {project.title}
        </h3>

        <p className="text-sm text-[#5A5A5A]">
          {project.year}
        </p>
      </div>
    </motion.article>
    </>
  );
};

export default ProjectCard;
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Wafeeq Alishah, an Angular developer passionate about crafting dynamic, 
        user-friendly web applications. With expertise in Angular, TypeScript, and 
        modern front-end technologies, I specialize in building responsive, high-performance
         solutions that bring ideas to life. I enjoy working on real-world projects that 
         solve complex problems and deliver seamless user experiences. Outside of coding,
          I’m driven by continuous learning, exploring the latest tech trends, and sharing
           knowledge to help others grow in their development journey.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

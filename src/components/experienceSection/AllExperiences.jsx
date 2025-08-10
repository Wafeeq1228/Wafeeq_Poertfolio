import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Maverick",
    company: "Hexaware",
    date: "JUL 2022 - DEC 2022",
    responsibilities: [
      "Trained in various front-end technologies.",
      "Completed major case study projects.",
      "Managed a team of five people.",
      "Created end-to-end applications.",
    ],
  },
  {
    job: "Software Engineer",
    company: "Hexaware",
    date: "JAN 2023 - FEB 2025",
    responsibilities: [
      "Developed and maintained scalable web applications with Angular.",
      "Built dynamic interfaces with Reactive Forms and validations.",
      "Implemented dependency injection for efficient component management.",
    ],
  },
  {
    job: "Product Engineer",
    company: "Tata Consultancy Services",
    date: "MAR 205 - Present",
    responsibilities: [
      "Consumed and integrated RESTful APIs for backend communication.",
      "Optimized performance with best practices and debugging tools",  
      "Delivered features in agile sprints under tight deadlines.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

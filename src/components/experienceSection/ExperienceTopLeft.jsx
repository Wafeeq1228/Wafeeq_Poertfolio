import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="3" text="Websites" />
      </div>
      <p className="text-center">
        Bringing 3 years of experience in delivering enterprise-grade, dynamic, and user-focused web 
        applications.
      </p>
      <ExperienceInfo number="13 LPA" text="Expected CTC" />
    </div>
  );
};

export default ExperienceTopLeft;

import Image from "next/image";
import RootLayout from "./layout";
import ProjectCard from "@/components/ProjectCard";

const projectImages = [
  ["Portfolio (This website!)", "../assets/images/portfolio.png", "#f0f0f5"],
  ["Bzzaart", "../assets/images/bzzaart.png", "#ff91af"],
  ["Hang or Sustain", "../assets/images/HangOrSustain.png", "#77987d"],
];

const Projects = () => {
  return (
    <RootLayout showFooter={true} showHeader={true}>
      <section className="flex flex-col pt-[14%] pb-[5%] items-center ">
        <div
          style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh",
            overflow: "scroll",
            top: "0px",
          }}
        >
          <Image
            src="/assets/images/boston.svg"
            alt="basketball court"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div className="w-3/4 pl-[7%]">
            <h1 className="text-5xl leading-tight">
              Hey, I'm Ethan Yu, an aspiring software engineer based in
              Austin/San Antonio. I enjoy working on{" "}
              <span className="italic">human-centric</span> projects with{" "}
              <span className="italic">new technology</span>.
            </h1>
          </div>
        </div>
        <div>
          {projectImages.map((project) => (
            <ProjectCard
              title={project[0]}
              image={project[1]}
              themeColor={project[2]}
            />
          ))}
        </div>
      </section>
    </RootLayout>
  );
};

export default Projects;

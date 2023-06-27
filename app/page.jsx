import Image from "next/image";
import RootLayout from "./layout";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projectImages = [
  [
    "Portfolio (This website!)",
    "../assets/images/portfolio.png",
    "#f0f0f5",
    "portfolio",
  ],
  ["Bzzaart", "../assets/images/bzzaart.png", "#ff91af", "bzzaart"],
  [
    "Hang or Sustain",
    "../assets/images/HangOrSustain.png",
    "#77987d",
    "hangorsustain",
  ],
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
            alt="Boston city grid"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div className="w-3/4 pl-[7%]">
            <h1
              className="text-5xl leading-tight"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                opacity: 1,
                transformStyle: "preserve-3d",
              }}
            >
              Hey, I'm Ethan Yu, an aspiring software engineer based in
              Austin/San Antonio. I enjoy working on{" "}
              <span className="italic">human-centric</span> projects with{" "}
              <span className="italic">new technology</span>.
            </h1>
          </div>
        </div>
        <div>
          {projectImages.map((project) => (
            <Link href={`/${project[3]}`}>
              <ProjectCard
                title={project[0]}
                image={project[1]}
                themeColor={project[2]}
              />
            </Link>
          ))}
        </div>
      </section>
    </RootLayout>
  );
};

export default Projects;

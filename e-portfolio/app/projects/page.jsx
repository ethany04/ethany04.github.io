import RootLayout from "../layout";

const Projects = () => {
  return (
    <RootLayout showFooter={true} showHeader={true}>
      <section className="flex flex-col pt-[12%] pb-[5%] items-center">
        <div>
          <div className="w-3/4 pl-[7%]">
            <h1 className="text-5xl leading-tight">
              Ethan Yu is a software engineer based out of Austin and San
              Antonio. He enjoys working on human-centric projects with new
              technology.
            </h1>
          </div>
        </div>
        <div>
          <h1>HELLO WORLD</h1>
        </div>
      </section>
    </RootLayout>
  );
};

export default Projects;

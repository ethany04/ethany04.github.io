const ProjectCard = ({ image, title, themeColor }) => {
  return (
    <section>
      <div className="w-full flex justify-center items-center pt-[14%] pb-[7%]">
        <div className="content__shows">
          <div style={{ borderWidth: "7px", borderColor: themeColor }}>
            <img src={image} />
            <div className="name">
              <h1 className="text-7xl" style={{ color: themeColor }}>
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;

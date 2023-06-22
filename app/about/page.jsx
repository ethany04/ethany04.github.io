import RootLayout from "../layout.jsx";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <RootLayout showFooter={true} showHeader={true}>
      <section className="w-full flex-center flex-col pt-[12%] pb-[5%]">
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
            src="/assets/images/court.svg"
            alt="basketball court"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <h1 className="head_text text-center" style={{ color: "#f0f0f5" }}>
            Welcome to my home court!
          </h1>
        </div>
        <div className="flex flex-row pt-[5%] justify-between w-3/4">
          <Image
            src="/assets/images/selfie.png"
            alt="selfie"
            height={1}
            width={400}
          />
          <span className="w-[50%]">
            <div className="flex flex-wrap">
              <h1 className="text-3xl pb-[4%]">
                Howdy! I'm Ethan, a current student and aspiring software
                engineer!
              </h1>
              <p className="font-light pb-[2%]">
                I am currently an undergraduate student at The University of
                Texas at Austin. I am pursuing a B.S. in Computer Science, as
                well as a minor in Kinesiology, and potentially
                Entrepreneurship. I will be graduating in May 2026.
              </p>
              <p className="font-light pb-[2%]">
                From a young age, I always had a fascination with the
                technological world because of its potential to completely
                reshape our lives. As I grew older, I realized my interest for
                computer science extended far beyond just my love for
                technology. What truly inspires me is the overwhelming impact
                that it can have on others. Regardless of the area that I'm
                working in, be it developing software or designing experiences,
                I find uncomparable joy when working on projects that allow
                others to lead their lives easier and better.
              </p>
              <p className="font-light">
                Want to know more? Check out some of the things that make me
                unique! ⬇️
              </p>
            </div>
          </span>
        </div>
        <div className="w-full pt-[10%]" />
        <div className="w-3/4 pt-[3%]">
          <h1 className="pb-[2%]">
            🏀 I absolutely love basketball (HUGE Celtics fan) and play every
            day if I can
          </h1>
          <h1 className="pb-[2%]">
            🎥 I occasionally{" "}
            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UCE7uljU2rAtpuCYuFfdOulA"
              style={{ textDecoration: "underline" }}
            >
              vlog and make videos
            </Link>{" "}
            for fun
          </h1>
          <h1 className="pb-[2%]">
            🎼 I've played the piano, guitar, and saxophone, and still mess
            around with them every once in a while
          </h1>
          <h1 className="pb-[2%]">
            👐🏼 I enjoy doing things with my hands (love origami and recently
            made matching anklets for me and my girlfriend)
          </h1>
          <h1 className="pb-[2%]">🎮 I dabble in video games (who doesnt?)</h1>
          <h1 className="pb-[2%]">
            📸 I enjoy{" "}
            <Link
              target="_blank"
              href="https://unsplash.com/@eethann"
              style={{ textDecoration: "underline" }}
            >
              taking photos
            </Link>
            , espcially when traveling.
          </h1>
          <h1 className="pb-[1%]">
            🎶 Here are (in my opinion) the best songs ever written
          </h1>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/41QC5nBswBVcYqJ103PqI1?utm_source=generator&theme=0"
            width="70%"
            height="352"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </RootLayout>
  );
};

export default About;

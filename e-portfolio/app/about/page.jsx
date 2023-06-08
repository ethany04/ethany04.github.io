import RootLayout from "../layout.jsx";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <RootLayout showFooter={true} showHeader={true}>
      <section className="w-full flex-center flex-col pt-[4%]">
        <div>
          <h1 className="head_text text-center" style={{ color: "#f0f0f5" }}>
            Welcome to my home court!
          </h1>
        </div>
        <div className="flex flex-row pt-[2%] justify-between w-3/4">
          <Image
            src="/assets/images/selfie.png"
            alt="selfie"
            height={1}
            width={300}
          />
          <span className="w-[50%]">
            <div className="flex flex-wrap">
              <p>
                asdasdsjakdaslcjldsajvlsdjlasasdasdsdadsasdjaslkdjalcjlasjdlasjdlascjlkajslcajlkasncxzlkncalcknjlacnxzknalscnlaskcjnalcjaslkcjsalcajclkajnlascacln
              </p>
              <p>this will be the description of myself</p>
              <p>this is the second line of the description</p>
            </div>
          </span>
        </div>
      </section>
    </RootLayout>
  );
};

export default About;

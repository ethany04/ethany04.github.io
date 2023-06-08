import RootLayout from "../layout";
import Link from "next/link";

const About = () => {
  return (
    <RootLayout showFooter={true} showHeader={true}>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center" style={{ color: "#f0f0f5" }}>
          Welcome to my home court!
        </h1>
        <p>
          extelkfjsdlkcdscnacasldsaldakjcals sdvckanskasnlkc jslcjascljc
          adcakdjbnakjdaldjaelkfjeljvclsdkcj adklasjhdladjasldjalkj
        </p>
      </section>
    </RootLayout>
  );
};

export default About;

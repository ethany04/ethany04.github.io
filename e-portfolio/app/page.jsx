import Link from "next/link";
import RootLayout from "./layout.jsx";
import Image from "next/image";

const Home = () => {
  return (
    <RootLayout showFooter={false} showHeader={false}>
      <section className="main_screen w-full h-screen flex-center flex-col">
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
            src="/assets/images/home.svg"
            alt="basketball court"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <h1 className="text-2xl">hello hello</h1>
        </div>
        <div>
          <h2 className="text-8xl">
            <Link href="/about">Ethan Yu</Link>
          </h2>
        </div>
      </section>
    </RootLayout>
  );
};

export default Home;

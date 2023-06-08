import Link from "next/link";
import RootLayout from "./layout";

const Home = () => {
  return (
    <RootLayout showFooter={false} showHeader={false}>
      <section className="main_screen w-full h-screen flex-center flex-col">
        <div>
          <h1 className="text-2xl">hello hello</h1>
        </div>
        <div>
          <h1 className="text-8xl">
            <Link href="/about">Ethan Yu</Link>
          </h1>
        </div>
      </section>
    </RootLayout>
  );
};

export default Home;

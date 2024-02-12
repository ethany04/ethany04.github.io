import RootLayout from "../layout";
import EmblaCarousel from "@components/EmblaCarousel";
import "../../styles/embla.css";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const bzzaart = () => {
  return (
    <RootLayout showHeader={true} showFooter={true}>
      <section className="flex flex-col pt-[14%] pb-[5%] items-center">
        <h1>HELLO WORLD</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </RootLayout>
  );
};

export default bzzaart;

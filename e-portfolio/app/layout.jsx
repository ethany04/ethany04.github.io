import "@styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "👋🏼 Ethan Yu",
  description: "Howdy y'all!",
};

const RootLayout = ({ children, showFooter, showHeader }) => {
  return (
    <html lang="en">
      <body>
        {showHeader && <Header />}
        <main>{children}</main>
        {showFooter && <Footer />}
      </body>
    </html>
  );
};

export default RootLayout;

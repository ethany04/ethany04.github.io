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
      <head>
        <link rel="icon" href="/assets/icons/yu.svg" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="/assets/icons/yu.svg"
          type="image/x-icon"
        />
      </head>
      <body>
        {showHeader && <Header />}
        <main>{children}</main>
        {showFooter && <Footer />}
      </body>
    </html>
  );
};

export default RootLayout;


// this is a test again

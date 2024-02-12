import "@styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
        <title>👋🏼 Ethan Yu</title>
      </head>
      <body>
        {showHeader && <Header />}
        <main className="w-full">{children}</main>
        {showFooter && <Footer />}
      </body>
    </html>
  );
};

export default RootLayout;

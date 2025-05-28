import Header from "@/components/Header/header";
import "./globals.css";
import Footer from "@/components/Footer/footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;

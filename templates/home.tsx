import React, { ReactNode } from "react";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
type Props = {
  children?: ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;

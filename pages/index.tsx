import "@tntran496/ts-ant-demo/libs/index.css";

import React from "react";
import Demo from "../components/demo";
import HomeLayout from "../templates/home";

const HomePage = () => {
  return (
    <>
      <Demo />
    </>
  );
};

HomePage.Layout = HomeLayout;
export default HomePage;

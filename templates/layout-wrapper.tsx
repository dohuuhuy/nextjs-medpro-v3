import DefaultLayout from "./default";
import HomeLayout from "./home";

import React from "react";
const layouts: any = {
  default: DefaultLayout,
  home: HomeLayout,
};

const LayoutWrapper = (props: any) => {
  const Layout: any = layouts[props.children.type.layout];

  if (Layout !== null) {
    return <Layout {...props}>{props.children}</Layout>;
  }

  return (
    <>
      <DefaultLayout {...props}>{props.children}</DefaultLayout>
    </>
  );
};

export default LayoutWrapper;

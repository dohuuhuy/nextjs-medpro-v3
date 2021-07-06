import React from "react";
import "/public/assets/styles/app.less";

const MyApp = ({ Component, pageProps }: any) => {
  const LayoutWrapper = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
};
export default MyApp;

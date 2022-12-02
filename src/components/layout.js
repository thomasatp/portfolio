import * as React from "react";
import Nav from "./nav";
import "../style/styles.scss";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="container">{children}</main>
    </>
  );
}

export default Layout;

import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import main from "../images/main.jpg";

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Clifford" src="../images/main.jpg" />
    </Layout>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;

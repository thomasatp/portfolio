import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

function IndexPage() {
  return (
    <Layout pageTitle="Homepage">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Clifford" src="../images/main.jpg" />
    </Layout>
  );
}

export default IndexPage;

export const Head = () => <Seo title="Homepage" />;

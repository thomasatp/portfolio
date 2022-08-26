import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

function AboutPage() {
  return (
    <Layout pageTitle="About me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
}

export default AboutPage;

export function Head() {
  return <Seo title="About Me" />;
}

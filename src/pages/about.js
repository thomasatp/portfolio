import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <h1 className="title">About me</h1>
      <p className="body">
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
}

export default AboutPage;

export const Head = () => <Seo title="About Me" />;

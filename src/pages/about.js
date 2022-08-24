import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

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
  return <title>About Me</title>;
}

import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

function WorkPage() {
  return (
    <Layout pageTitle="Work">
      <p>Find my work here.</p>
    </Layout>
  );
}

export default WorkPage;

export function Head() {
  return <Seo title="Work" />;
}

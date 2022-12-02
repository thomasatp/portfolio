import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

function WorkPage() {
  return (
    <Layout>
      <h1 className="title">Work</h1>
      <p className="body">Find my work here.</p>
    </Layout>
  );
}

export default WorkPage;

export const Head = () => <Seo title="Work" />;

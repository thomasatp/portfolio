import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

function WorkPage() {
  return (
    <Layout pageTitle="Work">
      <p>Find my work here.</p>
    </Layout>
  );
}

export default WorkPage;

export function Head() {
  return <title>Work</title>;
}

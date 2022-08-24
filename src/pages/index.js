import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;

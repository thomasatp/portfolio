import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Path from "../components/path";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className="title">Oooops</h1>
      <p className="body">
        Sorry 😔, we couldn’t find what you were looking for.
      </p>
      <Path to="/">Go Back</Path>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Not found" />;

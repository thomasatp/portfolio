import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Seo from "../components/seo";

const Text = styled.p`
  font-size: 1.8rem;
  flex: 1;
`;

function IndexPage() {
  return (
    <Layout pageTitle="Thomas Drapeau">
      <Text>
        Hello, I'm Thomas Drapeau, UI designer and hobbyist developer.
      </Text>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => <Seo title="Homepage" />;

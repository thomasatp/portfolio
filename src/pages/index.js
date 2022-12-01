import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Seo from "../components/seo";
import Path from "../components/path";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #f4f4f4;
  padding: 4vw;
  border-radius: 0.8rem;
  overflow: hidden;
`;

function IndexPage() {
  return (
    <Layout>
      <p className="title">
        Hello, I'm Thomas Drapeau, UI designer / Junior front End developer.
      </p>
      <Container>
        <Tile to="/kanji" title="Agence Kanji">
          <StaticImage src="../images/kanji.jpg" alt="Agence Kanji" />
        </Tile>
        <Tile to="/kanji" title="Checkout refit">
          <StaticImage src="../images/checkout.jpg" alt="Checkout refit" />
        </Tile>
      </Container>
    </Layout>
  );
}

export default IndexPage;

export const Head = () => (
  <Seo
    title="Homepage"
    description="Hello, I'm Thomas Drapeau, UI designer and hobbyist developer."
  />
);

function Tile({ to, title, children }) {
  return (
    <Path to={to}>
      <ImageContainer>{children}</ImageContainer>
      <p>{title}</p>
    </Path>
  );
}

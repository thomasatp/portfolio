import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const ImageContainer = styled.div`
  display: flex;
  background: #f4f4f4;
  border-radius: 0.8rem;
  overflow: hidden;
  padding: 8vw;
`;

function KanjiPage() {
  return (
    <Layout>
      <h1 className="title">Agence Kanji</h1>
      <p className="body">Role: UI Design / development</p>
      <ImageContainer>
        <StaticImage
          src="../images/kanji.jpg"
          alt="Agence Kanji"
          placeholder="dominantColor"
          quality="100"
        />
      </ImageContainer>
    </Layout>
  );
}

export default KanjiPage;

export const Head = () => <Seo title="Agence Kanji" />;

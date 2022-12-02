import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

function KanjiPage() {
  const tags = ["Figma", "React", "Next Js", "Sass"];

  return (
    <Layout>
      <div className="row mv-xxl pt-xxl align-baseline">
        <div className="cell-6 cell-mt-12">
          <div className="row">
            <h1 className="cell-12 subheadline mb-l">Agence Kanji</h1>
            <h2 className="cell-12 body mb-l">UI Design / development</h2>
            <div className="cell-12">
              {tags.sort().map((tag, index) => (
                <p key={index} className="caption border br-l ph-s mr-xs">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <p className="cell-6 cell-mt-12 subtitle mt-l">
          Conception UI et développement du site web de l'agence Kanji
        </p>
        <div className="cell-12 mv-xl">
          <div className="pv-xxl ph-xxl mt-pv-l mt-ph-l b-medium-light br-sm overflow-hidden">
            <StaticImage
              src="../images/kanji.jpg"
              alt="Agence Kanji"
              placeholder="dominantColor"
              quality="100"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default KanjiPage;

export const Head = () => <Seo title="Agence Kanji" />;

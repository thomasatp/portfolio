import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Path from "../components/path";

function IndexPage() {
  return (
    <Layout>
      <div className="row">
        <h1 className="cell-7 cell-mt-12 subheadline mv-xxl pt-xxl">
          Hello 👋, UI designer depuis 6 ans et front end developer en devenir,
          je vous accompagne dans tous vos projets.
        </h1>
        <Tile to="/kanji" title="Agence Kanji" subtitle="Création de site">
          <StaticImage src="../images/kanji.jpg" alt="Agence Kanji" />
        </Tile>
        <Tile to="/kanji" title="Lacoste" subtitle="Checkout refit">
          <StaticImage src="../images/checkout.jpg" alt="Checkout refit" />
        </Tile>
        <Tile to="/kanji" title="Agence Kanji" subtitle="Création de site">
          <StaticImage src="../images/kanji.jpg" alt="Agence Kanji" />
        </Tile>
        <Tile to="/kanji" title="Lacoste" subtitle="Checkout refit">
          <StaticImage src="../images/checkout.jpg" alt="Checkout refit" />
        </Tile>
        <Tile to="/kanji" title="Agence Kanji" subtitle="Création de site">
          <StaticImage src="../images/kanji.jpg" alt="Agence Kanji" />
        </Tile>
        <Tile to="/kanji" title="Lacoste" subtitle="Checkout refit">
          <StaticImage src="../images/checkout.jpg" alt="Checkout refit" />
        </Tile>
      </div>
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

function Tile({ to, title, subtitle, children }) {
  return (
    <Path className="cell-6 cell-mt-12 mb-s" to={to}>
      <div className="row">
        <div className="cell-12">
          <div className="pt-xxl ph-xl b-medium-light br-sm overflow-hidden">
            {children}
            <div className="row">
              <p className="cell-12 pt-l pb-xl body2 mt-s font-bold align-baseline">
                {title}
                <span className="body c-medium-dark font-regular ml-s">–</span>
                <span className="body c-medium-dark font-regular ml-s">
                  {subtitle}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Path>
  );
}

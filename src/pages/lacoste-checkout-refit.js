import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { LinkNext } from "grommet-icons";
import colors from "../utils/colors";

function Page() {
  const title = "Lacoste Checkout refit";
  const role = "UI Design";
  const tags = ["Figma"];
  const link = "https://www.lacoste.com/fr/";
  const image = "../images/checkout.jpg";
  const description = "Refonte du tunnel de commande de Lacoste";

  return (
    <Layout>
      <div className="row mv-xxl pt-xxl align-baseline">
        <div className="cell-6 cell-mt-12">
          <div className="row">
            <h1 className="cell-12 subheadline mb-ml">{title}</h1>
            <h2 className="cell-12 body mb-ml">{role}</h2>
            <div className="cell-12 mb-l">
              {tags.sort().map((tag, index) => (
                <p key={index} className="caption border br-l ph-s mr-xs">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="cell-6 cell-mt-12 subtitle mt-l">
          <div className="row">
            <p className="cell-12 mb-sm">{description}</p>
            <a
              className="cell-12 c-dark body font-bold align-center"
              href={link}
              target="_blank"
            >
              Voir le site
              <LinkNext className="ml-s" size="small" color={colors.dark} />
            </a>
          </div>
        </div>
        <div className="cell-12 mv-xl">
          <div className="pv-xxl ph-xxl mt-pv-l mt-ph-l b-medium-light br-sm overflow-hidden">
            <StaticImage
              src={image}
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

export default Page;

export const Head = () => (
  <Seo
    title="Agence Kanji"
    description="Conception UI et développement du site web de l'agence Kanji"
  />
);

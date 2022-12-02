import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { LinkNext } from "grommet-icons";
import colors from "../utils/colors";

function Page() {
  const title = "Agence Kanji";
  const role = "UI Design / development";
  const tags = ["Figma", "React", "Next Js", "Sass"];
  const link = "https://www.agencekanji.com/";
  const image = "../images/kanji.jpg";
  const description =
    "Création de site web pour l'agence Kanji, spécialisée dans le conseil en Marketplaces. Conception UI sur Figma puis développement sur Next JS. Utilisation de Sass pour les styles, création du formulaire de contact avec nodemailer.";

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

export default Page;

export const Head = () => (
  <Seo
    title="Agence Kanji"
    description="Création de site web pour l'agence Kanji, spécialisée dans le conseil en Marketplaces. Conception UI sur Figma puis développement sur Next JS. Utilisation de Sass pour les styles, création du formulaire de contact avec nodemailer."
  />
);

import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

export const data = graphql`
  query {
    allFile {
      nodes {
        name
        id
      }
    }
  }
`;

export default function BlogPage({ data }) {
  return (
    <Layout pageTitle="Blog">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allFile.nodes.map(({ name, id }) => (
          <li key={id} id={id}>
            {name}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Blog" />;
}

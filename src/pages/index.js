import * as React from "react";
import styled from "styled-components";

function IndexPage() {
  return (
    <main>
      <h1>Welcome to my Gastby site</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;

import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { GlobalStyle } from "../style/globalStyle";
import Nav from "./nav";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: 8vw 4vw;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

function Layout({ children }) {
  const { title } = useSiteMetadata();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav />
        <Main>{children}</Main>
      </Container>
    </>
  );
}

export default Layout;

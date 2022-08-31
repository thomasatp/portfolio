import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { GlobalStyle } from "../style/globalStyle";
import Path from "./path";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 0.8;
  text-transform: uppercase;
  transform-origin: center center;

  text-align: end;
`;

const Title = styled.h1`
  font-size: 7.81vw;
  font-weight: 500;
  line-height: 0.8;
  text-transform: uppercase;
  transform-origin: center center;
  margin-right: 3.2rem;
  width: 50%;
  text-align: end;
`;

const Nav = styled.nav`
  display: flex;
  padding: 3.2rem;

  ul {
    list-style: none;
    padding: 0 0;
    display: flex;
    align-items: center;
    flex: 1;

    li {
      padding: 0 3.2rem;
      &:first-of-type {
        flex: 1;
        &:first-child {
          display: flex;
        }
      }
    }
  }
`;

const Main = styled.main`
  display: flex;
  padding: 16rem;
  justify-content: flex-start;
  align-items: flex-end;
  justify-content: center;
`;

function Layout({ pageTitle, children }) {
  const { title } = useSiteMetadata();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav>
          <ul>
            <li>
              <Path to="/">
                <Header>
                  Thomas
                  <br />
                  Drapeau
                </Header>
              </Path>
            </li>
            <li>
              <Path to="/work">Work</Path>
            </li>
            <li>
              <Path to="/about">About</Path>
            </li>
          </ul>
        </Nav>
        <Main>
          <Title>{pageTitle}</Title>
          {children}
        </Main>
      </Container>
    </>
  );
}

export default Layout;

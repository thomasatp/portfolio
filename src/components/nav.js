import * as React from "react";
import styled from "styled-components";
import Path from "./path";

const NavContainer = styled.nav`
  display: flex;
  padding: 3.2rem 4vw;
  position: sticky;
  top: 0;

  ul {
    list-style: none;
    padding: 0 0;
    display: flex;
    align-items: center;
    flex: 1;

    li {
      margin-left: 3.2rem;
      &:first-of-type {
        flex: 1;
        margin-left: 0;
        &:first-child {
          display: flex;
        }
      }
    }
  }
`;

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 0.8;
  text-transform: uppercase;
  text-align: end;
`;

export default function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Path to="/">
            <Header>Thomas Drapeau</Header>
          </Path>
        </li>
        <li>
          <Path to="/work">Work</Path>
        </li>
        <li>
          <Path to="/about">About</Path>
        </li>
      </ul>
    </NavContainer>
  );
}

import * as React from "react";
import Path from "./path";

export default function Nav() {
  return (
    <header className="container pv-sm fixed top-0 body z-1000">
      <nav className="row">
        <div className="cell-12 justify-between">
          <div className="uppercase font-bold">
            <Path to="/">Thomas Drapeau</Path>
          </div>
          <menu>
            <li>
              <Path to="/work">Work</Path>
            </li>
            <li className="ml-m">
              <Path to="/about">About</Path>
            </li>
          </menu>
        </div>
      </nav>
    </header>
  );
}

import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function Path({ to, children }) {
  return (
    <Link
      style={{ fontSize: "1.5rem", color: "#191919", textDecoration: "none" }}
      to={to}
    >
      {children}
    </Link>
  );
}

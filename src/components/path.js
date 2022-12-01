import React from "react";

import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Path({ to, children }) {
  return (
    <AniLink cover direction="right" bg="#f4f4f4" className="link" to={to}>
      {children}
    </AniLink>
  );
}

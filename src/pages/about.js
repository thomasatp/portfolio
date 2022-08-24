import React from "react";

function AboutPage() {
  return (
    <main>
      <h1>About me</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
}

export default AboutPage;

export function Head() {
  return <title>About Me</title>;
}

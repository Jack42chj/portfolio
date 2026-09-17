import React from "react";

import About from "./containers/section/about/About";
import Article from "./containers/section/article/Article";
import Experience from "./containers/section/experience/Experience";
import Overview from "./containers/section/overview/Overview";
import Project from "./containers/section/project/Project";
import Skills from "./containers/section/skills/Skills";

const Main = () => {
  return (
    <main>
      <Overview />
      <Skills />
      <Project />
      <Experience />
      <Article />
      <About />
    </main>
  );
};

export default Main;

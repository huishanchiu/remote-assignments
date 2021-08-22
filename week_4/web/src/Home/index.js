import { useState } from "react";

import Nav from "./Components/Nav";
import Content from "./Components/Content";
import SideMenu from "./Components/SideMenu";
import "./index.css";
import "./indexFlex.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <Content />
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "./Navbar";
import Section from "../section/Section";
import NavMenu from "./NavMenu";

export default function Layout() {
  return (
    
    <div>
      <NavMenu />
      <Navbar ></Navbar>
      <Section></Section>
    </div>
  );
}

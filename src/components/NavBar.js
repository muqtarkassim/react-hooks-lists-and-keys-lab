import React from "react";

function NavBar(key) {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((link)=> <a key={link} href={`#${link}`}>{ link}</a> )/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;

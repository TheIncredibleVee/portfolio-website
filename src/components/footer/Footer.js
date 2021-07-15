import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made by Vinay Sahcdeva(a.k.a TheIncredibleVee)")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          
          <a href="https://github.com/saadpasta/developerFolio">
            
          </a>
        </p>
      </div>
    </Fade>
  );
}

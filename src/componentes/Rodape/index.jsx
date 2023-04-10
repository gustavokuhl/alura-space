import styles from "./Rodape.module.scss";
import React from "react";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Instagram } from "./instagram.svg";
import { ReactComponent as Twitter } from "./twitter.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__lista}>
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
      <p>Desenvolvido por R4to</p>
    </footer>
  );
}

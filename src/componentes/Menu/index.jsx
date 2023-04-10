import React from "react";
import home from "../../assets/icones/home-ativo.png";
import maisCurtidas from "../../assets/icones/mais-curtidas-inativo.png";
import maisVistas from "../../assets/icones/mais-vistas-inativo.png";
import novas from "../../assets/icones/novas-inativo.png";
import supreendaMe from "../../assets/icones/surpreenda-me-inativo.png";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="" />
          <a href="/">Inicio</a>
        </li>
        <li>
          <img src={maisCurtidas} alt="" />
          <a href="/">Mais curtidas</a>
        </li>
        <li>
          <img src={maisVistas} alt="" />
          <a href="/">Mais vistas</a>
        </li>
        <li>
          <img src={novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li>
          <img src={supreendaMe} alt="" />
          <a href="/">Supreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}

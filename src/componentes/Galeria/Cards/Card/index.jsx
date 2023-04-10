import React from "react";
import favorito from "./favorito.png";
import open from "./open.png";

export default function Card({ item, styles }) {
  return (
    <li key={item.id} className={styles.galeria__card}>
      <img
        src={item.imagem}
        alt={item.titulo}
        className={styles.galeria__imagem}
      />
      <p className={styles.galeria__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={favorito} alt="Ícone de coração de curtir" />
          <img src={open} alt="Ícone de abrir modal" />
        </span>
      </div>
    </li>
  );
}

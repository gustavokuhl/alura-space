import styles from "./Tags.module.scss";
import React from "react";

export default function Tags({ items, tags, aoFiltrarFotos, setItems }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => (
          <li key={tag} onClick={() => aoFiltrarFotos(tag)}>
            {tag}
          </li>
        ))}
        <li key="todas" onClick={() => setItems(items)}>
          Todas
        </li>
      </ul>
    </div>
  );
}

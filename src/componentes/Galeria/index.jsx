import styles from "./Galeria.module.scss";
import React, { useState } from "react";
import Tags from "../Tags";
import fotos from "./fotos.json";
import Cards from "./Cards";

export default function Galeria() {
  const [items, setItems] = useState(fotos);
  const tags = [...new Set(fotos.map((foto) => foto.tag))];

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => foto.tag === tag);
    setItems(novasFotos);
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags
        items={fotos}
        tags={tags}
        aoFiltrarFotos={filtraFotos}
        setItems={setItems}
      />
      <Cards items={items} styles={styles} />
    </section>
  );
}

import React from "react";
import Card from "./Card";

export default function Cards({ items, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {items.map((item) => (
        <Card key={item.id} item={item} styles={styles} />
      ))}
    </ul>
  );
}

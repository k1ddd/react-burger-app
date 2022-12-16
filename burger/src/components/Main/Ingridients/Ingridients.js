import React from "react";

export default function Ingridients({ ingidients }) {
  return (
    <div>
      {ingidients.arrayIngr.map((e, i) => (
        <div key={i} className={e}></div>
      ))}
    </div>
  );
}

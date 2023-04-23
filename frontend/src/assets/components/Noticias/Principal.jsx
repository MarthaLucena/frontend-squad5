import React from "react";
import CardMaior from "./CardsPrincipal/CardMaior";
import CardMenores from "./CardsPrincipal/CardMenores";
import "./Principal.css";

export default function Principal() {
  return (
    <section className="container__principal">
      <CardMaior />
      <div className="box_2">
        <CardMenores />
        <CardMenores />
      </div>
    </section>
  );
}

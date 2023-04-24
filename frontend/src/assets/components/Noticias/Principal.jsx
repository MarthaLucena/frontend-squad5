import React from "react";
import CardMaior from "./CardsPrincipal/Card_01";
import CardMenores from "./CardsPrincipal/Card_02";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Principal.css";

export default function Principal() {
  return (
    <section className="container d-flex">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <CardMaior />
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <CardMenores />
          <CardMenores />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Card_01 from "./CardsPrincipal/Card_01";
import Card_02 from "./CardsPrincipal/Card_02";
import Card_03 from "./CardsPrincipal/Card_03";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Principal.css";

export default function Principal() {
  return (
    <section className="container d-flex">
      <div className="row">
        <Card_01 />
        <div className="collumn">
          <Card_02 />
          <Card_03 />
        </div>
      </div>
    </section>
  );
}

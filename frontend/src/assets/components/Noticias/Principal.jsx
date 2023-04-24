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
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <Card_01 />
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <Card_02 />
          <Card_03 />
        </div>
      </div>
    </section>
  );
}

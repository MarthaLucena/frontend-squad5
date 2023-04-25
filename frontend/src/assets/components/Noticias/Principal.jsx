import React,  { Suspense, lazy } from "react";
const Card_01 = lazy(() => import ("./CardsPrincipal/Card_01"));
const Card_02 = lazy(() => import ("./CardsPrincipal/Card_02"));
const Card_03 = lazy(() => import ("./CardsPrincipal/Card_03"));
import "bootstrap/dist/css/bootstrap.min.css";
import "./Principal.css";

export default function Principal() {
  return (
    <section className="container contente">
      <div className="row d-flex justify-content-center">
        <Suspense fallback={<div></div>}>
          <Card_01 />
        </Suspense>
        <div className="row d-flex justify-content-center">
          <Suspense fallback={<div></div>}>
            <Card_02 />
            <Card_03 />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

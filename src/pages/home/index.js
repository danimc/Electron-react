import React from "react";
import Header from "../../components/header";
import PanelControl from "../../components/panelControl";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container">
        <h2> Bienvenido al panel de control</h2>
        
        <hr/>
        <PanelControl />


      </div>
    </>
  );
}

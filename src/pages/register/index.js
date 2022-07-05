import React from "react";
import { Link } from "wouter";
import Register from "../../components/register";

export default function RegisterPage() {
  return (
    <>
      <div className="container">
        <div className="wrapper fadeInDown">
          <h2>Registrar nuevo Usuario</h2>
          <div id="formContent">
            <Register />
            <div id="formFooter">
              <Link to="/">Regresar</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

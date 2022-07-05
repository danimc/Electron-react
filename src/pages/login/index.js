import React, { useState, useEffect } from "react";
import {Link, useLocation } from "wouter";
import useUser from "../../hooks/useUser";

export default function LoginPage() {
  const {login, isLogged} = useUser()
  const [, navigate] = useLocation()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  useEffect(() => {
    if(isLogged) navigate("/home")
    },[isLogged, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  

  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="">
            <h2>Inicio de sesion</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              className="form-control form-control-lg formInput"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="form-control form-control-lg formInput"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              className="btn btn-info btn-lg mt-3 mb-3"
              value="Log In"
            />
          </form>

          <div id="formFooter">
            <Link to="/register">Registrarse </Link>
          </div>
        </div>
      </div>
    </>
  );
}

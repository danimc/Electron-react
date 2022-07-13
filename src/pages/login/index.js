import React, { useState, useEffect } from "react";
import LoginForm from "../../components/loginForm";
import { Link, useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import { Container, Col, Row, Image } from "react-bootstrap";

import "./login.css";

export default function LoginPage() {
  const { login, isLogged, changeLoginWindow } = useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isLogged) navigate("/");
    else changeLoginWindow();
  }, [changeLoginWindow, isLogged, navigate]);

  return (
    <>
      <Row className="login-container">
        <Col sm={5} className="login-page">
          <Image src="./img/logos/vDRX.png" className="vrdx-logo"></Image>
         <div className="login-form">
          <LoginForm  />
         </div>

        </Col>
        <Col sm={7} className="login-page-right">
          <Image src="./img/login.png" rounded={true} className="img-login" />
          <Image src="./img/logos/algotive.png" className="algotive-logo" />
        </Col>
      </Row>

      <small className="label-version">Version 1.7.0</small>

    </>
  );
}

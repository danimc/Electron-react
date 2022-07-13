import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useUser from "../../hooks/useUser";
import "./loginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Button, Form, Row } from "react-bootstrap";
import { Link, useLocation } from "wouter";

export default function LoginForm() {
  const { login, isLogged, changeLoginWindow } = useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isLogged) navigate("/");
    else changeLoginWindow();
  }, [changeLoginWindow, isLogged, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    registerService(data).then((e) => console.log(e));
  };

  return (
    <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input">
        <input
          className="form-control"
          placeholder="Correo Electronico"
          type="email"
          {...register("email", { required: "Ingrese un Correo Valido" })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <small>{message}</small>}
        />
      </div>

      <div class="input-password">
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          placeholder="Contraseña"
          {...register("password", { required: true, minLength: 3 })}
        />
        <span>
          <FontAwesomeIcon icon={faEye} />
        </span>
      </div>
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <small>{message}</small>}
      />

      <Form.Check
        inline
        type="checkbox"
        id="keepSession"
        label="Permanecer conectado"
      />

      <Row className="justify-content-sm-center">
        <Button
          className="center col-sm-5 mt-5 mb-4"
          type="submit"
          variant="secondary"
        >
          Iniciar sesion
        </Button>

        <small className="text-center text-secondary">
          ¿No puedes iniciar sesion?
        </small>
      </Row>
    </form>
  );
}

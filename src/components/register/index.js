import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import registerService from "../../services/register";
export default function Register() {
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
      <input
        className="form-control formInput"
        placeholder="Nombre del Usuario"
        {...register("name", {
          required: "ingrese un nombre valido",
          minLength: 3,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <small>{message}</small>}
      />

      <input
        className="form-control formInput"
        placeholder="Correo Electronico"
        type="email"
        {...register("email", { required: "Ingrese un Correo Valido" })}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <small>{message}</small>}
      />

      <input
        className="form-control formInput"
        placeholder="Contraseña"
        type="password"
        {...register("password", { required: true, minLength: 3 })}
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <small>{message}</small>}
      />

      {/* <select
        {...register("role", { required: true })}
        className="form-control formInput"
      >
        <option value="1">Admin</option>
        <option value="2" selected={true}>
          Usuario
        </option>
      </select>
  */}
      <input className="btn btn-info mb-3" type="submit" value="Registrar" />
    </form>
  );
}

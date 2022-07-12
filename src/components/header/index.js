import React, { useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";

export default function Header() {
  const { isLogged,changeSystemWindow } = useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!isLogged) navigate("/login")
    else changeSystemWindow()

   console.log(isLogged);

  }, [changeSystemWindow, isLogged, navigate]);

  return <>
  <h2>HEADER</h2>


  <h2>Token = {isLogged}</h2>
  </>;
}

import React, {useState} from "react";
import Header from "../../components/header";
import PanelControl from "../../components/panelControl";

export default function HomePage() {

  const [profileInfo, setProfileInfo] = useState(null)

  const formHandler = async(e) => {
    e.preventDefault()

    const username = "danimc"
    const pass    = "123"

    const profileInfo  = await window.api.getProfileInfo({username,pass})
    //profileInfo !== null ? setProfileInfo(profileInfo) : null

    console.log(profileInfo);
  }
  const quitBtnHandler = () => {
    window.api.quitApp()
  }

  return (

    <>
     <h2>
      Hola

      <form onSubmit={formHandler}>
      <input type="text" name="username"></input>
      <button type="submit">Enviar</button>
      </form>
     </h2>
    </>
    /*
    <>
      <Header />
      <div className="container">
        <h2> Bienvenido al panel de control</h2>
        
        <hr/>
        <PanelControl />


      </div>
    </>
    */
  );
}

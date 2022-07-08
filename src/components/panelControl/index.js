import React from "react";
import Video from "../video";
import "./style.css"

const SECURITY = [
  //'rtmp://192.168.0.30/live/stream',
  //'http://192.168.0.30:8000/live/stream.flv',
  'http://192.168.0.30:8000/rog/chedraui.flv',
  'http://192.168.0.30:8000/rog/coral.flv',




 
]


export default function PanelControl() {
  
  return (
    <>
      <h4>videos de seguridad:</h4>
      <button className="btn btn-outline-primary" type="button">Pausa</button>
      <div className="player-wrapper">
      {SECURITY.map(vid => <Video key={vid} url={vid} />)}
      </div>


    </>
  );
}

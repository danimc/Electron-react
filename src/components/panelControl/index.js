import React from "react";
import Video from "../video";
import "./style.css"

const SECURITY = [
  //'rtmp://192.168.0.30/live/stream',
  //'ws://192.168.0.30:8000/live/stream.flv',
  'ws://192.168.0.30:8000/showsession9/stream8.flv',
  'http://192.168.0.30:8000/showsession9/stream9.flv',
  'ws://192.168.0.30:8000/showsession9/stream8.flv',
  'http://192.168.0.30:8000/showsession9/stream9.flv',
  'ws://192.168.0.30:8000/showsession9/stream8.flv',
  'http://192.168.0.30:8000/showsession9/stream9.flv',
  'ws://192.168.0.30:8000/showsession9/stream8.flv',
  'http://192.168.0.30:8000/showsession9/stream9.flv',
  'ws://192.168.0.30:8000/showsession9/stream8.flv',
  'http://192.168.0.30:8000/showsession9/stream9.flv',
  'ws://192.168.0.30:8000/showsession9/stream8.flv',
  'http://192.168.0.30:8000/showsession9/stream9.flv'


 
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

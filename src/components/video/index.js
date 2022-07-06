import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function Video({ url }) {
  const [play, setPlay] = useState(true);

  return (
    <>
      <h2>Holla</h2>
      <ReactPlayer
        className="react-player"
        url={url}
        onReady={(e) => {
          console.log("listo:");
        }}
        onBuffer={(e) => console.log("cargando", e.type)}
        onBufferEnd={(e) => console.log(e.type)}
        playing={play}
        controls={true}
        width={200}
      
      />
    </>
  );
}

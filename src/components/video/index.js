import React from "react";
import ReactPlayer from "react-player";

export default function Video({ url }) {
  return (
    <>
      <ReactPlayer
        className="react-player"
        url={url}
        playing={true}
        width={300}
      />
    </>
  );
}

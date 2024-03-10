import React, { useRef, useState, useMemo, useCallback } from "react";
import Uploadzone from "./Dropzone/Uploadzone";
import cuid from "cuid";
import MultiTrack from "./MultiTrack/MultiTrack";

export default function Player({ multitrackRef }) {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const audioFile = e.target.result;
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: audioFile },
        ]);
        // console.log(multitrackRef.current);
        multitrackRef.current.appendTrack(audioFile)
      //   multitrackRef.current.addTrack({
      //     id: 0,
      //     draggable: true,
      //     startPosition: 0,
      //     volume: 1,
      //     options: {
      //       waveColor: "hsl(161, 87%, 49%)",
      //       progressColor: "hsl(161, 87%, 20%)",
      //     },
      //     url: audioFile,
      //   });
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <div id="player">
      <Uploadzone onDrop={onDrop} />
      <MultiTrack file={images} multitrackRef={multitrackRef} />
    </div>
  );
}

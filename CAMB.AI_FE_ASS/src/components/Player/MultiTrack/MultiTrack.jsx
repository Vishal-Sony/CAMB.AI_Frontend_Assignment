import React, { useRef, useState, useEffect } from "react";
import Multitrack from "wavesurfer-multitrack";

export default function MultiTrack({ file, multitrackRef }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (file.length > 0) {
      multitrackRef.current = Multitrack.create(
        file.map((msc) => {
          return {
            id: 0,
            draggable: true,
            startPosition: 0,
            volume: 1,
            options: {
              waveColor: "hsl(161, 87%, 49%)",
              progressColor: "hsl(161, 87%, 20%)",
            },
            url: msc.src,
          };
        }),
        {
          container: containerRef.current, // required!
          minPxPerSec: 10, // zoom level
          rightButtonDrag: false, // set to true to drag with right mouse button
          cursorWidth: 2,
          cursorColor: "#D72F21",
          trackBackground: "#2D2D2D",
          trackBorderColor: "#7C7C7C",
          dragBounds: true,
          envelopeOptions: {
            lineColor: "rgba(255, 0, 0, 0.7)",
            lineWidth: 4,
            dragPointSize: window.innerWidth < 600 ? 20 : 10,
            dragPointFill: "rgba(255, 255, 255, 0.8)",
            dragPointStroke: "rgba(255, 255, 255, 0.3)",
          },
        }
      );
      return () => {
        if (multitrackRef.current) {
          multitrackRef.current.destroy();
        }
      };
    }
    
  }, [containerRef, file]);

  return (
    <div>
      <div
        id="player"
        ref={containerRef}
        style={{ background: "#2d2d2d", color: "#fff" }}
      />
    </div>
  );
}

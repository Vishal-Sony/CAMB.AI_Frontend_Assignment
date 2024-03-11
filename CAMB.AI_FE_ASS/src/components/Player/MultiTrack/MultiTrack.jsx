import React, { useRef, useEffect } from "react";
import Multitrack from "wavesurfer-multitrack";
import audio from "../../../../temp.mp3"
import audio2 from "../../../../temp2.mp3"
import audio3 from "../../../../temp3.mp3"

export default function MultiTrack({ file, multitrackRef }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      multitrackRef.current = Multitrack.create(
        [
          {
            id: 0,
            draggable: true,
            startPosition: 0,
            volume: 1,
            options: {
              waveColor: "hsl(161, 87%, 49%)",
              progressColor: "hsl(161, 87%, 20%)",
            },
            url: audio,
      },
      {
        id: 1,
        draggable: true,
        startPosition: 0,
        volume: 1,
        options: {
          waveColor: "hsl(161, 87%, 49%)",
          progressColor: "hsl(161, 87%, 20%)",
        },
        url: audio2,
  },
  {
    id: 2,
    draggable: true,
    startPosition: 0,
    volume: 1,
    options: {
      waveColor: "hsl(161, 87%, 49%)",
      progressColor: "hsl(161, 87%, 20%)",
    },
    url: audio3,
}

        ],
        {
          container: containerRef.current,
          minPxPerSec: 10,
          rightButtonDrag: true,
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
    }

    return () => {
      if (multitrackRef.current) {
        multitrackRef.current.destroy();
      }
    };
  }, [containerRef, multitrackRef]);

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

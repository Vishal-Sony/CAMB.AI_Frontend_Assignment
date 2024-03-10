import React ,{ useRef, useState, useMemo, useCallback } from 'react'
import Uploadzone from './Dropzone/Uploadzone'
import cuid  from 'cuid';
import MultiTrack from './MultiTrack/MultiTrack';
import MultiTrack2 from './MultiTrack/MultiTrack2';

const audioUrls = [
  '/src/components/Player/temp.mp3',
]

export default function Player({  multitrackRef }) {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  
 
  return (
    <div id='player'>
      <Uploadzone onDrop={onDrop}/>
      <MultiTrack file={images} multitrackRef={multitrackRef}/>
      {/* <MultiTrack2 file={images}/> */}
    </div>
  )
}

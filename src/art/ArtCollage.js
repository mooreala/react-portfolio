import React from 'react';
import PhotoAlbum from "react-photo-album";
import art1 from '../img/artwork/bunnyrista.png';
import art2 from '../img/artwork/cloudy.png';
import art3 from '../img/artwork/field.jpg';
import art4 from '../img/artwork/fishing.jpg';
import art5 from '../img/artwork/fruitsando.jpg';
import art6 from '../img/artwork/happyme.jpg';
import art7 from '../img/artwork/peanutbanana.jpg';
import art8 from '../img/artwork/plantgirl.jpeg';
import art9 from '../img/artwork/sadbear.png';
import art10 from '../img/artwork/shoppingwitch.png';
import art11 from '../img/artwork/twees.png';

const art = [
  { src: art1, width: 1500, height: 1500 },
  { src: art2, width:2048, height: 2732 },
  { src: art3, width:1635, height: 2048 },
  { src: art4, width:1730, height: 2048 },
  { src: art5, width: 1024, height: 762},
  { src: art6, width: 1688, height: 2048 },
  { src: art7, width: 1024, height: 1024 },
  { src: art8, width: 1668, height: 1784 },
  { src: art9, width: 1200, height: 1200 },
  { src: art10, width: 2048, height: 2732},
  { src: art11, width: 1500, height: 1500 },
];


function ArtCollage() {
  return(
    <PhotoAlbum 
      layout="columns" 
      photos={art} 
      columns={(containerWidth) => {
        if (containerWidth < 400) return 1;
        if (containerWidth < 800) return 2;
        return 3;
      }}
    />
  );
}

export default ArtCollage;
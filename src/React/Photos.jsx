import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Photos = () => {
  const [list, setList] = useState([]);

  const { photoId } = useParams();
  console.log(photoId);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${photoId}/photos`)
      .then((response) => response.json())
      .then((response1) => setList(response1));
  }, []);

  return (
    <>
      <div>Photos</div>
      <Carousel showArrows={true} width={"50%"} transitionTime={5} showIndicators={false} autoPlay={true} height={"50%"} useKeyboardArrows={true}  infiniteLoop={true}  autoFocus={true}>
      {list.map((data, idx) => {
          return <>
        <h5>{data.title}</h5>
        <img loading="lazy" src={data.thumbnailUrl} alt="" />
        </>
      })}
      </Carousel>
    </>
  );
};

export default Photos;

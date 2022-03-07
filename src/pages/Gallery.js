import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import img1 from '../assets/images/gallery/g1.jpg'
import img2 from '../assets/images/gallery/g2.jpg'
import img3 from '../assets/images/gallery/g3.jpg'
import img4 from '../assets/images/gallery/g4.jpg'
import img5 from '../assets/images/gallery/g5.jpg'
import img6 from '../assets/images/gallery/g6.jpg'
import img7 from '../assets/images/gallery/g7.jpg'
import img8 from '../assets/images/gallery/g8.jpg'
import img9 from '../assets/images/gallery/g9.jpg'
import img10 from '../assets/images/gallery/g10.jpg'
import img11 from '../assets/images/gallery/g11.jpg'
import img12 from '../assets/images/gallery/g12.jpg'
import img13 from '../assets/images/gallery/g13.jpg'
import img14 from '../assets/images/gallery/g14.jpg'
import img15 from '../assets/images/gallery/g15.jpg'
import img16 from '../assets/images/gallery/g16.jpg'

export default function Gallery() { 

  const gallery = [
    {
      id:1,
      img:img1,
      label:"This is an Image"
    },{
      id:2,
      img:img2,
      label:"This is an Image"
    },{
      id:3,
      img:img3,
      label:"This is an Image"
    },{
      id:4,
      img:img4,
      label:"This is an Image"
    },{
      id:5,
      img:img5,
      label:"This is an Image"
    },{
      id:6,
      img:img6,
      label:"This is an Image"
    },{
      id:7,
      img:img7,
      label:"This is an Image"
    },{
      id:8,
      img:img8,
      label:"This is an Image"
    },{
      id:9,
      img:img9,
      label:"This is an Image"
    },{
      id:10,
      img:img10,
      label:"This is an Image"
    },{
      id:11,
      img:img11,
      label:"This is an Image"
    },{
      id:12,
      img:img12,
      label:"This is an Image"
    },{
      id:13,
      img:img13,
      label:"This is an Image"
    },{
      id:14,
      img:img14,
      label:"This is an Image"
    },{
      id:15,
      img:img15,
      label:"This is an Image"
    },{
      id:16,
      img:img16,
      label:"This is an Image"
    },
  ]

  return (
    <div className="sect sectFour">
      <a name="gallery"></a>
    <div className="row">
      <div className="gallery">
        {
          gallery.map((item,key) => {
            return(
              <div>
                <img alt={"aa"+key} src = {item.img} />

              </div>
            )
          })
        }
      </div>
    </div>
  </div>
  );
}

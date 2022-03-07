import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import p1Img from "../assets/images/p1.png";
import p2Img from "../assets/images/p2.png";
import p3Img from "../assets/images/p3.png";
import p4Img from "../assets/images/p4.png";
import p5Img from "../assets/images/p5.png";

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: "project 1",
      name: "Shafa Care",
      description:
        "ShafaCare provides online doctor, online medicine, online conversation with doctor.It is implemented by NextJS and the help of rest API.",
      liveLink: "https://shafa.care/",
      img: p1Img,
    },
    {
      id: 2,
      title: "project 2",
      name: "Shafa AI",
      description:
        "ShafaDev is a software development company that has been providing technical solutions for your business needs since 2009. It is build by NextJS.",
      liveLink: "https://shafa.ai/",
      img: p2Img,
    },
    {
      id: 3,
      title: "project 3",
      name: "Enrich Grp",
      description:
        "EnrichGrp is a well designed, interactive. It's the main website of enrichgrp that contains the information of Enrichgrp. It is implemented by ReactJS.",
      liveLink: "https://enrichgrp.com/",
      img: p3Img,
    },
    {
      id: 4,
      title: "project 4",
      name: "Talen Tracker",
      description:
        "TalenTracker Limited is a full service Human Resources Business Partnering and Consultancy firm And it's build by ReactJS.",
      liveLink: "http://talentracker.com.bd/",
      img: p4Img,
    },
    {
      id: 5,
      title: "project 5",
      name: "Halcyon BD",
      description:
        "Halcyon is a full stack digital marketing agency built and nurtured by marketers. My responsibility was website maintenance, SEO, Effective and Efficient, increase the performance of website.",
      liveLink: "https://halcyonbd.com/",
      img: p5Img,
    },
  ];

  return (
    <div className="sect sectThree">
      <div className="container">
        <div className="row ">
          <h1 className="title-1 text-center w-100">
            RECENT <span>PROJECT</span>
          </h1>
          <p className="text-center w-100">
            A small gallery of recent projects chosen by me. I've done them all
            together with amazing people from companies around the globe.
          </p>
        </div>
        <div className="row project-list">
          {
            projectsList.map((item) => {
              return(
                <div>
                  <img src={item.img} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

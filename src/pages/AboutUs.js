import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import profileImg from "../assets/images/about1.jpeg";

export default function AboutUs() {
  return (
    <div className="sect sectTwo">
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-md-5">
            <div className="about-img">
              <img src={profileImg} />
            </div>
          </div>
          <div className="col-md-7">
            <h1 className="title-1">
              ABOUT <span>ME</span>
            </h1>
            <p>Front End Developer</p>
            <p>
              Hello! My name is Bappy and I enjoy creating things that live on
              the internet. My interest in web development started back in 20120
              when one of my friend showed something like, He has written his
              name of a top programmer's profile. I just saw and shockedand I
              thought a lot about HTML & CSS!
            </p>
            <br />
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency and a start-up company. My main focus these
              days is building accessible, inclusive products and digital
              experiences at HalcyonBD and ShafaCare.
            </p>
            <br />
            <br />
            <p>Here are a few technologies I’ve been working with recently:</p>

            <div className="technology mb-3">
              <p><span>♦</span> HTML</p>
              <p><span>♦</span> CSS</p>
              <p><span>♦</span> JS</p>
              <p><span>♦</span> ReactJs</p>
              <p><span>♦</span> NextJs</p>
              <p><span>♦</span> NodeJs</p>
            </div>
            <a className="btn-1" href="#">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

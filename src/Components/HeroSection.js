import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Particles from "react-tsparticles";
import avatar from "../assets/images/avatar.jpg";
import star from "../assets/images/logo/star-solid.png";

export default function HeroSection() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="sect sectOne">
      <div className="particals">
        <Particles
          id="tsparticles"
          // init={particlesInit}
          // loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="hero-section">
        <div>
          <img src={avatar} />
          <h1 className="title-1">
            Habibur Rahman 
            {/* <span>|</span> */}
          </h1>
          <div className="line-left-right">
            <div class="right"></div>
            <div className="star-grp">
            <img className="star star1" src={star} alt="star" />
            {/* <img className="star star2" src={star} alt="star" /> */}

            </div>
            <div class="left"></div>
          </div>
          <h3>
            <span class="text_1 title-2">Software Engineer</span>
            <span class="text_2 title-2">Front-end Developer </span>
          </h3>
          <p className="description">I design and code beautifully simple things, and I love what I do</p>
        </div>
      </div>
    </div>
  );
}

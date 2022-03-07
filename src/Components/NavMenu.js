import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function NavMenu() {
  const [menuIcon, setMenuIcon] = useState(true);
  const [crossIcon, setCrossMenu] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".nav-menu");

    // document.querySelector(".open-navbar-icon").addEventListener("click", () => {
    //   container.classList.add("change");
    // });

    // document.querySelector(".close-navbar-icon").addEventListener("click", () => {
    //   container.classList.remove("change");
    // });

    const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

    let i = 0;

    Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
      item.style.cssText = `background-color: ${colors[i++]}`;
    });

    Array.from(document.querySelectorAll(".nav-link-mobile")).forEach((item) => {
      item.style.cssText = `background-color: ${colors[i++]}`;
    });

    // Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    //   item.onclick = () => {
    //     item.parentElement.parentElement.classList.toggle("change");
    //   };
    // });
  }, []);

  function showNavFun() {
    var element = document.getElementById("open-nav");
    element.classList.remove("reversechange");
    element.classList.add("change");
    var delayInMilliseconds = 2000; //1 second
    setTimeout(function () {
      setMenuIcon(false);
      setCrossMenu(true);
    }, delayInMilliseconds);
    console.log("xxxx", element.classList);
  }
  function closeNavFun() {
    var element = document.getElementById("open-nav");
    // element.classList.add("change");
    // element.classList.remove("change");
    element.classList.add("reversechange");
    var delayInMilliseconds = 2000; //1 second
    setTimeout(function () {
      setMenuIcon(true);
      setCrossMenu(false);
    }, delayInMilliseconds);
    console.log("xxxx", element.classList);

    console.log("xxxx", element.classList);
  }

  return (
    <>
      {/* <div className="pc-view"> */}
        <div className="nav-menu">
          {/* -- Navbar -- */}
          {menuIcon ? (
            <div
              class="open-navbar-icon navbar-icon center"
              onClick={showNavFun}
            >
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          ) : null}

          <div id="open-nav" class="navbar-wrapper">
            {/* <nav class="navbar"> */}
            {crossIcon ? (
              <div
                class="close-navbar-icon navbar-icon center"
                onClick={closeNavFun}
              >
                <div class="line line-1"></div>
                <div class="line line-2"></div>
              </div>
            ) : null}

            <div class="nav-list">
              <Link onClick={closeNavFun} to="/" class="nav-link center">
                Home
              </Link>
              <Link onClick={closeNavFun} to="/about" class="nav-link center">
                About me
              </Link>
              <Link onClick={closeNavFun} to="/projects" class="nav-link center">
                Projects
              </Link>
              <Link onClick={closeNavFun} to="/gallery" class="nav-link center">
                Gallery
              </Link>
              <Link onClick={closeNavFun} to="/contact" class="nav-link center">
                Contact
              </Link>
            </div>
            {/* </nav> */}
          </div>
          {/* -- End of Navbar -- */}
        </div>
      {/* </div>
      <div className="phone-view">
        <div className="nav-menu">
          {menuIcon ? (
            <div
              class="open-navbar-icon navbar-icon center"
              onClick={showNavFun}
            >
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          ) : null}

          <div id="open-nav" class="navbar-wrapper change-mobile">
            {crossIcon ? (
              <div
                class="close-navbar-icon navbar-icon center"
                onClick={closeNavFun}
              >
                <div class="line line-1"></div>
                <div class="line line-2"></div>
              </div>
            ) : null}

            <div class="nav-list-mobile">
              <a href="#" class="nav-link-mobile center">
                Home
              </a>
              <a href="#" class="nav-link-mobile center">
                Tours
              </a>
              <a href="#" class="nav-link-mobile center">
                About Us
              </a>
              <a href="#" class="nav-link-mobile center">
                Offer
              </a>
              <a href="#" class="nav-link-mobile center">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

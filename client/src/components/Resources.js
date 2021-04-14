import React, { Suspense, useRef, useState, useEffect } from "react";
import "../css/Resources.css";
import RaspberryDesc from "./RaspberryDesc.js";
import ArduinoDesc from "./ArduinoDesc.js";
import ArduinoDarkDesc from "./ArduinoDarkDesc.js";
import { Canvas, useFrame } from "react-three-fiber";
import { Section } from "./section.js";
import ThreeDModel from "./ThreeDModel.js";
import ReactPageScroller from "react-page-scroller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DescMob from "./DescMob.js";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Pagination } from "react-bootstrap";
//import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
//import "swiper/swiper-bundle.css";
import $ from "jquery";
import { Html, useGLTF, OrbitControls } from "@react-three/drei";
import state from "./state.js";
import Header from "./Header";
import Navbar from "./Navbar";
function Resources() {
  //SwiperCore.use([Navigation, Pagination]);
  // gsap.registerPlugin(ScrollTrigger);
  // const ref = useRef(null);

  // let sections = gsap.utils.toArray(".panel");

  useEffect(() => {
    $(".headerFull").css("display", "block");
    $(".headerFull").css("position", "absolute");
    $(".headerFull").css("top", "0");
  }, []);
  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector(".title_ytres"),
  //     {
  //       opacity: 0,
  //       // y: -20,
  //     },
  //     {
  //       opacity: 1,
  //       // y: 0,
  //       scrollTrigger: {
  //         trigger: element.querySelector(".title_ytres"),
  //         start: "top bottom",
  //         end: "bottom center",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);
  const Description = () => {
    return <div>Desc</div>;
  };

  const Container = ({ url }) => {
    return (
      <div className="whole_res">
        <div className="container_res" style={{ position: "relative" }}>
          <div className="model">
            {" "}
            <ThreeDModel url={url} />
          </div>
          <div className="descrip">
            {" "}
            <ArduinoDesc />
          </div>
          <IconButton
            id="upButton"
            // style={{ position: "absolute", right: "0", bottom: "0" }}
            onClick={() => {
              var elementArd = document.getElementById("res_intro");
              var ardMob = document.getElementById("res_intro");
              elementArd.scrollIntoView({
                behavior: "smooth",
              });
              ardMob.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <FontAwesomeIcon
              className="icons_font"
              icon={faChevronUp}
              color="#00bbbc"
            />
          </IconButton>
        </div>
      </div>
    );
  };
  const ArduinoContainer_Mobile = ({ url, model }) => {
    return (
      <div className="wholeScreen">
        <div className="descrip_Mobile">
          {" "}
          <DescMob model={model} url={url} />{" "}
        </div>
      </div>
    );
  };
  const Container2 = ({ url }) => {
    return (
      <div className="whole_res">
        <div className="container_res" style={{ position: "relative" }}>
          <div className="descrip1">
            {" "}
            <ArduinoDarkDesc />
          </div>{" "}
          <div className="model1">
            {" "}
            <ThreeDModel url={url} />
          </div>{" "}
          <IconButton
            //style={{ position: "absolute", right: "0", bottom: "0" }}
            id="upButton"
            onClick={() => {
              var elementArd = document.getElementById("res_intro");
              var ardMob = document.getElementById("res_intro");
              elementArd.scrollIntoView({
                behavior: "smooth",
              });
              ardMob.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <FontAwesomeIcon
              className="icons_font"
              icon={faChevronUp}
              color="#00bbbc"
            />
          </IconButton>
        </div>
      </div>
    );
  };
  const Container1 = ({ url }) => {
    return (
      <div className="whole_res">
        <div className="container_res" style={{ position: "relative" }}>
          <div className="model1" style={{ "background-color": "#aaaaaa" }}>
            {" "}
            <ThreeDModel url={url} />
          </div>{" "}
          <div className="descrip1">
            {" "}
            <RaspberryDesc />
          </div>
          <IconButton
            id="upButton"
            onClick={() => {
              var elementArd = document.getElementById("res_intro");
              var ardMob = document.getElementById("res_intro");
              elementArd.scrollIntoView({
                behavior: "smooth",
              });
              ardMob.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <FontAwesomeIcon
              className="icons_fonts"
              icon={faChevronUp}
              color="#fff"
            />
          </IconButton>
        </div>
      </div>
    );
  };

  return (
    <div className="res_total">
      <div className="resources">
        <div className="res_intro" id="res_intro">
          <Navbar />
          <h1 className="heading">Resources</h1>
          <div className="caption">
            The only true wisdom is in knowing you know nothing.
          </div>
          <div className="resource_three">
            <div
              className="arduino_button"
              id="resource_buttons"
              onClick={() => {
                var elementArd = document.getElementById("content_arduino");
                var ardMob = document.getElementById("content_arduinoMob");
                elementArd.scrollIntoView({
                  behavior: "smooth",
                });
                ardMob.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Arduino
            </div>
            <div
              className="nodeMCU_button"
              id="resource_buttons"
              onClick={() => {
                var elementNode = document.getElementById("content_nodeMCU");
                var elementNodeMob = document.getElementById(
                  "content_nodeMCUMob"
                );
                elementNode.scrollIntoView({
                  behavior: "smooth",
                });
                elementNodeMob.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              NodeMCU
            </div>
            <div
              id="resource_buttons"
              className="raspberryPi_button"
              onClick={() => {
                var elementRasp = document.getElementById(
                  "content_raspberryPi"
                );
                var elementRaspMob = document.getElementById(
                  "content_raspberryPiMob"
                );

                elementRasp.scrollIntoView({
                  behavior: "smooth",
                });
                elementRaspMob.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              RaspberryPi
            </div>
            <div
              className="arduino_button"
              id="resource_buttons"
              onClick={() => {
                var elementArd = document.getElementById("youtubeLinks_res");
                var ardMob = document.getElementById("youtubeLinks_res");
                elementArd.scrollIntoView({
                  behavior: "smooth",
                });
                ardMob.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Useful Links
            </div>
          </div>
          <div
            className="model2"
            style={{ "background-color": "#aaaaaa", display: "none" }}
          >
            {" "}
            <ThreeDModel url="./esp8266_nodemcu/scene.gltf" />
          </div>{" "}
          <br />
          <br />
        </div>
        <div className="content_arduino" id="content_arduino">
          <Container url="./scene.gltf" />
        </div>
        <div className="content_arduinoMob" id="content_arduinoMob">
          <ArduinoContainer_Mobile url="./scene.gltf" model="arduino" />
        </div>
        <div
          className="content_nodeMCU"
          id="content_nodeMCU"
          style={{ height: "100vh", width: "100%" }}
        >
          <Container2 url="./esp8266_nodemcu/scene.gltf" />
        </div>
        <div className="content_nodeMCUMob" id="content_nodeMCUMob">
          <ArduinoContainer_Mobile
            url="./esp8266_nodemcu/scene.gltf"
            model="nodeMCU"
          />
        </div>
        <div
          className="content_raspberryPi"
          id="content_raspberryPi"
          style={{
            height: "100vh",
            width: "100%",
            "scroll-snap-align": "center",
          }}
        >
          {" "}
          <Container1 url="./raspberry_pi_3/scene.gltf" />
        </div>
        <div className="content_raspberryPiMob" id="content_raspberryPiMob">
          <ArduinoContainer_Mobile
            url="./raspberry_pi_3/scene.gltf"
            model="raspberryPi"
          />
        </div>
        <div className="youtubeLinks_res" id="youtubeLinks_res">
          <div className="left-lines-res">
            <img src="side-line-1.svg" width="100%" height="100%" />
          </div>
          <div className="right-lines-res">
            <img src="side-line-1.svg" width="100%" height="100%" />
          </div>
          <div className="whole_ytres">
            <div className="title_ytres">
              <h1 style={{ color: "white" }}>Useful Links</h1>
            </div>
            <div className="yt-linksContainer">
              <div className="yt-simpleContainer">
                <div className="iframe_titleRes">
                  <h3>Web Dev</h3>
                </div>
                <div className="iframe_contentRes">
                  {" "}
                  <iframe
                    src="https://www.youtube.com/embed/0eWrpsCLMJQ?list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="yt-simpleContainer">
                {" "}
                <div className="iframe_contentRes">
                  <iframe
                    src="https://www.youtube.com/embed/roDz8mMvbIg?list=PLknSwrodgQ72X4sKpzf5vT8kY80HKcUSe"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="iframe_titleRes">
                  <h3 className="android_res">App Dev</h3>
                </div>
              </div>
              <div className="yt-simpleContainer">
                <div className="iframe_titleRes">
                  <h3>ML & AI</h3>
                </div>
                <div className="iframe_contentRes">
                  <iframe
                    width="853"
                    height="480"
                    src="https://www.youtube.com/embed/bPrmA1SEN2k?list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="yt-simpleContainer">
                <div className="iframe_contentRes">
                  <iframe
                    width="853"
                    height="480"
                    src="https://www.youtube.com/embed/rYWJdZ5qg6M?list=PLbRMhDVUMngcdUbBySzyzcPiFTYWr4rV_"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="iframe_titleRes">
                  <h3 className="android_res">Robotics</h3>
                </div>
              </div>
            </div>
          </div>

          <p className="res-copyrights">
            © 2021 <label>TIC SASTRA</label>
          </p>
          <IconButton
            id="upButton"
            onClick={() => {
              var elementArd = document.getElementById("res_intro");
              var ardMob = document.getElementById("res_intro");
              elementArd.scrollIntoView({
                behavior: "smooth",
              });
              ardMob.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <FontAwesomeIcon
              className="icons_font"
              icon={faChevronUp}
              color="#00bbbc"
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Resources;

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

  useEffect(() => {
    $(".headerFull").css("display", "block");
    $(".headerFull").css("position", "absolute");
    $(".headerFull").css("top", "0");
  }, [])

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
              className="icons_font"
              icon={faChevronUp}
              color="#00bbbc"
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
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
      </div>
    </div>
  );
}

export default Resources;

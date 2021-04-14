import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
//import { paperToast, paperButton } from "@polymer/paper-toast/paper-toast.js";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faArrowCircleRight,
  faFileCode,
  faUpload,
  faDownload,
  faSearchMinus,
} from "@fortawesome/free-solid-svg-icons";
import "../css/ArduinoDesc.css";
function ArduinoDesc() {
  const [toast, settoast] = useState(null);
  const [tab, settab] = useState("tab1");
  $(document).ready(function () {
    $(".tabs2").click(function () {
      settab("tab2");
      $("::-webkit-scrollbar").css(("display": "none"));
    $(".tabs2").css({ "background-color": "white" });
    $(".tabs1").css({ "background-color": "#47b9be" });
    $(".tabs3").css({ "background-color": "#47b9be" });
    $(".tabs2").hover(() => {
      $(".tabs2").css({ "background-color": "white" });
    });
    $(".tabs1").hover(
      () => {
        $(".tabs1").css({ "background-color": "#98feff" });
      },
      function () {
        $(".tabs1").css({ "background-color": "#47b9be" }); //to remove property set it to ''
      }
    );
    $(".tabs3").hover(
      () => {
        $(".tabs3").css({ "background-color": "#98feff" });
      },
      function () {
        $(".tabs3").css({ "background-color": "#47b9be" }); //to remove property set it to ''
      }
    );
  });
  $(".icons_button").click(function () {
    $(".toast1").show();
    setTimeout(function () {
      $(".toast1").hide();
    }, 1000);
  });
  $(".icons_button2").click(function () {
    $(".toast1").show();
    setTimeout(function () {
      $(".toast1").hide();
    }, 1000);
  });
  $(".icons_button3").click(function () {
    $(".toast1").show();
    setTimeout(function () {
      $(".toast1").hide();
    }, 1000);
  });

  $(".tabs1").click(() => {
    settab("tab1");
    $("::-webkit-scrollbar-thumb").css(("background": "#00a5a6"));
  $(".tabs1").css({ "background-color": "white" });
  $(".tabs2").css({ "background-color": "#47b9be" });
  $(".tabs3").css({ "background-color": "#47b9be" });
  $(".tabs1").hover(() => {
    $(".tabs1").css({ "background-color": "white" });
  });
  $(".tabs3").hover(
    () => {
      $(".tabs3").css({ "background-color": "#98feff" });
    },
    function () {
      $(".tabs3").css({ "background-color": "#47b9be" }); //to remove property set it to ''
    }
  );
  $(".tabs2").hover(
    () => {
      $(".tabs2").css({ "background-color": "#98feff" });
    },
    function () {
      $(".tabs2").css({ "background-color": "#47b9be" }); //to remove property set it to ''
    }
  );
});
$(".tabs3").click(() => {
  settab("tab3");
  $("::-webkit-scrollbar").css(("display": "none"));
$(".tabs3").css({ "background-color": "white" });
$(".tabs1").css({ "background-color": "#47b9be" });
$(".tabs2").css({ "background-color": "#47b9be" });
$(".tabs1").hover(
  () => {
    $(".tabs1").css({ "background-color": "#98feff" });
  },
  function () {
    $(".tabs1").css({ "background-color": "#47b9be" }); //to remove property set it to ''
  }
);
$(".tabs2").hover(
  () => {
    $(".tabs2").css({ "background-color": "#98feff" });
  },
  function () {
    $(".tabs2").css({ "background-color": "#47b9be" }); //to remove property set it to ''
  }
);

$(".tabs3").hover(() => {
  $(".tabs3").css({ "background-color": "white" });
});
    });
  });
console.log(tab);
return (
  <div className="container_ArdDesc">
    <div className="topBar">
      <div className="macDots">
        <span class="dot1"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
      </div>
      {/* <div className="topBar_title"></div> */}
        Arduino UNO | Arduino 1.8.13
      </div>
    <div className="topIcons">
      <div className="icons">
        <div className="four">
          {/* <Tooltip title="Verify"> */}
          <IconButton
            aria-label="verify"
            onClick={() => settoast("verify")}
          >
            <FontAwesomeIcon
              className="icons_button"
              icon={faCheckCircle}
              color="#00bbbc"
            />
          </IconButton>
          {/* </Tooltip>
            <Tooltip title="Upload"> */}
          <IconButton aria-label="upload">
            <FontAwesomeIcon
              className="icons_button"
              color="#00bbbc"
              icon={faArrowCircleRight}
              onClick={() => settoast("upload")}
            />
          </IconButton>
          {/* </Tooltip>
            <Tooltip title="New Tab"> */}
          <IconButton aria-label="new-tab">
            <div class="square">
              <FontAwesomeIcon
                icon={faFileCode}
                className="icons_button2"
                onClick={() => settoast("new-tab")}
              />
            </div>
          </IconButton>
          {/* </Tooltip> */}
          {/* <Tooltip title="Open"> */}
          <IconButton
            aria-label="open-file"
            onClick={() => settoast("open-file")}
          >
            <div class="square">
              <FontAwesomeIcon icon={faUpload} className="icons_button2" />
            </div>
          </IconButton>
          {/* </Tooltip>
          <Tooltip title="Save"> */}
          <IconButton
            aria-label="save-file"
            onClick={() => settoast("save-file")}
          >
            <div class="square">
              <FontAwesomeIcon
                icon={faDownload}
                className="icons_button2"
              />
            </div>
          </IconButton>
          {/* </Tooltip> */}
        </div>
        <div className="serial">
          {/* <Tooltip title="Serial Monitor"> */}
          <IconButton
            aria-label="serial-monitor"
            onClick={() => settoast("serial-monitor")}
          >
            <div class="square">
              {" "}
              <FontAwesomeIcon
                className="icons_button3"
                icon={faSearchMinus}
              />{" "}
            </div>
          </IconButton>
          {/* </Tooltip> */}
        </div>
      </div>
    </div>
    <div className="tabSection">
      <div className="tabs1">Introduction</div>
      <div className="tabs2">Arduino UNO</div>
      <div className="tabs3">Projects</div>
    </div>
    <div className="codingSection">
      {tab == "tab1" ? (
        <div>
          <div className="text_content">
            <div>
              <span style={{ color: "red" }}>void</span>
              <span style={{ marginLeft: "1vw", color: "green" }}>
                Arduino()
                </span>
            </div>
            <div style={{ color: "grey", marginTop: "1vh" }}>
              /* Arduino is an open hardware development board that can be
              used by tinkerers, hobbyists, and makers to design and build
              devices that interact with the real world. Arduino code is
              written in C++ with an addition of special methods and
              functions. C++ is a human-readable programming language.*/
              </div>
            <div style={{ marginTop: "2vh" }}>
              <span style={{ color: "red" }}>void</span>
              <span style={{ marginLeft: "1vw", color: "green" }}>
                Arduino IDE()
                </span>
            </div>
            <div style={{ color: "grey", marginTop: "1vh" }}>
              /* The open-source Arduino Software (IDE) makes it easy to write
              code and upload it to the board. This software can be used with
              any Arduino board. It is an official Arduino software, making
              code compilation too easy that even a common person with no
              prior technical knowledge can get their feet wet with the
              learning process.*/
              </div>{" "}
            <div style={{ color: "grey", marginTop: "1vh" }}>
              /*Get the latest version from the download page. You can choose
              between the Installer (.exe) and the Zip packages. We suggest
              you use the first one that installs directly everything you need
              to use the Arduino Software (IDE), including the drivers. With
              the Zip package you need to install the drivers manually. The
              Zip file is also useful if you want to create a portable
              installation.*/
              </div>{" "}
            <div style={{ color: "grey", marginTop: "1vh" }}>
              /* Arduino IDE looks exactly the same as this window. You can
              download the Arduino from
                <a
                href="https://www.arduino.cc/en/software"
                style={{
                  marginLeft: "1vw",
                  userSelect: "auto",
                  textDecoration: "none",
                  color: "grey",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.arduino.cc/en/software */
                </a>
            </div>
          </div>
        </div>
      ) : tab == "tab2" ? (
        <div>
          <div className="text_content">
            <div>
              <span style={{ color: "red" }}>void</span>
              <span style={{ marginLeft: "1vw", color: "green" }}>
                Arduino UNO()
                </span>{" "}
            </div>
            <div style={{ color: "grey", marginTop: "1vh" }}>
              {/* Arduino boards are able to read inputs - light on a sensor, a
              finger on a button, or a Twitter message - and turn it into an
              output - activating a motor, turning on an LED, publishing
              something online. Unlike most previous programmable circuit
              boards, the Arduino does not need a separate piece of hardware
              (called a programmer) in order to load new code onto the board
              -- you can simply use a USB cable. */}
            </div>

            <div style={{ color: "grey", marginTop: "1vh" }}>
              /* The Arduino Uno is a microcontroller board based on the
              ATmega328. It has 20 digital input/output pins (of which 6 can
              be used as PWM outputs and 6 can be used as analog inputs), a 16
              MHz resonator, a USB connection, a power jack, an in-circuit
              system programming (ICSP) header, and a reset button. It
              contains everything needed to support the microcontroller;
              simply connect it to a computer with a USB cable or power it
              with a AC-to-DC adapter or battery to get started. */
              </div>
          </div>
        </div>
      ) : tab == "tab3" ? (
        <div>
          <div className="text_content">
            <div>
              <span style={{ color: "red" }}>void</span>
              <span style={{ marginLeft: "1vw", color: "green" }}>
                Projects()
                </span>
            </div>{" "}
            <div style={{ color: "grey", marginTop: "1vh" }}>
              /* The easiest way for beginners to get started with Arduino is
              by creating circuits using a solderless breadboard. These simple
              projects will teach you the basics of Arduino Uno, electronics
              and programming. */
              </div>
            <div style={{ color: "grey", marginTop: "1vh" }}>
              <ul className="ul" style={{ listStyleType: "none" }}>
                <li
                  style={{
                    margin: "1vw 0 1vw 0",
                  }}
                >
                  <a
                    style={{
                      color: "#009b9d",
                      textDecoration: "none",
                    }}
                    id="alink_ard"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://create.arduino.cc/projecthub/mafzal/temperature-monitoring-with-dht22-arduino-15b013?ref=tag&ref_id=arduino&offset=4"
                  >
                    Temperature Monitoring With DHT22 & Arduino
                    </a>
                </li>{" "}
                <li
                  style={{
                    margin: "1vw 0 1vw 0",
                  }}
                >
                  <a
                    id="alink_ard"
                    style={{
                      color: "#00a5a6",
                      textDecoration: "none",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://create.arduino.cc/projecthub/ammaratef45/detecting-obstacles-and-warning-arduino-and-ultrasonic-13e5ea?ref=tag&ref_id=arduino&offset=5"
                  >
                    Detecting Obstacles and Warning - Arduino and Ultrasonic
                    </a>
                </li>{" "}
                <li
                  style={{
                    margin: "1vw 0 1vw 0",
                  }}
                >
                  <a
                    style={{
                      color: "#00a5a6",
                      textDecoration: "none",
                    }}
                    id="alink_ard"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://create.arduino.cc/projecthub/ryanchan/simple-programmable-robotic-arm-bd28a0?ref=tag&ref_id=arduino&offset=3"
                  >
                    Simple Programmable Robotic Arm
                    </a>
                </li>{" "}
                <li
                  style={{
                    margin: "1vw 0 1vw 0",
                  }}
                >
                  <a
                    style={{
                      color: "#00a5a6",
                      textDecoration: "none",
                    }}
                    id="alink_ard"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://create.arduino.cc/projecthub/techno_z/arduino-traffic-light-simulator-2ec9f7?ref=tag&ref_id=arduino&offset=21"
                  >
                    Arduino Traffic Light Simulator
                    </a>
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>
      ) : (
        () => {
          console.log("error");
        }
      )}
    </div>
    <div className="footPart"></div>
    <div className="footPart_Black">
      {toast != null ? (
        <div className="toast1">Your have pressed {toast}</div>
      ) : (
        ""
      )}
    </div>
    <div className="footPart_DarkG"></div>
  </div >
);
}

export default ArduinoDesc;

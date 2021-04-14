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
import "../css/ArduinoDarkDesc.css";
function ArduinoDarkDesc() {
  const [toast, settoast] = useState(null);
  const [tab, settab] = useState("tab1");
  $(document).ready(function () {
    $("#tabs2").click(function () {
      settab("tab2");
      $("::-webkit-scrollbar").css(("display": "none"));

    $("::-webkit-scrollbar-thumb").css(("display": "none"));
  $("#tabs2").css({ "background-color": "#282a36" });
  $("#tabs1").css({ "background-color": "#00bbbc" });
  $("#tabs3").css({ "background-color": "#00bbbc" });
  $("#tabs2").hover(() => {
    $("#tabs2").css({ "background-color": "#282a36" });
  });
  $("#tabs1").hover(
    () => {
      $("#tabs1").css({ "background-color": "#3b3d52" });
    },
    function () {
      $("#tabs1").css({ "background-color": "#00bbbc" }); //to remove property set it to ''
    }
  );
  $("#tabs3").hover(
    () => {
      $("#tabs3").css({ "background-color": "#3b3d52" });
    },
    function () {
      $("#tabs3").css({ "background-color": "#00bbbc" }); //to remove property set it to ''
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

$("#tabs1").click(() => {
  settab("tab1");
  $("::-webkit-scrollbar-track ").css(("box-shadow": "inset 0 0 5px grey"));
$("#tabs1").css({ "background-color": "#282a36" });
$("#tabs2").css({ "background-color": "#00bbbc" });
$("#tabs3").css({ "background-color": "#00bbbc" });
$("#tabs1").hover(() => {
  $("#tabs1").css({ "background-color": "#282a36" });
});
$("#tabs3").hover(
  () => {
    $("#tabs3").css({ "background-color": "#3b3d52" });
  },
  function () {
    $("#tabs3").css({ "background-color": "#00bbbc" }); //to remove property set it to ''
  }
);
$("#tabs2").hover(
  () => {
    $("#tabs2").css({ "background-color": "#3b3d52" });
  },
  function () {
    $("#tabs2").css({ "background-color": "#00bbbc" }); //to remove property set it to ''
  }
);
    });
$("#tabs3").click(() => {
  settab("tab3");
  $("::-webkit-scrollbar").css(("display": "none"));

$("#tabs3").css({ "background-color": "#282a36" });
$("#tabs1").css({ "background-color": "#00bbbc" });
$("#tabs2").css({ "background-color": "#00bbbc" });
$("#tabs1").hover(
  () => {
    $("#tabs1").css({ "background-color": "#3b3d52" });
  },
  function () {
    $("#tabs1").css({ "background-color": "#00bbbc" }); //to remove property set it to ''
  }
);
$("#tabs2").hover(
  () => {
    $("#tabs2").css({ "background-color": "#3b3d52" });
  },
  function () {
    $("#tabs2").css({ "background-color": "#00bbbc" }); //to remove property set it to ''
  }
);

$("#tabs3").hover(() => {
  $("#tabs3").css({ "background-color": "#282a36" });
});
    });
  });
console.log(tab);
return (
  <div className="container_ArdDesc">
    <div id="topBar">
      <div className="macDots">
        <span class="dot1"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
      </div>
      {/* <div className="topBar_title"></div> */}
        NodEMCU | Arduino 1.8.13
      </div>
    <div className="topIcons1">
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
          {/* </Tooltip>
            <Tooltip title="Open"> */}
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
    <div className="tabSection1">
      <div id="tabs1">Introduction</div>
      <div id="tabs2">NodEMCU</div>
      <div id="tabs3">Projects</div>
    </div>
    <div id="codingSection">
      {tab == "tab1" ? (
        <div>
          <div className="text_content">
            <div>
              <span style={{ color: "red" }}>void</span>
              <span style={{ marginLeft: "1vw", color: "white" }}>
                NodEMCU()
                </span>
            </div>
            <div style={{ color: "grey", marginTop: "1vh" }}>
              /* The Node MCU is an open source firmware and development kit
              that helps you to prototype your IoT product with ArduinoIDE or
              in few Lau script lines. It includes firmware which runs on the
              ESP8266 Wi-Fi SoC. And hardware which is based on the ESP-12
              module. In this tutorial we explain how to use NodeMCU with
              Arduino IDE.*/
              </div>
            <div style={{ marginTop: "2vh" }}>
              <span style={{ color: "red" }}>void</span>
              <span style={{ marginLeft: "1vw", color: "white" }}>
                Arduino IDE()
                </span>
            </div>
            <div style={{ color: "grey", marginTop: "1vh" }}>
              <ul>
                <li> Open up the Arduino IDE.</li>
                <li>
                  Go to File -&gt; Preferences -&gt; Additional Boards Manager URLs:
                  http://arduino.esp8266.com/stable/package_esp8266com_index.json
                  -> click OK
                  </li>
                <li>Close the IDE and open it up again.</li>
                <li>
                  Go to Tools -> Board (where you’d select your version of
                  Arduino) -> Boards Manager, find the ESP8266 and click
                  Install. You now should be able to use the ESP8266 as an
                  Arduino. Simply select the NODEMCU 1.0 as your board with
                  Port and you should be ready to code
                  </li>
              </ul>
                Now, with ESP8266 board installed to Arduino IDE, we can program
                NodeMCU using Arduino IDE directly.
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
              <span style={{ marginLeft: "1vw", color: "white" }}>
                NodEMCU Board()
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
              /* There are mainly four options: Lua, MycroPython, c++
              toolchain, and Arduino programming language (similar to c/c++).
              In this tutorial will be using Arduino programming language
              since it is powerful, easy to learn and all the programming and
              deploying tasks can be performed in the Arduino Integrated
              Development Environment (IDE). For Lua programming there are
              also some IDEs, such as ESplorer. General purpose IDEs can be
              used for deploying MycroPython programs to NodeMCU, such as the
              Pymakr Atom Package for Atom. Programming using the c++
              toolchain is commonly done from the Command-Line Interface
              (CLI).*/
              </div>
          </div>
        </div>
      ) : tab == "tab3" ? (
        <div>
          <div className="text_content">
            <div>
              <span style={{ color: "red" }}>void</span>
              <span style={{ marginLeft: "1vw", color: "white" }}>
                Projects()
                </span>
            </div>{" "}
            <div style={{ color: "grey", marginTop: "1vh" }}>
              /* Here is a collection of simple ESP8266 Projects that are
              implemented in Electronics Hub. As we make more ESP8266
              Projects, we will update this page with all the latest
              information. */
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
                      color: "#00a5a6",
                      textDecoration: "none",
                    }}
                    target="_blank"
                    id="alink_node"
                    rel="noopener noreferrer"
                    href="https://www.electronicshub.org/esp8266-arduino-interface/"
                  >
                    Getting Started with ESP8266 and Arduino: ESP8266 Arduino
                    Interface
                    </a>
                </li>{" "}
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
                    id="alink_node"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.hackster.io/KM_Saifullah/led-control-over-the-internet-68ee09"
                  >
                    Led Control Over the Internet
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
                    target="_blank"
                    id="alink_node"
                    rel="noopener noreferrer"
                    href="https://www.electronicshub.org/esp8266-web-server/"
                  >
                    How to Create ESP8266 Web Server?
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
                    id="alink_node"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.electronicshub.org/wifi-controlled-robot-esp8266-arduino/https://www.electronicshub.org/wifi-controlled-robot-esp8266-arduino/"
                  >
                    WiFi Controlled Robot using ESP8266 and Arduino
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
    <div id="footPart"></div>
    <div className="footPart_Black">
      {toast != null ? (
        <div className="toast1">Your have pressed {toast}</div>
      ) : (
        ""
      )}
    </div>
    <div id="footPart_DarkG"></div>
  </div>
);
}

export default ArduinoDarkDesc;

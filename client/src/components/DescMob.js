import React, { useState } from "react";
import "../css/DescMob.css";
import $ from "jquery";
import ThreeDModel from "./ThreeDModel.js";
function DescMob({ model, url }) {
  const [tabSelected, settabSelected] = useState("tab1");
  const [tabSelectednodeMCU, settabSelectednodeMCU] = useState("tab1");
  const [tabSelectedraspberryPi, settabSelectedraspberryPi] = useState("tab1");
  let isIOS =
    (/iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !window.MSStream;
  console.log(isIOS);

  $(document).ready(function () {
    $(".tabMob1").click(function () {
      settabSelected("tab1");
      $(".tabMob2").css({ "background-color": "#47b9be" });
      $(".tabMob1").css({ "background-color": "white" });
    });
    $(".tabMob2").click(function () {
      $(".tabMob1").css({ "background-color": "#47b9be" });
      settabSelected("tab2");
      $(".tabMob2").css({ "background-color": "white" });
    });

    //nodemcu Biatch
    $(".tabMob1_nodeMCU").click(function () {
      settabSelectednodeMCU("tab1");
      $(".tabMob2_nodeMCU").css({ "background-color": "#009c9b" });
      $(".tabMob1_nodeMCU").css({ "background-color": "#282A36" });
    });
    $(".tabMob2_nodeMCU").click(function () {
      $(".tabMob1_nodeMCU").css({ "background-color": "#009c9b" });
      settabSelectednodeMCU("tab2");
      $(".tabMob2_nodeMCU").css({ "background-color": "#282A36" });
    });

    //raspberryPi Biatch
    $(".tabMob1_raspberryPi").click(function () {
      settabSelectedraspberryPi("tab1");
      $(".tabMob2_raspberryPi").css({ "background-color": "#dcdad6" });
      $(".tabMob1_raspberryPi").css({ "background-color": "#fff" });
    });
    $(".tabMob2_raspberryPi").click(function () {
      $(".tabMob1_raspberryPi").css({ "background-color": "#dcdad6" });
      settabSelectedraspberryPi("tab2");
      $(".tabMob2_raspberryPi").css({ "background-color": "#fff" });
    });
  });
  return (
    <div className="mobView">
      {model == "arduino" ? (
        <div className="full_arduino">
          <div className="arduino_head">Arduino</div>
          <div className="arduino_tab">
            <div className="tab_ArduinoMob">
              <div className="tabMob1">3D Model</div>
              <div className="tabMob2">Introduction</div>{" "}
            </div>
          </div>
          <div className="arduino_code">
            {tabSelected == "tab2" ? (
              <div className="text_arduino">
                <div>
                  <span style={{ color: "red" }}>void</span>
                  <span style={{ marginLeft: "2vw", color: "green" }}>
                    Arduino()
                  </span>
                </div>
                <div style={{ color: "grey", marginTop: "1vh" }}>
                  /* Arduino is an open hardware development board that can be
                  used by tinkerers, hobbyists, and makers to design and build
                  devices that interact with the real world. */
                </div>
                <div style={{ marginTop: "2vh" }}>
                  <span style={{ color: "red" }}>void</span>
                  <span style={{ marginLeft: "2vw", color: "green" }}>
                    Arduino IDE()
                  </span>
                </div>
                <div style={{ color: "grey", marginTop: "1vh" }}>
                  /* The open-source Arduino Software (IDE) makes it easy to
                  write code and upload it to the board. This software can be
                  used with any Arduino board. */
                </div>{" "}
                <div style={{ color: "grey", marginTop: "1vh" }}>
                  /*Get the latest version from the download page. You can
                  choose between the Installer (.exe) and the Zip packages. */
                </div>{" "}
              </div>
            ) : (
              <ThreeDModel url={url} />
            )}
          </div>
          <div className="arduino_foot">
            <div className="footcol1"></div>
            <div className="footcol2"></div>
            <div className="footcol3"></div>
          </div>
        </div>
      ) : model == "nodeMCU" ? (
        <div className="full_nodeMCU">
          <div className="nodeMCU_head">NodEMCU</div>
          <div className="nodeMCU_tab">
            <div className="tab_nodeMCUMob">
              <div className="tabMob1_nodeMCU">3D Model</div>
              <div className="tabMob2_nodeMCU">Introduction</div>{" "}
            </div>
          </div>
          <div className="nodeMCU_code">
            {tabSelectednodeMCU == "tab2" ? (
              <div className="text_nodeMCU">
                <div>
                  <span style={{ color: "red" }}>void</span>
                  <span style={{ marginLeft: "2vw", color: "white" }}>
                    NodEMCU()
                  </span>
                </div>
                <div style={{ color: "grey", marginTop: "1vh" }}>
                  /* The Node MCU is an open source firmware and development kit
                  that helps you to prototype your IoT product with ArduinoIDE
                  or in few Lau script lines. It includes firmware which runs on
                  the ESP8266 Wi-Fi SoC. */
                </div>
                <div style={{ marginTop: "2vh" }}>
                  <span style={{ color: "red" }}>void</span>
                  <span style={{ marginLeft: "2vw", color: "white" }}>
                    Arduino IDE()
                  </span>
                </div>
                <div style={{ color: "grey", marginTop: "1vh" }}>
                  /* The open-source Arduino Software (IDE) makes it easy to
                  write code and upload it to the board. This software can be
                  used with any Arduino board. */
                </div>{" "}
              </div>
            ) : (
              <ThreeDModel url={url} />
            )}
          </div>
          <div className="nodeMCU_foot">
            <div className="footcol1_nodeMCU"></div>
            <div className="footcol2_nodeMCU"></div>
            <div className="footcol3_nodeMCU"></div>
          </div>
        </div>
      ) : model == "raspberryPi" ? (
        <div className="full_raspberryPi">
          <div className="raspberryPi_head">Raspberry Pi</div>
          <div className="raspberryPi_tab">
            <div className="tab_raspberryPiMob">
              <div className="tabMob1_raspberryPi">3D Model</div>
              <div className="tabMob2_raspberryPi">Introduction</div>{" "}
            </div>
          </div>
          <div className="raspberryPi_code">
            {tabSelectedraspberryPi == "tab2" ? (
              <div className="text_raspberryPi">
                <div className="numbering__rasp">
                  {" "}
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                </div>
                <div className="info__rasp">
                  <div style={{ color: "grey", marginTop: "0vw" }}>
                    /* The Raspberry Pi is a low cost, credit-card sized
                    computer that plugs into a computer monitor or TV, and uses
                    a standard keyboard and mouse. It is a capable little device
                    that enables people of all ages to explore computing. */
                    <br />
                    /* The Raspberry Pi can open opportunities for you to create
                    your own home automation projects, which is popular among
                    people in the open source community because it puts you in
                    control, rather than using a proprietary closed system. */
                  </div>
                </div>
              </div>
            ) : (
              <ThreeDModel url={url} />
            )}
          </div>
          <div className="raspberryPi_foot">
            <div className="footcol1_raspberryPi"></div>
            <div className="footcol2_raspberryPi"></div>
            <div className="footcol3_raspberryPi"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DescMob;

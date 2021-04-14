import React, { useState, useEffect } from "react";
import "../css/RaspberryDesc.css";
import { IconButton } from "@material-ui/core";
import $ from "jquery";
import Tooltip from "@material-ui/core/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faStop,
  faSave,
  faPlayCircle,
  faSpider,
  faFolderOpen,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
function RaspberryDesc() {
  const [toast, settoast] = useState(null);
  const [tab, settab] = useState("tab1");
  const [width, setwidth] = useState("0");
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowDimensions);

  $(document).ready(function () {
    $(".tabs2_rasp").click(function () {
      settab("tab2");
      $("::-webkit-scrollbar").css(("display": "none"));
    $(".tabs2_rasp").css({ "background-color": "white" });
    $(".tabs1_rasp").css({ "background-color": "#dcdad6" });
    $(".tabs3_rasp").css({ "background-color": "#dcdad6" });
    $(".tabs2_rasp").hover(() => {
      $(".tabs2_rasp").css({ "background-color": "white" });
    });
    $(".tabs1_rasp").hover(
      () => {
        $(".tabs1_rasp").css({ "background-color": "#e6e5eb" });
      },
      function () {
        $(".tabs1_rasp").css({ "background-color": "#dcdad6" }); //to remove property set it to ''
      }
    );
    $(".tabs3_rasp").hover(
      () => {
        $(".tabs3_rasp").css({ "background-color": "#e6e5eb" });
      },
      function () {
        $(".tabs3_rasp").css({ "background-color": "#dcdad6" }); //to remove property set it to ''
      }
    );
  });
  $(".icons_button").click(function () {
    $(".toast1").show();
    setTimeout(function () {
      $(".toast1").hide();
    }, 1000);
  });

  $(".tabs1_rasp").click(() => {
    settab("tab1");
    $("::-webkit-scrollbar-thumb").css(("background": "#000"));
  $(".tabs1_rasp").css({ "background-color": "white" });
  $(".tabs2_rasp").css({ "background-color": "#dcdad6" });
  $(".tabs3_rasp").css({ "background-color": "#dcdad6" });
  $(".tabs1_rasp").hover(() => {
    $(".tabs1_rasp").css({ "background-color": "white" });
  });
  $(".tabs3_rasp").hover(
    () => {
      $(".tabs3_rasp").css({ "background-color": "#e6e5eb" });
    },
    function () {
      $(".tabs3_rasp").css({ "background-color": "#dcdad6" }); //to remove property set it to ''
    }
  );
  $(".tabs2_rasp").hover(
    () => {
      $(".tabs2_rasp").css({ "background-color": "#e6e5eb" });
    },
    function () {
      $(".tabs2_rasp").css({ "background-color": "#dcdad6" }); //to remove property set it to ''
    }
  );
});
$(".tabs3_rasp").click(() => {
  settab("tab3");
  $("::-webkit-scrollbar").css(("display": "none"));
$(".tabs3_rasp").css({ "background-color": "white" });
$(".tabs1_rasp").css({ "background-color": "#dcdad6" });
$(".tabs2_rasp").css({ "background-color": "#dcdad6" });
$(".tabs1_rasp").hover(
  () => {
    $(".tabs1_rasp").css({ "background-color": "#e6e5eb" });
  },
  function () {
    $(".tabs1_rasp").css({ "background-color": "#dcdad6" }); //to remove property set it to ''
  }
);
$(".tabs2_rasp").hover(
  () => {
    $(".tabs2_rasp").css({ "background-color": "#e6e5eb" });
  },
  function () {
    $(".tabs2_rasp").css({ "background-color": "#dcdad6" }); //to remove property set it to ''
  }
);

$(".tabs3_rasp").hover(() => {
  $(".tabs3_rasp").css({ "background-color": "white" });
});
    });
  });
console.log(tab);
return (
  <div className="container_RaspDesc">
    <div className="topbar_rasp">
      <div className="macDots">
        <span class="dot1"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
      </div>
      {/* <div className="topBar_title"></div> */}
        Raspberry Pi | Thonny 3.3.6
      </div>
    <div className="topIcons_Rasp">
      <div className="icons">
        <div className="four">
          {/* <Tooltip title="New"> */}
          <IconButton aria-label="new" onClick={() => settoast("new")}>
            <FontAwesomeIcon
              className="icons_button4"
              icon={faFile}
              color="#00bbbc"
            />
          </IconButton>
          {/* </Tooltip>
            <Tooltip title="Open"> */}
          <IconButton aria-label="open">
            <FontAwesomeIcon
              className="icons_button4"
              color="#f7a005"
              icon={faFolderOpen}
              onClick={() => settoast("open")}
            />
          </IconButton>
          {/* </Tooltip>
            <Tooltip title="Save"> */}
          <IconButton aria-label="save">
            <FontAwesomeIcon
              icon={faSave}
              color="#404fa6"
              className="icons_button4"
              onClick={() => settoast("save")}
            />
          </IconButton>
          {/* </Tooltip>
            <Tooltip title="Run current script"> */}
          <IconButton
            aria-label="Run current script"
            onClick={() => settoast("Run current script")}
          >
            <FontAwesomeIcon
              icon={faPlayCircle}
              className="icons_button4"
              color="#599b8a"
            />
          </IconButton>
          {/* </Tooltip>
            <Tooltip title="Debug current script"> */}
          <IconButton
            aria-label="Debug current script"
            onClick={() => settoast("Debug current script")}
          >
            <FontAwesomeIcon
              icon={faSpider}
              className="icons_button4"
              color="#86b4a9"
            />
          </IconButton>
          {/* </Tooltip>
            <Tooltip title="Disabled"> */}
          <IconButton aria-label="Disabled">
            <img src="icons.png" alt="" />
          </IconButton>
          {/* </Tooltip>
            <Tooltip title="Stop/Restart backend"> */}
          <IconButton
            aria-label="Stop/Restart backend"
            onClick={() => settoast("Stop/Restart backend")}
          >
            {" "}
            <FontAwesomeIcon
              className="icons_button4"
              icon={faStop}
              color="red"
            />{" "}
          </IconButton>
          {/* </Tooltip> */}
        </div>
      </div>
    </div>
    <div className="coding">
      <div className="code_part">
        <div className="tab_section">
          <div className="tabs1_rasp">&lt;Introduction&gt;</div>
          <div className="tabs2_rasp">&lt;Raspberry Pi&gt;</div>
          <div className="tabs3_rasp">&lt;Projects&gt;</div>
        </div>
        <div className="code_section">
          <div className="flex_code">
            <div className="inside_code">
              <div className="grey_part" style={{ paddingBottom: "0.5vw" }}>
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
                {/* {windowDimensions.width < 1500 ? (
                    <>
                      <div>14</div>
                      <div>15</div>
                    </>
                  ) : (
                    ""
                  )}
                  {windowDimensions.width < 1300 ? (
                    <>
                      <div>16</div>
                      <div>17</div>
                    </>
                  ) : (
                    ""
                  )}
                  {windowDimensions.width < 900 ? (
                    <>
                      <div>18</div>
                      <div>19</div>
                    </>
                  ) : (
                    ""
                  )} */}
              </div>

              <div className="white_part" style={{ paddingBottom: "0.5vw" }}>
                {tab == "tab1" ? (
                  <div id="text_rasp">
                    The Raspberry Pi is a low cost, credit-card sized computer
                    that plugs into a computer monitor or TV, and uses a
                    standard keyboard and mouse. It is a capable little device
                    that enables people of all ages to explore computing, and
                    to learn how to program in languages like Scratch and
                    Python.
                    <br />
                    <br />
                      The Raspberry Pi can open opportunities for you to create
                      your own home automation projects, which is popular among
                      people in the open source community because it puts you in
                      control, rather than using a proprietary closed system.
                      Download the editor{" "}
                    <a
                      href="https://github.com/thonny/thonny/releases/download/v3.3.6/thonny-3.3.6.exe"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="alink"
                      style={{
                        color: "#000",
                        textDecoration: "none",
                      }}
                    >
                      here
                      </a>
                  </div>
                ) : tab == "tab2" ? (
                  <div id="text_rasp">
                    Python is a wonderful and powerful programming language
                    that's easy to use (easy to read and write) and, with
                    Raspberry Pi, lets you connect your project to the real
                    world.
                    <br />
                    <br />
                      The easiest introduction to Python is through Thonny, a
                      Python3 development environment. Open Thonny from the
                      Desktop or applications menu: Thonny gives you a REPL
                      (Read-Evaluate-Print-Loop), which is a prompt you can
                      enter Python commands into. Because it's a REPL, you even
                      get the output of commands printed to the screen without
                      using print.
                  </div>
                ) : tab == "tab3" ? (
                  <div id="text_rasp">
                    These Raspberry Pi projects for beginners are great for
                    getting started with the capabilities of any Raspberry Pi
                    model.Don't be put off by the barebones appearance of the
                    Raspberry Pi. The projects you can build can be as complex
                    or simple as you like.
                    <div style={{ color: "grey", marginTop: "27px" }}>
                      <ul className="ul" style={{ listStyleType: "none" }}>
                        <li
                          style={{
                            margin: "1vw 0 1vw 0",
                          }}
                        >
                          <a
                            id="alink"
                            style={{
                              color: "#009b9d",

                              textDecoration: "none",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.makeuseof.com/tag/add-button-raspberry-pi-project/"
                          >
                            Add a Button to a Raspberry Pi
                            </a>
                        </li>{" "}
                        <li
                          style={{
                            margin: "1vw 0 1vw 0",
                          }}
                        >
                          <a
                            id="alink"
                            style={{
                              color: "#009b9d",

                              textDecoration: "none",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.makeuseof.com/tag/raspberry-pi-control-led/"
                          >
                            Control LED Lights With Raspberry Pi
                            </a>
                        </li>{" "}
                        <li
                          style={{
                            margin: "1vw 0 1vw 0",
                          }}
                        >
                          <a
                            id="alink"
                            style={{
                              color: "#009b9d",

                              textDecoration: "none",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href=" https://pimylifeup.com/raspberry-pi-motion-sensor/"
                          >
                            Pi-Powered Motion Sensor and Alarm
                            </a>
                        </li>{" "}
                        <li
                          style={{
                            margin: "1vw 0 1vw 0",
                          }}
                        >
                          <a
                            id="alink"
                            style={{
                              color: "#009b9d",

                              textDecoration: "none",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instructables.com/Simple-and-intuitive-web-interface-for-your-Raspbe/"
                          >
                            A Web Interface for Your Raspberry Pi
                            </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shell_part">
        <div className="tab_section">
          <div className="tabs4_rasp">Shell</div>
        </div>
        <div className="white_shell">
          <div style={{ color: "grey", margin: "0.9vh", fontSize: "20px" }}>
            {" "}
              Python 3.7.9 (bundled)
            </div>
          <div style={{ margin: "0.9vh", fontSize: "20px" }}>
            &gt;&gt;&gt;
              {toast != null ? (
              <span
                style={{
                  marginLeft: "0.9vh",
                  fontSize: "20px",
                  fontFamily: "monospace",
                  userSelect: "none",
                }}
              >
                You have pressed {toast}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default RaspberryDesc;

import React from "react";
import "./style.css";
import { IoIosAdd } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function DateSheet() {
  return (
    <div id="datesheet-con">
      <div id="datesheet-up">
        <h1>DateSheet</h1>
        <div>
          <IoFilterOutline id="filter" />
          <button className="button">
            <IoIosAdd />
            Add note
          </button>
        </div>
      </div>
      <div id="date-outer">
        <h1>
          13 May 2024 <FaRegArrowAltCircleLeft className="arrows" />
          <FaRegArrowAltCircleRight className="arrows" />
        </h1>
        <div id="date-inner">
          <div className="date-left">
            <div className="left-box">
              <h2>Classes</h2>
            </div>
            <div className="left-box">
              <input type="checkbox" />
              <h3>
                9th<br></br>
                <span>Section: A</span>
              </h3>
            </div>
            <div className="left-box">
              <input type="checkbox" />
              <h3>
                5th<br></br>
                <span>Section: B</span>
              </h3>
            </div>
            <div className="left-box">
              <input type="checkbox" />
              <h3>
                6th<br></br>
                <span>Section: C</span>
              </h3>
            </div>
            <div className="left-box">
              <input type="checkbox" />
              <h3>
                4th<br></br>
                <span>Section: D</span>
              </h3>
            </div>
            <div className="left-box">
              <input type="checkbox" />
              <h3>
                8th<br></br>
                <span>Section: E</span>
              </h3>
            </div>
          </div>
          <div className="date-right">
            <div id="right-up">
              <button className="date-btn">
                2 <p>Thu</p>
              </button>
              <button className="date-btn">
                3 <p>Fri</p>
              </button>
              <button className="date-btn">
                4 <p>Sat</p>
              </button>
              <button className="date-btn">
                5 <p>Sun</p>
              </button>
              <button className="date-btn">
                6 <p>Mon</p>
              </button>
              <button className="date-btn">
                7 <p>Tue</p>
              </button>
              <button className="date-btn">
                8 <p>Wed</p>
              </button>
              <button className="date-btn">
                9 <p>Thu</p>
              </button>
              <button className="date-btn">
                10 <p>Fri</p>
              </button>
              <button className="date-btn">
                11 <p>Sat</p>
              </button>
              <button className="date-btn">
                12 <p>Sun</p>
              </button>
              <button className="date-btn">
                13 <p>Mon</p>
              </button>
              <button className="date-btn">
                14 <p>Tue</p>
              </button>
              <button className="date-btn">
                15 <p>Wed</p>
              </button>
              <button className="date-btn">
                16 <p>Thu</p>
              </button>
            </div>
            <div id="right-bl">
              <div id="right-time">
                <button className="date-btn">07:00 AM</button>
                <button className="date-btn">08:00 AM</button>
                <button className="date-btn">09:00 AM</button>
                <button className="date-btn">10:00 AM</button>
                <button className="date-btn">11:00 AM</button>
                <button className="date-btn">12:00 PM</button>
                <button className="date-btn">01:00 PM</button>
                <button className="date-btn">02:00 PM</button>
                <button className="date-btn">03:00 PM</button>
                <button className="date-btn">04:00 PM</button>
                <button className="date-btn">05:00 PM</button>
                <button className="date-btn">06:00 PM</button>
              </div>
              <div id="periods">
                <div className="lecture-rows">
                  <div className="lecture lecture-pink">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                  <div className="lecture lecture-purple">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                </div>
                <div className="lecture-rows">
                  <div className="lecture lecture-pink">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                </div>
                <div className="lecture-rows">
                  <div className="lecture lecture-pink">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                  <div className="lecture lecture-red">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                </div>
                <div className="lecture-rows"></div>
                <div className="lecture-rows">
                  <div className="lecture lecture-red">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                </div>
                <div className="lecture-rows"></div>
                <div className="lecture-rows">
                  <div className="lecture lecture-blue">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                  <div className="lecture lecture-pink">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                </div>
                <div className="lecture-rows"></div>
                <div className="lecture-rows"></div>
                <div className="lecture-rows">
                  <div className="lecture lecture-purple">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                  <div className="lecture lecture-pink">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                </div>
                <div className="lecture-rows"></div>
                <div className="lecture-rows">
                  <div className="lecture lecture-pink">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                  <div className="lecture lecture-blue">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                  <div className="lecture lecture-purple">
                    <h4>English</h4>
                    <h4>Room:01</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateSheet;

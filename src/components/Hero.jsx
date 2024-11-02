import React from "react";
import "./style.css";
import { Menu } from "./Menu";
import { FaUsers } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
function Hero() {
  return (
    <div id="hero-con">
    
      <div className="box" id="students">
        <div className="inner-box">
          <div>
            <FaUsers id="user" className="iconss" />
            <h3>
              <span>Total Students</span>
              <br></br>
              12,098
            </h3>
          </div>

          <FaArrowRight style={{ color: "yellow", fontSize: "2rem" }} />
        </div>
        <h4>Statuses</h4>
        <div className="flex-box">
          <div>
            <h3>
              <span>Struck off</span>
              <br></br>
              98
            </h3>
          </div>
          <div className="mid">
            <h3>
              <span>Suspended</span>
              <br></br>
              18
            </h3>
          </div>
          <div>
            <h3>
              <span>Pending</span>
              <br></br>8
            </h3>
          </div>
        </div>
        <h4>Attendance</h4>
        <div className="flex-box">
          <div>
            <h3>
              <span>Struck off</span>
              <br></br>
              98
            </h3>
          </div>
          <div className="mid">
            <h3>
              <span>Suspended</span>
              <br></br>
              18
            </h3>
          </div>
          <div>
            <h3>
              <span>Pending</span>
              <br></br>8
            </h3>
          </div>
        </div>
      </div>
      <div className="box" id="perc">
      <div className="inner-box box">
          <div>
            <IoDocumentTextOutline
              className="iconss"
              style={{ color: "grren", background: "lightgreen" }}
            />
            <h3>
              <span>Total Teachers</span><br></br>
              30
            </h3>
          </div>

          <FaArrowRight style={{ color: "green", fontSize: "2rem" }} />
        </div>
        <p>10th</p>
        <progress className='green' value="80" max="100"></progress>80%
        <p>9th</p>
        <progress className='green' value="80" max="100"></progress>80%
        <p>8th</p>
        <progress className='green' value="80" max="100"></progress>80%
        <p>7th</p>
        <progress className='yellow' value="40" max="100"></progress>40%
        <p>6th</p>
        <progress className='yellow' value="40" max="100"></progress>40%
        <p>5th</p>
        <progress className='yellow' value="40" max="100"></progress>20%
        <p>4th</p>
        <progress className='yellow' value="70" max="100"></progress>70%
        <p>3rd</p>
        <progress className='yellow' value="50" max="100"></progress>50%
        <p>2nd</p>
        <progress className='red' value="30" max="100"></progress>30%
        <p>1st</p>
        <progress className='red' value="80" max="100"></progress>10%
      </div>
      <div className="box" id="accounts">
        <div className="inner-box">
          <div>
            <IoDocumentTextOutline
              className="iconss"
              style={{ color: "blue", background: "skyblue" }}
            />
            <h3>
              <span>Accounts (Total fee)</span><br></br>
              Rs 123,098/
            </h3>
          </div>

          <FaArrowRight style={{ color: "skyblue", fontSize: "2rem" }} />
        </div>
        <p>Received Amount</p>
        <progress className='yellow' value="70" max="100">234</progress>Rs 20278
        <p>Pending Amount</p>
        <progress value="29" max="100"></progress>Rs 5765
      </div>
      <div id="total">
        <div className="inner-box box">
          <div>
            <FaUsers
              className="iconss"
              style={{ color: "grren", background: "lightgreen" }}
            />
            <h3>
              <span>Total Teachers</span><br></br>
              30
            </h3>
          </div>

          <FaArrowRight style={{ color: "green", fontSize: "2rem" }} />
        </div>
        <div className="inner-box box">
          <div>

            <FaFlag
              className="iconss"
              style={{ color: "red", background: "tomato" }}
            />
            <h3>
              <span>Upcomming Events</span><br></br>
              123
            </h3>
          </div>

          <FaArrowRight style={{ color: "red", fontSize: "2rem" }} />
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React, { useState } from 'react';
import './style.css';
import { MdMenu } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { GrDocumentStore } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { FaCar } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { Link } from 'react-router-dom';

export const Menu = ({isOpen}) => {
    const [hover, setHover] = useState(false);

    function toggle() {
        setHover(!hover);
    }
  console.log(isOpen)
    return (
        <div id='menu-con' style={{left:isOpen?"0%":"-120%"}} >
            <ul> 
           
                <Link to=''><li><FaChartPie /> Dashboard</li></Link>
                <li><FaUserGroup /> Admin</li>
                <li><FaUserGroup /> Admission</li>
                <li><FaListCheck /> Academics</li>
                <li onClick={toggle}><GrDocumentStore /> Exam Department</li>
                
                
                <div id='exam-li' style={{ display: hover ? "block" : "none" }}>
                    <p>Results</p>
                    <p>Sitting Arrangements</p>
                    <Link to='datesheet'> <p>Date Sheet</p></Link>
                   
                    <p>Exam Attendance</p>
                </div>
               
                <li><FaRegQuestionCircle /> Account Office</li>
                <li><GrAnnounce /> Hostel Management</li>
                <li><FaCar /> Transport Management</li>
                <li><GoGraph /> Reports</li>
            </ul>
        </div>
    );
};

import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="container_2">
          <img 
            src={logo}
            width="200"
            height="55"
            alt="logo" />
          <div className="language">
            <p>
              Language:{" "}
              <span>
                English <IoIosArrowDown />
              </span>
              <span>
                <BsFillGearFill />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
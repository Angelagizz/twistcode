import React from "react";
import "./Contact.css";

function Contacts() {
  return (
    <div className="container-contact">
      <h2>Contacts</h2>
      <div className="contact-list">
        <div className="email">
          <h3>
            Email <span>*</span>
          </h3>
          <input placeholder="Email"></input>
        </div>
        <div className="time">
          <div className="date">
            <h3>
              Date <span>*</span>
            </h3>
            <input placeholder="DD"></input>
          </div>
          <div className="month">
            <h3>
              Month <span>*</span>
            </h3>
            <input placeholder="MM"></input>
          </div>
          <div className="year">
            <h3>
              Year <span>*</span>
            </h3>
            <input placeholder="YY"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
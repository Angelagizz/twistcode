import React, { useState, useEffect } from "react";
import { getCountry } from "../../../services/Service";
import "./Address.css";
import { IoIosArrowDown } from "react-icons/io";

function Address() {
  const [country, setCountry] = useState([]);
  const [box, setbox] = useState(false);
  console.log("boxname", box);

  useEffect(() => {
    getCountry()
      .then((response) => {
        console.log(response.data);
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(country, "country");
  return (
    <div className="container">
      <h2>Address</h2>
      <div className="address">
        <h3>Address</h3>
        <input placeholder="Address"></input>
      </div>
      <div className="location">
        <div className="country">
          <h3>Country/Location</h3>
          <select>
            {country.map((item) => (
                <>
                    <option>{item.name}</option>
                </>
            ))}
          </select>
        </div>
        <div className="province">
          <h3>Province/Disctrict </h3>
          <select>
            {country.map((item) => (
                <>
                    <option>{item.capital}</option>
                </>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Address;
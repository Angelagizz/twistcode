import React, {useState, useEffect} from "react";
import "./NameDetail.css";
import {getCountry} from "../../../services/Service";
import { IoIosArrowDown } from "react-icons/io";

function NameDetail() {
    const [tnc, setTnc] = useState(false)
    const [country, setCountry] = useState([])

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

    function handleData(e) {
        e.preventDefault()
    }

    return (
        <div className="detail">
            <div className="message">You don't have an account yet, please create a new account</div>
            <div className="detail_list">
                <div className="checkbox">
                    <h6>Create new account</h6>
                    <form onSubmit={handleData}>
                        <div className="subtitle">Title</div>
                        <div className="title">
                            <input type="checkbox"></input><span>Mrs</span>
                            <input type="checkbox"></input><span>Ms</span>
                            <input type="checkbox"></input><span>Mdm</span>
                            <input type="checkbox"></input><span>Mr</span>
                            <input type="checkbox"></input><span>Dr</span>
                        </div>
                    </form>
                    <div className="user">
                        <div className="lastname">
                            <p>Last name <span>*</span>
                            </p>
                            <input placeholder="Last name"></input>
                        </div>
                        <div className="firstname">
                            <p>First name <span>*</span>
                            </p>
                            <input placeholder="First name"></input>
                        </div>
                    </div>
                    <div className="number">
                        <p>Mobile phone number <span>*</span></p>
                        <div className="number_content">
                            <div className="flag">
                                <button
                                    onClick={() => {setTnc(!tnc)}}>Select Country <IoIosArrowDown />
                                </button>
                                {tnc && (
                                <div className="box">
                                {country.map((item) => (
                                    <div>
                                        <img src={item.flag}  width="50" height="30" alt="" />
                                    </div>
                                ))}
                            </div>
                                )}
                            </div>
                            
                            <div className="phone">
                                <input
                                    type="tel"
                                    name="phone"
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    placeholder="Phone number"
                                ></input>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NameDetail;
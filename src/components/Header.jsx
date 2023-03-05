import React from 'react';
import "./Header.css";
import arrow from "../images/icon-arrow.svg"

const Header = () => {
  return (
    <div className="header">
        <article className="container">
            <div className="top">
                <h1>IP address tracker</h1>

                <form className="ip">
                    <input 
                    type="text" 
                    className="search"
                    placeholder="search for any ip address" />

                    <button type="submit" className="arrow">
                        <img src={arrow} alt="" />
                    </button>
                </form>
            </div>

            <div className="card">
                <form className="info">
                    <label htmlFor="ip_address" className="address">ip address</label>
                    <input type="text" id="ip_address" />

                    <label htmlFor="location" className="address">location</label>
                    <input type="text" id="location" />

                    <label htmlFor="timezone" className="timezone">timezone</label>
                    <input type="text" id="timezone" />

                    <label htmlFor="isp" className="isp">isp</label>
                    <input type="text" id="isp" />
                </form>
            </div>
        </article>
    </div>
  )
}

export default Header
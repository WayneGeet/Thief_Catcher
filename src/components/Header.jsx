import React, {useContext, useState} from 'react';
import "./Header.css";
import arrow from "../images/icon-arrow.svg";
import {IpContext} from "../Context";


const Header = ({data}) => {
    const [ip, setIp] = useContext(IpContext);
    const [info, setInfo] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault();
        const pattern = /^([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])$/;
        if(pattern.exec(info)){
            setIp(()=>info)
        }
        else{
            window.alert("Wrong IP format!")
        }
    }

  return (
    <div className="header">
        <article className="container">
            <div className="top">
                <h1>IP address tracker</h1>

                <form className="ip">
                    <input 
                    type="text" 
                    className="search"
                    placeholder="search for any ip address"
                    onChange={(event)=>{
                        setInfo(event.target.value)
                    }}
                     />
   
                    <button
                     type="submit"
                      className="arrow"
                      onClick={handleSubmit}>
                        <img src={arrow} alt="" />
                    </button>
                </form>
            </div>

            <div className="card">
                <form className="info">
                    <div className="group">
                        <label htmlFor="ip_address" className="input address">ip address</label>
                        <input type="text" id="ip_address" value={data.ip} readOnly />
                    </div>
                    <div className="group">
                        <label htmlFor="location" className="input location">location</label>
                        <input type="text" id="location" value={data.location.city} readOnly />
                    </div>
                    <div className="group">
                        <label htmlFor="timezone" className="input timezone">timezone</label>
                        <input type="text" id="timezone" value={data.location.timezone} readOnly />
                    </div>
                    <div className="group">
                        <label htmlFor="isp" className="input isp">isp</label>
                        <input type="text" id="isp" value={data.isp} readOnly />
                    </div>
                </form>
            </div>
        </article>
    </div>
  )
}

export default Header
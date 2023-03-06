import React, {useRef, useEffect, useContext} from 'react';
import Map from "react-map-gl";
import {IpContext} from "../Context";

const Locate = () => {
  const [ip] = useContext(IpContext);
  

  useEffect(()=>{
    getData()
  },[])

  async function getData(){
    const apiCall = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_GEO_API}&ipAddress=${ip}`);
    const response = await apiCall.json();
    console.log(response)
  }
  const mapRef = useRef()

  return (
    <Map
    ref = {mapRef}
    initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{maxWidth: "375px",
       height:"100%",
      position:"absolute",
      top:"18.2rem",
      zIndex:1}}
      mapStyle="mapbox://styles/wayne-geet/cld0c6fb2003314qm2coqihkl"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX }
      onClick={getData}
            />
  )
}

export default Locate;
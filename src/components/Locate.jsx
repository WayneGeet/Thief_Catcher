import React, {useRef, useEffect, useState} from 'react';
import Map from "react-map-gl";

const Locate = () => {
  useEffect(()=>{
    getData()
  },[])

  async function getData(){
    const apiCall = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_7zfwFIp38aznWpHOJxFzu4vhYRLxj&ipAddress=8.8.8.8`);
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
            />
  )
}

export default Locate;
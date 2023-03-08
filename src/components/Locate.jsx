import React, {useRef, useEffect, useContext, useState} from 'react';
import Map, {Marker} from "react-map-gl";
import {IpContext} from "../Context";
import Header from "./Header";
import "./Locate.css"
import loader from "../images/rings.gif"

const Locate = () => {
  const [ip] = useContext(IpContext);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getData()
  },[ip])

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 15
  }
  )

  async function getData(){
    setLoading(true)
    const apiCall = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.REACT_APP_GEO_API}&ipAddress=${ip}`);
    const response = await apiCall.json();
    setData(response)
    setViewport((prevViewport) =>({
      ...prevViewport,
      latitude:response.location.lat,
      longitude:response.location.lng,
      zoom:15}
    ))
    setLoading(false)
  }
  const mapRef = useRef()

  const handleMove = (newvp)=>{
    setViewport(newvp)
  }

  return (
    <div>
      {data.location && (<Header data={data}/>)}

      {loading && (
      <article className="loader">
        <img className="gif" src={loader} alt="loading"/>
        </article>)}
      <div className="map-container">
        <Map
        initialViewState={{zoom:10}}
        ref = {mapRef}
        {...viewport}
          onViewportChange={(nextViewport)=>setViewport(nextViewport)}
          onMove={handleMove}
          style={{
          width: "100%",
          height:"100%",
          position:"absolute",
          top:"18.2rem",
          zIndex:1}}
          mapStyle="mapbox://styles/wayne-geet/cld0c6fb2003314qm2coqihkl"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX }
          // onLoad={()=>{
          //   flyer(data.location.lat, data.location.lon)
          // }}
                >
                  {data.location && (<Marker
                  longitude={data.location.lng}
                  latitude={data.location.lat}
                  />
                  )}
                  
        </Map>
      </div>
    </div>

  )
}

export default Locate;
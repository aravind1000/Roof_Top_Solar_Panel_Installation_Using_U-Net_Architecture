import React, { useState, useRef, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
import "./RoofTopImage.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faMap } from "@fortawesome/free-solid-svg-icons";
const RoofTopImage = () => {
  
  const mapRef = useRef(null);
  const history = useNavigate();
  
  const [mapCenter, setMapCenter] = useState({
    lat: 11.040622,
    lng: 76.94885599999999,
  });
  const [lat, setLat] = useState(mapCenter.lat);
  const [long, setLong] = useState(mapCenter.lng);
  const [markerPosition, setMarkerPosition] = useState(mapCenter);
  const [address, setAddress] = useState("");
  
  const handleClick = () => {
    history(`/result?lat=${lat}&lon=${long}`);
  };
  // ===================================================================
 

  useEffect(() => {
    const loadGoogleMapsAPI = async () => {
      try {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD2kW81GJKoxjZc9eoeTT11Fyv4OI8y9jE&libraries=places`;
        script.async = true;
        script.onload = initMap;
        document.body.appendChild(script);
      } catch (error) {
        console.error("Error loading Google Maps API:", error);
      }
    };
    console.log(mapCenter.lat + " " + mapCenter.lng);
    const initMap = () => {
      try {
        const autocompleteRef = new window.google.maps.places.Autocomplete(
          document.getElementById("autocompleteInput")
        );

        autocompleteRef.setFields(["formatted_address", "geometry"]);
        autocompleteRef.addListener("place_changed", () => {
          const place = autocompleteRef.getPlace();
          setAddress(place.formatted_address);
          setMapCenter(place.geometry.location.toJSON());
          setMarkerPosition(place.geometry.location.toJSON());
          setLat(place.geometry.location.lat());
          setLong(place.geometry.location.lng());
          setMapCenter({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          });
        });

        const mapOptions = {
          center: mapCenter,
          zoom: 14,
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);

        const marker = new window.google.maps.Marker({
          position: mapCenter,
          map: map,
          draggable: true,
        });

        marker.addListener("dragend", () => {
          const newPosition = marker.getPosition();
          // console.log(newPosition);
          setMarkerPosition(newPosition.toJSON());
          setLat(newPosition.lat());
          setLong(newPosition.lng());
          // console.log(lat);
          
          setMapCenter({
            lat: newPosition.lat(),
            lng: newPosition.lng()
          });
          
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ location: newPosition }, (results, status) => {
            if (status === "OK") {
              if (results[0]) {
                setAddress(results[0].formatted_address);
              }
            }
          });
        });
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    loadGoogleMapsAPI();
    // handleSubmit();
  }, [mapCenter, lat, long]);

  return (
    <div>
      <Navbar className="Navbar" />
      <section className="RoofTop">
        <div className="centered-search">
          <h1>RoofTop Solar Panel Installation</h1>
          <div className="form-group">
            <input
                type="text"
                id="autocompleteInput"
                placeholder="Enter a location"
                className="form-control"
            /> 
          </div>
          </div>
          <div
            id="map"
            ref={mapRef}
          ></div>
        <div id="place-image"></div>

        <button className='click-btn' onClick={handleClick}>Submit</button>
      </section>
    </div>
  );
};

export default RoofTopImage;


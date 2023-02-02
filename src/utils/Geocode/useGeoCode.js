import React, { useState } from "react";
import Geocode from "react-geocode";

const useGeoCode = (lat, lng) => {
  const [address, setAddress] = useState("");
  Geocode.setApiKey("AIzaSyBTgKas46Hnbj-hvCCVTU_PrdHxJ0Lyc7Q");
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");

  
  Geocode.fromLatLng(lat, lng).then(
    (response) => {
      setAddress(response.results[0].formatted_address);
    },
    (error) => {
      console.error(error);
    }
  );
  return address;
};

export default useGeoCode;

import React from 'react';
import {GoogleMap, useLoadScript} from '@react-google-maps/api'

const GoogleMaps = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY})

    if (!isLoaded) return "loading"
    return (
        <div>
            <GoogleMap/>
        </div>
    );
};

export default GoogleMaps;
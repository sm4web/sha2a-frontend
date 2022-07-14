import React, {useEffect, useState} from 'react';
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api'
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover} from '@reach/combobox'

import './style.scss'
import '@reach/combobox/styles.css'

const libraries = ['places']

const GoogleMaps = () => {

        const {isLoaded, loadError} = useLoadScript({
            googleMapsApiKey: "AIzaSyBTgKas46Hnbj-hvCCVTU_PrdHxJ0Lyc7Q",
            libraries: libraries
        })

        const [location, setLocation] = useState({lng: 0, lat: 0})

        useEffect(() => {
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(function (position) {
                    setLocation({lat: position.coords.latitude, lng: position.coords.longitude})
                });
            }
        }, [])


        if (loadError) {
            return <div>Map cannot be loaded right now, sorry.</div>
        }

        return isLoaded ?
            <div style={{width: "100%"}}>
                <PlacesAutoComplete setLocation={setLocation}/>
                <GoogleMap zoom={15} center={location}
                           mapContainerClassName={'map-container'}>
                    <Marker
                        draggable
                        onDragEnd={(pos) => {
                            setLocation({lat: pos.latLng.lat(), lng: pos.latLng.lng()})
                        }}
                        position={location}
                    />

                </GoogleMap>
            </div>
            :
            "loading"
    }
;

const PlacesAutoComplete = ({setLocation}) => {
    const {ready, value, setValue, suggestions: {status, data}, clearSuggestions} = usePlacesAutocomplete()

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
        const results = await getGeocode({address});
        const {lat, lng} = await getLatLng(results[0]);
        setLocation({lat, lng});
    }

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput disabled={!ready} value={value} onChange={e => setValue(e.target.value)}
                           className={"combobox-input"}
                           style={{border: "none"}}
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === 'OK' && data.map(({place_id, description}) => (
                        <ComboboxOption style={{fontSize: "16px"}} key={place_id} value={description}/>
                    ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}
export default GoogleMaps;
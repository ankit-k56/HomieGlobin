"use client"
import { useState,useEffect } from 'react'
import React from 'react'
import Getloaction from './Getloaction'
import { GoogleMap,useLoadScript,Marker, Autocomplete } from '@react-google-maps/api'

const Map = () => {
    const {isLoaded}=useLoadScript({
        googleMapsApiKey:"",
        libraries:['places']
      })

        const [loactionCords, setLocation] = useState<any>({lat:'',lng:''})
        const onSuccess = (location:any)=>{
            setLocation({ lat: location.coords.latitude, lng: location.coords.longitude })
            // console.log(loaction)
            
    
        }
        const onError = ()=>{
            setLocation({err:"There was some error" })
    
        }
        useEffect(()=>{
            navigator.geolocation.getCurrentPosition(onSuccess, onError)
    
    
        },[])
        // console.log()
    //   const loaction = Geolocation()

    if(!isLoaded) return <div>Loading...</div>
    return (
        <div className='w-[50%]'>
            <GoogleMap zoom={15} center={loactionCords} mapContainerClassName='map-container'>
            <Marker position={loactionCords}/>
            </GoogleMap>
        </div>
    )
}

export default Map

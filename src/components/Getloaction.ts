import React, { useEffect, useState } from 'react'
// interface Loaction{
//     err:string | null;
//     lat: string |any,
//     long: string |any
// }

const Getloaction = () => {
    const [loaction, setLocation] = useState<any>({err:null,lat:'',long:''})
    const onSuccess = (loaction:any)=>{
        setLocation({ lat: loaction.coords.latitude})

    }
    const onError = ()=>{
        setLocation({err:"There was some error" })

    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(onSuccess, onError)


    },[])


  return loaction

}

export default Getloaction

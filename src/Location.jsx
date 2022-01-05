import React from "react";
const Location=()=>{
    navigator.geolocation.getCurrentPosition(
        results=>{
            console.log("latitude is"+results.coords.latitude)
            console.log("longitude is"+results.coords.longitude)
        },
        error=>{
            console.log(error.code)
        }
    )
    return(
        <>

        </>
    )
}
export default Location
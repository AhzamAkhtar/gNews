import React,{useEffect} from "react";
const Nyt=()=>{
    useEffect(()=>{
        const ftechApi=async()=>{
            const url="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
            const response=await fetch(url)
            const resJson=await response.json()
            console.log(resJson.results[1].title)
            console.log(resJson)
               
        }
        ftechApi()
    })
    return(
        <>
            <h1>hello</h1>
            <h2>edited</h2>
            <h6>news</h6>
        </>
    )
}
export default Nyt
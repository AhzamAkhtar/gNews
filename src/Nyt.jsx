import React,{useEffect} from "react";
const Nyt=()=>{
    useEffect(()=>{
        const ftechApi=async()=>{
            const url="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
            //const url="https://gnews.io/api/v4/search?q=top-headlines&token=a3bd46c42dd12ae35906909a6c7b3556"
            //const url=`https://gnews.io/api/v4/top-headlines?token=a3bd46c42dd12ae35906909a6c7b3556&country=in&lang=en&q="breaking-news"`
            const response=await fetch(url)
            const resJson=await response.json()
            console.log(resJson)
               
        }
        ftechApi()
    })
    return(
        <>
            <h1>hello</h1>
            <h2>edited</h2>
            <h6>news night let go with gnews</h6>
        </>
    )
}
export default Nyt
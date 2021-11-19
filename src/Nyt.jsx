import React,{useEffect} from "react";
const Nyt=()=>{
    useEffect(()=>{
        const ftechApi=async()=>{
            const url="https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
            const response=await fetch(url)
            const resJson=await response.json()
            console.log(resJson.results[1].book_author)    
        }
        ftechApi()
    })
    return(
        <>
            <h1>hello</h1>
        </>
    )
}
export default Nyt
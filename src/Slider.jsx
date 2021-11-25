import { ListItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
const Slider = () => {
    const [article, setarticle] = useState([])
    useEffect(() => {
        const gnewsapi = async () => {

            //const url = `https://gnews.io/api/v4/search?q=example&token=a3bd46c42dd12ae35906909a6c7b3556&q=${queary}`;
            const url = `https://gnews.io/api/v4/top-headlines?&token=bd0121d32fcc64c4fa5383f27fa4b35d
            &country=in&lang=en}`;

            //const url="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.articles)
            { setarticle(resJson.articles) }
        }
        gnewsapi();
    }, []);
    return (
        <>
        <h1 style={{color:"white",fontFamily:"Oswald, sans-serif;",marginLeft:"5px"}}>TOP-HEADLIES IN INDIA</h1>
                {article.map((item, index) => {
                    return (
                        <>
                            <div className="card my-2" style={{backgroundColor:"black",borderRadius:"8px"}} onClick={()=>window.open(item.url)}>
                                <div class="my-4">
                                    <img src={item.image} class="card-img-top" alt="image" />
                                    <div class="card-body">
                                        <h5 style={{color:"white",fontFamily:"font-family: 'Oswald', sans-serif;",fontSize:28}} class="card-title">{item.title}</h5>
                                        <p style={{color:"white",fontFamily:"font-family: 'Oswald', sans-serif;"}} class="card-text">{item.description}</p>
                                    </div>
                                    <p style={{color:"white",marginLeft:"8px"}}>Source: {item.source.name}</p>
                                    <p style={{color:"white",marginLeft:"8px"}}>{item.publishedAt}</p>
                                </div>
                            </div>
                        </>
                    )
                })}
        </>
    )
}
export default Slider
import { ListItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
const Slider = () => {
    const [article, setarticle] = useState([])
    const [country, setcountry] = useState("in")
    const [name, setname] = useState("INDIA")
    useEffect(() => {
        const gnewsapi = async () => {
            //const url = `https://gnews.io/api/v4/search?q=example&token=a3bd46c42dd12ae35906909a6c7b3556&q=${queary}`;
            const url = `https://gnews.io/api/v4/top-headlines?&token=07f62a37353c75a45455b4e5a71f8064
            &country=${country}&lang=en}`;
            //const url="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.articles)
            { setarticle(resJson.articles) }
        }
        gnewsapi();
    }, [country]);
    const us = (e) => {
        setcountry("us")
        setname("U.S")
        e.preventDefault()
    }
    const au = (e) => {
        setcountry("au")
        setname("AUSRALIA")
        e.preventDefault()
    }
    const ca = (e) => {
        setcountry("ca")
        setname("CANADA")
        e.preventDefault()
    }
    const gb = (e) => {
        setcountry("gb")
        setname("U.K")
        e.preventDefault()
    }
    const pk = (e) => {
        setcountry("pk")
        setname("PAKISTAN")
        e.preventDefault()
    }
    const ind=(e)=>{
        setcountry("in")
        e.preventDefault()
        setname("INDIA")
    }

    return (
        <>
            <h1 style={{ color: "white", fontFamily: "Oswald, sans-serif;", marginLeft: "5px" }}>TOP-HEADLIES IN {name.toUpperCase()}</h1>
            <div class="btn-group">
                <button type="button" class="btn btn-secondary mx-2 my-2">{name}</button>
                <button type="button" class="btn btn-secondary  dropdown-toggle dropdown-toggle-split my-2" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a onClick={us} class="dropdown-item">U.S</a></li>
                    <li><a onClick={au} class="dropdown-item">AUSTRALIA</a></li>
                    <li><a onClick={ca} class="dropdown-item">CANADA</a></li>
                    <li><a onClick={gb} class="dropdown-item">U.K</a></li>
                    <li onClick={pk}><a class="dropdown-item">PAKISTAN</a></li>
                    <li onClick={ind}><a class="dropdown-item">INDIA</a></li>
                </ul>
            </div>
            <p style={{ color: "white", marginLeft: "5px",marginLeft:"5px",color:"skyblue"}}>SELECTED COUNTRY : {name.toUpperCase()}</p>
            {article.map((item, index) => {
                return (
                    <>
                        <div className="card my-2" style={{ backgroundColor: "black", borderRadius: "8px" }} onClick={() => window.open(item.url)}>
                            <div class="my-4">
                                <img src={item.image} class="card-img-top" alt="image" style={{borderRadius:"3px"}} />
                                <div class="card-body">
                                    <h5 style={{ color: "white", fontFamily: "font-family: 'Oswald', sans-serif;", fontSize: 28 }} class="card-title">{item.title}</h5>
                                    <p style={{ color: "white", fontFamily: "font-family: 'Oswald', sans-serif;" }} class="card-text">{item.description}</p>
                                </div>
                                <p style={{ color: "white", marginLeft: "8px",color:"skyblue"}}>Source: {item.source.name}</p>
                                <p style={{ color: "white", marginLeft: "8px",color:"skyblue"}}>{item.publishedAt}</p>
                                <hr style={{ backgroundColor: "white" }} />
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}
export default Slider
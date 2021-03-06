import { ListItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Spinner  from './Spinner';
const Newslider = () => {
    const [spin,setspin]=useState(false)
    const [city, setcity] = useState("null")
    const [queary, setqueary] = useState("")
    const [fullqueary, setfullqueary] = useState("nation")
    const [article, setarticle] = useState([])
    const [country, setcountry] = useState("in")
    const [name, setname] = useState("INDIA")
    const [lang, setlang] = useState("en")
    useEffect(() => {
        const gnewsapi = async () => {
            //const url = `https://gnews.io/api/v4/search?q=example&token=a3bd46c42dd12ae35906909a6c7b3556&q=${queary}`;
            setspin(true)
            const url = `https://gnews.io/api/v4/search?q=${fullqueary}&token=0f183a18388cbfd80c2def15a25fbfee


            &country=${country}&lang=${lang}}`;
            //const url="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
            const response = await fetch(url);
            const resJson = await response.json();
            setspin(false)
            console.log(resJson.articles)
            { setarticle(resJson.articles) }
        }
        gnewsapi();
    }, [country, fullqueary])
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
    const ind = (e) => {
        setcountry("in")
        e.preventDefault()
        setname("INDIA")
    }
    const fr = (e) => {
        setcountry("fr")
        e.preventDefault()
        setname("FRA")
        setlang("fr")

    }
    const ru = (e) => {
        setcountry("ru")
        e.preventDefault()
        setname("RUS")
        setlang("ru")

    }
    const no = (e) => {
        setcountry("no")
        e.preventDefault()
        setname("NORWAY")
        setlang("no")

    }
    const ie = (e) => {
        setcountry("ie")
        e.preventDefault()
        setname("IRE")
        setlang("ie")

    }
    const it = (e) => {
        setcountry("it")
        e.preventDefault()
        setname("ITALY")
        setlang("it")

    }
    const se = (e) => {
        setcountry("se")
        e.preventDefault()
        setname("SWE")
        setlang("se")
    }
    const inputEvent = (event) => {
        setqueary(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        setfullqueary(queary)
    }
    return (
        <>
            <h1 style={{ color: "white", fontFamily: "Oswald, sans-serif;", marginLeft: "5px" }}>SEARCH ANY ARTICLE</h1>
            {/*<input type="text" placeholder='Enter' onChange={inputEvent}/>*/}
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Search'onChange={inputEvent}/>
            </div>
            <button style={{width:"50%",alignItems:"center",justifyContent:"center"}} type="button" class="btn btn-warning" onClick={onSubmit}>Search <i style={{color:"black"}} class="fas fa-search"></i></button>
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
                    <li onClick={fr}><a class="dropdown-item">FRANCE</a></li>
                    <li onClick={no}><a class="dropdown-item">NORWAY</a></li>
                    <li onClick={ie}><a class="dropdown-item">IRELAND</a></li>
                    <li onClick={it}><a class="dropdown-item">ITALY</a></li>
                    <li onClick={se}><a class="dropdown-item">SWEDEN</a></li>
                    <li onClick={ru}><a class="dropdown-item">RUSSIA</a></li>
                </ul>
            </div>
            <p style={{ color: "white", marginLeft: "5px", marginLeft: "5px", color: "skyblue" }}>SELECTED COUNTRY : {name.toUpperCase()}</p>
            <div>
            {spin ? (
                <Spinner/>
            ):(
                <>
                {article.map((item, index) => {
                return (
                    <>
                        <div className="card my-2" style={{ backgroundColor: "black", borderRadius: "8px" }} onClick={() => window.open(item.url)}>
                            <div class="my-4">
                                <img src={item.image} class="card-img-top" alt="image" style={{ borderRadius: "3px" }} />
                                <div class="card-body">
                                    <h5 style={{ color: "white", fontFamily: "font-family: 'Oswald', sans-serif;", fontSize: 28 }} class="card-title">{item.title}</h5>
                                    <p style={{ color: "white", fontFamily: "font-family: 'Oswald', sans-serif;" }} class="card-text">{item.description}</p>
                                </div>
                                <p style={{ color: "white", marginLeft: "8px", color: "skyblue" }}>Source: {item.source.name}</p>
                                <p style={{ color: "white", marginLeft: "8px",color:"skyblue"}}>{item.publishedAt}</p>
                                <hr style={{ backgroundColor: "white" }} />
                            </div>
                        </div>
                    </>
                )
            })}
            </>
            )}
            
            </div>
        </>
    )
}
export default Newslider
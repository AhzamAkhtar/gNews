import React, { useEffect, useState } from 'react'
import Newelement from './Newelement'
import Element from './Element'

const Newapi = () => {
    const [queary, setquery] = useState("nation")
    const [article, setarticle] = useState([])
    const [country, setcountry] = useState("in")
    const [categ, setcateg] = useState("NATION")
    const [conname, setconname] = useState("INDIA")
    useEffect(() => {
        const gnewsapi = async () => {

            //const url = `https://gnews.io/api/v4/search?q=example&token=a3bd46c42dd12ae35906909a6c7b3556&q=${queary}`;
            const url = `https://gnews.io/api/v4/top-headlines?&token=7e53c32c8edefa8c3b41810d70d52934

            &country=${country}&lang=en&topic=${queary}`;

            //const url="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.articles)
            { setarticle(resJson.articles) }
        }
        gnewsapi();
    }, [queary, country]);
    const nation = (e) => {
        setquery("breaking-news")
        e.preventDefault()
        setcateg("BREAKING-NEWS")
    }
    const globe = (e) => {
        setquery("world")
        e.preventDefault()
        setcateg("WORLD")
    }
    const rupee = (e) => {
        setquery("business")
        e.preventDefault()
        setcateg("BUSINESS")
    }
    const tv = (e) => {
        setquery("entertainment")
        e.preventDefault()
        setcateg("ENTERTAINMENT")
    }
    const microchip = (e) => {
        setquery("technology")
        e.preventDefault()
        setcateg("TECHNOLOGY")
    }
    const fotbal = (e) => {
        setquery("sports")
        e.preventDefault()
        setcateg("SPORTS")
    }
    const flask = (e) => {
        setquery("science")
        e.preventDefault()
        setcateg("SCIENCE")
    }
    const md = (e) => {
        setquery("health")
        e.preventDefault()
        setcateg("HEALTH")
    }
    const us = (e) => {
        setcountry("us")
        e.preventDefault()
        setconname("U.S")
    }
    const au = (e) => {
        setcountry("au")
        e.preventDefault()
        setconname("AUS")
    }
    const ca = (e) => {
        setcountry("ca")
        e.preventDefault()
        setconname("CAN")
    }
    const gb = (e) => {
        setcountry("gb")
        e.preventDefault()
        setconname("U.K")
    }
    const pk = (e) => {
        setcountry("pk")
        e.preventDefault()
        setconname("PAK")
    }
    const ind = (e) => {
        setcountry("in")
        e.preventDefault()
        setconname("INDIA")
    }

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/1900/1003" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1900/1002" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1900/1001" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <ul className="nav justify-content-center my-3">
                <span style={{ fontSize: "1.2rem", color: "white" }}>
                    <i onClick={nation} class="far fa-flag" style={{ userSelect: "auto" }}></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.2rem", color: "white" }}>
                    <i onClick={globe} className="fas fa-globe"></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.2rem", color: "white" }}>
                    <i onClick={rupee} className="fas fa-rupee-sign"></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.4rem", color: "white" }}>
                    <i onClick={microchip} className="fas fa-microchip"></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.4rem", color: "white" }}>
                    <i onClick={tv} className="fas fa-tv"></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.4rem", color: "white" }}>
                    <i onClick={fotbal} className="fas fa-baseball-ball"></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.4rem", color: "white" }}>
                    <i onClick={flask} className="fas fa-flask"></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.4rem", color: "white" }}>
                    <i onClick={md} className="fas fa-user-md"></i>&nbsp;&nbsp;
                </span>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        {conname}
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li onClick={us}><a class="dropdown-item">U.S</a></li>
                        <li onClick={au}><a class="dropdown-item">AUSTRALIA</a></li>
                        <li onClick={ca}><a class="dropdown-item">CANADA</a></li>
                        <li onClick={gb}><a class="dropdown-item">U.K</a></li>
                        <li onClick={pk}><a class="dropdown-item">PAKISTAN</a></li>
                        <li onClick={ind}><a class="dropdown-item">INDIA</a></li>
                    </ul>
                </div>
            </ul>
            <div classNameName="container">
                <h1 style={{ color: "white", fontSize: "larger", fontFamily: " 'Cinzel', serif;", marginLeft: "5px" }}>   ARTICLES ON {categ}</h1>
                <p style={{ color: "white", marginLeft: "5px", color: "skyblue" }}>SELECTED COUNTRY: {conname} & CATEG: {categ}</p>
            </div>
            <div>
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
                                    <p style={{ color: "white", marginLeft: "8px", color: "skyblue" }}>{item.publishedAt}</p>
                                    <hr style={{ backgroundColor: "white" }} />
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>

        </>
    )
}
export default Newapi

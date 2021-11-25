import React, { useEffect, useState } from 'react'
import Newelement from './Newelement'
import Element from './Element'

const Newapi = () => {
    const [queary, setquery] = useState("nation".toUpperCase())
    const [article, setarticle] = useState([])
    const [country,setcountry]=useState("in")
    useEffect(() => {
        const gnewsapi = async () => {

            //const url = `https://gnews.io/api/v4/search?q=example&token=a3bd46c42dd12ae35906909a6c7b3556&q=${queary}`;
            const url = `https://gnews.io/api/v4/top-headlines?&token=07f62a37353c75a45455b4e5a71f8064

            &country=${country}&lang=en&q=${queary}`;

            //const url="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.articles)
            { setarticle(resJson.articles) }
        }
        gnewsapi();
    }, [queary,country]);
    const globe = () => {
        setquery("world".toUpperCase())
    }
    const rupee = () => {
        setquery("market".toUpperCase())
    }
    const tv = () => {
        setquery("entertainment".toUpperCase())
    }
    const microchip = () => {
        setquery("technology".toUpperCase())
    }
    const fotbal = () => {
        setquery("cricket".toUpperCase())
    }
    const flask = () => {
        setquery("science".toUpperCase())
    }
    const md = () => {
        setquery("health".toUpperCase())
    }
    const us=()=>{
        setcountry("us")
    }
    const au=()=>{
        setcountry("au")
    }
    const ca=()=>{
        setcountry("ca")
    }
    const gb=()=>{
        setcountry("gb")
    }
    const pk=()=>{
        setcountry("pk")
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
                        India
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li onClick={us}><a class="dropdown-item" href="#">U.S</a></li>
                        <li onClick={au}><a class="dropdown-item" href="#">AUSTRALIA</a></li>
                        <li onClick={ca}><a class="dropdown-item" href="#">CANADA</a></li>
                        <li onClick={gb}><a class="dropdown-item" href="#">U.K</a></li>
                        <li onClick={pk}><a class="dropdown-item" href="#">PAKISTAN</a></li>
                    </ul>
                </div>
            </ul>
            <div classNameName="container">
                <h1  style={{ color: "white", fontSize: "larger", fontFamily: " 'Cinzel', serif;",marginLeft:"5px"}}>   ARTICLES ON {queary}</h1>
                <p style={{color:"white",opacity:0.5,marginLeft:"5px"}}>SELECTED COUNTRY {country.toUpperCase()} & CATEG: {queary}</p>
            </div>
            <div>
                {article.map((item, index) => {
                    return (
                        <>
                            <div className="card my-2" style={{ backgroundColor: "black",border:" 0.2px solid #fff",borderRadius:"8px"}} onClick={() => window.open(item.url)}>
                                <div class="my-4">
                                    <img src={item.image} class="card-img-top" alt="image" />
                                    <div class="card-body">
                                        <h5 style={{ color: "white", fontFamily: "font-family: 'Oswald', sans-serif;", fontSize: 28 }} class="card-title">{item.title}</h5>
                                        <p style={{ color: "white", fontFamily: "font-family: 'Oswald', sans-serif;" }} class="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <nav className="navbar fixed-bottom navbar-dark bg-dark">
                <div classNameName="container">
                    <input value={queary} onChange={(event) => setquery(event.target.value.toUpperCase())} type="text" placeholder="  Search Any Article" style={{ width: "90%", borderRadius: "5px", border: "none" }} /><i style={{ color: "white" }} className="fas fa-search"></i>
                </div>
            </nav>
        </>
    )
}
export default Newapi

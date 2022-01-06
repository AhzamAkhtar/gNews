import React, { useEffect, useState } from 'react'
import Newtime from "./Newtime"
import Spinner from "./Spinner"
//import Wstack from './Wstack';
const Newapi = () => {
    const [queary, setquery] = useState("nation")
    const [article, setarticle] = useState([])
    const [country, setcountry] = useState("in")
    const [categ, setcateg] = useState("NATION")
    const [conname, setconname] = useState("INDIA")
    const [lang,setlang]=useState("en")
    const [back1,setback1]=useState("yellow")
    const [back2,setback2]=useState("white")
    const [back3,setback3]=useState("white")
    const [back4,setback4]=useState("white")
    const [back5,setback5]=useState("white")
    const [back6,setback6]=useState("white")
    const [back7,setback7]=useState("white")
    const [back8,setback8]=useState("white")
    const [spin,setspin]=useState(false)
    useEffect(() => {
        const gnewsapi = async () => {
            //const url = `https://gnews.io/api/v4/search?q=example&token=a3bd46c42dd12ae35906909a6c7b3556&q=${queary}`;
            setspin(true)
            const url = `https://gnews.io/api/v4/top-headlines?&token=eb245571ea890ae8e124e398edc6f0a7
            &country=${country}&lang=${lang}&topic=${queary}`;
            //const url="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
            const response = await fetch(url);
            const resJson = await response.json();
            setspin(false)
            console.log(resJson.articles)
            { setarticle(resJson.articles) }
        }
        gnewsapi();
    }, [queary, country,back2]);
    const nation = (e) => {
        setquery("nation")
        e.preventDefault()
        setcateg("NATION")
        setback1("yellow")
        setback4("white")
        setback3("white")
        setback2("white")
        setback5("white")
        setback6("white")
        setback7("white")
        setback8("white")
    }
    const globe = (e) => {
        setquery("world")
        e.preventDefault()
        setcateg("WORLD")
        setback2("yellow")
        setback1("white")
        setback3("white")
        setback4("white")
        setback5("white")
        setback6("white")
        setback7("white")
        setback8("white")
    }
    const rupee = (e) => {
        setquery("business")
        e.preventDefault()
        setcateg("BUSINESS")
        setback3("yellow")
        setback1("white")
        setback2("white")
        setback4("white")
        setback5("white")
        setback6("white")
        setback7("white")
        setback8("white")
    }
    const tv = (e) => {
        setquery("entertainment")
        e.preventDefault()
        setcateg("ENTERTAINMENT")
        setback4("yellow")
        setback1("white")
        setback3("white")
        setback2("white")
        setback5("white")
        setback6("white")
        setback7("white")
        setback8("white")
    }
    const microchip = (e) => {
        setquery("technology")
        e.preventDefault()
        setcateg("TECHNOLOGY")
        setback5("yellow")
        setback1("white")
        setback3("white")
        setback2("white")
        setback4("white")
        setback6("white")
        setback7("white")
        setback8("white")
    }
    const fotbal = (e) => {
        setquery("sports")
        e.preventDefault()
        setcateg("SPORTS")
        setback6("yellow")
        setback1("white")
        setback3("white")
        setback2("white")
        setback5("white")
        setback4("white")
        setback7("white")
        setback8("white")
    }
    const flask = (e) => {
        setquery("science")
        e.preventDefault()
        setcateg("SCIENCE")
        setback7("yellow")
        setback1("white")
        setback3("white")
        setback2("white")
        setback5("white")
        setback6("white")
        setback4("white")
        setback8("white")
    }
    const md = (e) => {
        setquery("health")
        e.preventDefault()
        setcateg("HEALTH")
        setback8("yellow")
        setback1("white")
        setback3("white")
        setback2("white")
        setback5("white")
        setback6("white")
        setback7("white")
        setback4("white")
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
    const de = (e) => {
        setcountry("de")
        e.preventDefault()
        setconname("GER")
        setlang("de")
    }
    const ind = (e) => {
        setcountry("in")
        e.preventDefault()
        setconname("INDIA")
    }
    const fr = (e) => {
        setcountry("fr")
        e.preventDefault()
        setconname("FRA")
        setlang("fr")

    }
    const ru = (e) => {
        setcountry("ru")
        e.preventDefault()
        setconname("RUS")
        setlang("ru")

    }
    const no = (e) => {
        setcountry("no")
        e.preventDefault()
        setconname("NORWAY")
        setlang("no")

    }
    const ie = (e) => {
        setcountry("ie")
        e.preventDefault()
        setconname("IRE")
        setlang("ie")

    }
    const it = (e) => {
        setcountry("it")
        e.preventDefault()
        setconname("ITALY")
        setlang("it")

    }
    const se = (e) => {
        setcountry("se")
        e.preventDefault()
        setconname("SWE")
        setlang("se")
    }
    const pk = (e) => {
        setcountry("pk")
        e.preventDefault()
        setconname("PAK")
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
            <div>
                <Newtime/>
                {/*<h1 style={{backgroundColor:"black",width:"100%",height:"50px",color:"white",textAlign:"center",fontFamily: "font-family: 'Oswald', sans-serif;"}}>WEATHER REPORT</h1>*/}
            </div>
           {/*<Wstack/>*/}
            <ul className="nav justify-content-center my-3">
                <span style={{ fontSize: "1.2rem", color: "white" }}>
                    <i onClick={nation} class="far fa-flag" style={{color:`${back1}`}}></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.2rem", color: "white" }}>
                    <i onClick={globe} className="fas fa-globe" style={{color:`${back2}`}}></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.2rem", color: "white" }}>
                    <i onClick={rupee} className="fas fa-rupee-sign" style={{color:`${back3}`}}></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.4rem", color: "white" }}>
                    <i onClick={microchip} className="fas fa-microchip" style={{color:`${back5}`}}></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.4rem", color: "white" }}>
                    <i onClick={tv} className="fas fa-tv" style={{color:`${back4}`}}></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.4rem", color: "white" }}>
                    <i onClick={fotbal} className="fas fa-baseball-ball" style={{color:`${back6}`}}></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.4rem", color: "white" }}>
                    <i onClick={flask} className="fas fa-flask" style={{color:`${back7}`}}></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.4rem", color: "white" }}>
                    <i onClick={md} className="fas fa-user-md" style={{color:`${back8}`}}></i>&nbsp;&nbsp;
                </span>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        {conname}
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li onClick={us}><a class="dropdown-item">U.S</a></li>
                        <li onClick={au}><a class="dropdown-item">AUSTRALIA</a></li>
                        <li onClick={ca}><a class="dropdown-item">CANADA</a></li>
                        <li onClick={se}><a class="dropdown-item">SWEDEN</a></li>
                        <li onClick={ie}><a class="dropdown-item">IRELAND</a></li>
                        <li onClick={gb}><a class="dropdown-item">U.K</a></li>
                        <li onClick={it}><a class="dropdown-item">ITALY</a></li>
                        <li onClick={no}><a class="dropdown-item">NORWAY</a></li>
                        <li onClick={fr}><a class="dropdown-item">FRANCE</a></li>
                        <li onClick={de}><a class="dropdown-item">GERMANY</a></li>
                        <li onClick={ind}><a class="dropdown-item">INDIA</a></li>
                        <li onClick={ru}><a class="dropdown-item">RUSSIA</a></li>
                        <li onClick={pk}><a class="dropdown-item">PAKISTAN</a></li>
                    </ul>
                </div>
            </ul>
            <div classNameName="container">
                <h1 style={{ color: "white", fontSize: "larger", fontFamily: " 'Cinzel', serif;", marginLeft: "5px" }}>   ARTICLES ON {categ}</h1>
                <p style={{ color: "white", marginLeft: "5px", color: "skyblue" }}>SELECTED COUNTRY: {conname} & CATEG: {categ}</p>
            </div>
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
export default Newapi

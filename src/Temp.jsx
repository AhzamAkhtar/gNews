import React, { useEffect, useState } from "react";
const Temp = () => {
    const [city, setCity] = useState("null")
    const [search, setSearch] = useState("Delhi")
    useEffect(() => {
        const gnewsapi = async () => {
            //const url = `https://gnews.io/api/v4/search?q=example&token=a3bd46c42dd12ae35906909a6c7b3556&q=${queary}`;
            const url = `http://api.weatherapi.com/v1/current.json?key=743125eba32b43ce850122915210212&q=${search}&aqi=yes`;

            //const url="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=dlVR6N3WDcWAVYW05GQ5KmKlajpBJ0ck"
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.current)
            { setCity(resJson.current) }
        }
        gnewsapi();
    }, [search]);
    return (
        <>
            <div>  
                <span><input type="search" placeholder="SEARCH YOUR CITY HERE (ex-London)" onChange={(event) => { setSearch(event.target.value) }} /*value={search}*/ style={{ width: "100%", borderRadius: "8px", backgroundColor: "black", borderColor: "yellow",color:"white",hight:"100px",textTransform:"uppercase"}}></input></span>
            </div>
            {!city ? (
                <p>NO DATA</p>
            ) : (
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                {search.toUpperCase()} : {city.feelslike_c}°C
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div>
                                    <h2 style={{ textAlign: "center",fontFamily: "font-family: 'Oswald', sans-serif;"}}>{search.toUpperCase()}</h2>
                                </div>
                                <div>
                                    <h1 style={{ textAlign: "center",fontFamily: "font-family: 'Oswald', sans-serif;"}}><i class="fas fa-street-view" id="icon"></i></h1>
                                </div>
                                <div>
                                    <h1 style={{ textAlign: "center",fontFamily: "font-family: 'Oswald', sans-serif;"}}>{city.feelslike_c}°C | {city.feelslike_f}°F</h1>
                                    
                                </div>
                                <div>
                                    <span style={{fontFamily: "font-family: 'Oswald', sans-serif;"}}><h6>Humidity:{city.humidity} | WindSpeed:{city.wind_kph}Kph | Visibility:{city.vis_km}km | Cloud:{city.cloud} | Precipitation:{city.precip_in} </h6></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
export default Temp
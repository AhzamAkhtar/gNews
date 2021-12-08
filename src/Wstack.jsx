import React, { useEffect, useState } from 'react'
export default function Wstack() {
    const [city, setCity] = useState("null")
    const [search, setSearch] = useState("Delhi")
    useEffect(() => {
        const ws = async () => {
            const url = `http://api.weatherstack.com/current?access_key=7ac6431b4e80e76bb7f93bd5bac0005d&query=${search}&unit=m`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.current);
            { setCity(resJson.current) }
        }
        ws();
    }, [search])
    return (
        <>
            <div>
                <span><input type="search" placeholder="SEARCH YOUR CITY HERE (ex-London)" onChange={(event) => { setSearch(event.target.value) }} /*value={search}*/ style={{ width: "100%", borderRadius: "8px", backgroundColor: "black", borderColor: "yellow", color: "white", hight: "100px", textTransform: "uppercase" }}></input></span>
            </div>
            {!city ? (
                <p>NO DATA</p>
            ) : (
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                {search.toUpperCase()} : {city.feelslike}°C
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div>
                                    <h1 style={{ textAlign: "center", fontFamily: "font-family: 'Oswald', sans-serif;" }}><i class="fas fa-sun" style={{color:"yellow"}}></i></h1>
                                </div>
                                <div>
                                    <h2 style={{ textAlign: "center", fontFamily: "font-family: 'Oswald', sans-serif;" }}>{search.toUpperCase()}</h2>
                                </div>
                                <div>
                                    <h1 style={{ textAlign: "center", fontFamily: "font-family: 'Oswald', sans-serif;" }}>{city.feelslike}°C</h1>
                                    <h1 style={{ textAlign: "center", fontFamily: "font-family: 'Oswald', sans-serif;" }}>{city.weather_descriptions}</h1>

                                </div>
                                <div>
                                    <span style={{ fontFamily: "font-family: 'Oswald', sans-serif;" }}><h6>Humidity:{city.humidity} | WindSpeed:{city.wind_speed}Kph | Visibility:{city.visibility}km | Cloud:{city.cloudcover} | Precipitation:{city.precip} | Wind.Direction:{city.wind_dir}</h6></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


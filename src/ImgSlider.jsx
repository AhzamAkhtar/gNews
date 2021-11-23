import React, { useEffect } from 'react'
import "./index.css"
import "./Homew.png"
import Element from './Element'
const ImgSlider = () => {
    useEffect(() => {
        const ftechApi = async () => {
            const url = `https://gnews.io/api/v4/top-headlines?token=a3bd46c42dd12ae35906909a6c7b3556&country=in&lang=en&q="breaking-news"`
            const response = await fetch(url)
            const resJson = await response.json()
            console.log(resJson)
        }
        ftechApi();
    })
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/1900/1003" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/1900/1002" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/1900/1001" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <ul class="nav justify-content-center my-3">
                <span style={{ fontSize: "1.5rem", color: "white" }}>
                    <i class="fas fa-home"></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.5rem", color: "white" }}>
                    <i class="fas fa-futbol"></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.5rem", color: "white" }}>
                    <i class="fas fa-globe"></i>&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "1.5rem", color: "white" }}>
                    <i class="fas fa-tv"></i>&nbsp;&nbsp;
                </span>
            </ul>
            <div className="container">
                <h1 style={{ color: "white" }}>TOP-HEADLINES</h1>
            </div>
            <nav class="navbar fixed-bottom navbar-dark bg-dark">
                <div className="container">
                    <input type="text" placeHolder="  Search Any Article" style={{ width: "50%", borderRadius: "5px", border: "none" }} /><i style={{ color: "white" }} class="fas fa-search"></i>
                </div>
            </nav>
        </>
    )
}
export default ImgSlider
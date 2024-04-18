
import video1 from "./videos/video1.mp4"
import video2 from "./videos/video2.mp4"
import video3 from "./videos/video3.mp4"
import "./carousel.css"

import React from 'react'
export default function Carousel() {
  return (
    
<div id="carouselExampleCaptions" class="carousel slide" >
    <section className="carousel-a">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <video src={video3} className="d-block w-100 " alt="video"autoPlay muted loop />
                <div className="carousel-caption d-none d-md-block">
                    <h5>La mejor carne</h5>
                    <p>Este corte de carne se presenta con una precisión y cuidado excepcionales, reflejando nuestro compromiso con la calidad y la frescura.</p>
                </div>
                </div>
                <div className="carousel-item">
                <video src={video1} class="d-block w-100" alt="video" autoPlay muted loop/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <video src={video2} class="d-block w-100" alt="video" autoPlay muted loop/>
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
    </section>
</div>
    
  )
}

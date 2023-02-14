import React from 'react';
import {Carousel} from "react-bootstrap";
import MyCard from "./MyCard";

export default function Home(){
    return(
        <>
            <Carousel style={{backgroundColor:"#ffffff"}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarrousel"
                        src="https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Consultoria</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarrousel"
                        src="https://images.pexels.com/photos/2889093/pexels-photo-2889093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Capacitaciones</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarrousel"
                        src="https://images.pexels.com/photos/2889093/pexels-photo-2889093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Clientes</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <MyCard></MyCard>
        </>
    );
}

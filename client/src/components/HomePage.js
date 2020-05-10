import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="bd-example">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require('../images/4_1200x700.jpg')} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Food for Everyone</h5>
                                    <p>India wastes as much food as is consumed by the United Kingdom</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={require('../images/1_1200x700.jpg')} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Food for Everyone</h5>
                                    <p>One-quarter of the world's undernourished live in India</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={require('../images/2_1200x700.jpg')} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Food for Everyone</h5>
                                    <p>India ranks 55 out of 76 countries on the Global Hunger Index</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="pt-5 pb-5" style={{ backgroundColor: 'rgb(80, 159, 239)' }}>
                    <div className="text-white text-center pb-5">
                        <h2 className="pt-5">FOOD FOR EVERYONE</h2>
                        <h3 className="text-dark mx-auto mt-5 mb-5">A LITTLE INITIATIVE TO HELP THE NEEDY</h3>
                        <Link to="/Signup" className="btn btn-warning ">JOIN US</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
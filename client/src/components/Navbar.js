import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Food4Poor</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto mr-5">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Join" >JOIN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
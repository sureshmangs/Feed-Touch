import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Food for Poor</h1>
                        <h2 className="text-white-50 mx-auto mt-5 mb-5">Just a little initiative to help the needy</h2>
                        <Link to="/Join" className="btn btn-primary ">Get Started</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default HomePage

import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="container">
                <div >
                    <h1 className="text-center pt-5">ABOUT US</h1>
                    <hr className="w-25 mx-auto pb-5" />
                </div>
                <div className="row mb-5">
                    <div className="col-lg-6 col-md-6 col-12 ">
                        <img src={require('../images/2_1200x700.jpg')} className="img-fluid" alt="..." />

                    </div>
                    <div className="col-lg-6 col-md-6 col-12 ">
                        <h1 className="pt-3">Who Are We?</h1>
                        <hr className="w-25" />
                        <p >ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="btn bg-primary text-white">Want to know more</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default About

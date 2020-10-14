import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
const socket = socketIOClient('http://localhost:5000/');


class DonateFood extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            foodDetails: '',
            location: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleFoodDetails = (e) => {
        this.setState({
            foodDetails: e.target.value
        })
    }

    handleLocation = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefauult();
        const data = {
            name: this.state.name,
            food_details: this.state.foodDetails,
            location: this.state.location
        }
        socket.emit("donate_food", data);
    }

    componentDidMount() {
        socket.on("donate_food", (data) => {

        });


    }

    componentWillUnmount() {
        socket.off('donate_food');
    }

    render() {
        return (
            <div style={{ background: '#545b62' }} className="pb-5">
                < div className="container py-5" >
                    <div className="row text-center text-white">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="display-4">FOOD FOR EVERYONE</h1>
                        </div>
                    </div>
                </div>
                <div className="container w-50">
                    <form className="text-center border border-light p-5" onSubmit={this.handleSubmit}>

                        <p className="h4 mb-4 text-white">Donate</p>

                        <input type="text" className="form-control mb-4" placeholder="Name" />

                        <input type="text" className="form-control mb-4" placeholder="Food Item Details" />

                        <input type="text" className="form-control mb-4" placeholder="Location" />

                        <button className="btn btn-success btn-block my-4" type="submit">Donate</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default DonateFood

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            msg: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    handleMsg = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();

        // API call to backend has to be implemented here

        ReactDOM.findDOMNode(this.refs.alert).style.display = 'block';
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container  pt-5 pb-5">
                        <div>
                            <img src={require('../images/rocket.png')} className="rounded-circle mx-auto img-fluid d-block" style={{ width: "200px", height: "200px" }} alt="" />
                        </div>
                        <form onSubmit={this.handleSubmit} >
                            <h3 className="mb-3">Drop a Message</h3>
                            <div ref="alert" style={alertMsg}>Your message has been sent</div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" onChange={this.handleName} className="form-control" placeholder="Name" id="name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" onChange={this.handleEmail} className="form-control" placeholder="Email" id="email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="phone" onChange={this.handlePhone} className="form-control" placeholder="Phone Number" id="phone" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea name="message" onChange={this.handleMsg} className="form-control" placeholder="Message" id="message" style={{ width: "100%", height: "150px" }}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <button type="submit" name="submit" className="btn btn-primary" >Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// CSS Styling
const alertMsg = {
    textAlign: 'center',
    padding: '10px',
    background: '#28a745',
    color: '#fff',
    marginBottom: '10px',
    display: 'none'
}

export default Contact;
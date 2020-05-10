import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { CLIENT_ID } from '../config/keys'

import * as actions from '../actions/authAction';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    async responseGoogle(res) {
        await this.props.oauthGoogle(res.accessToken);
        if (!this.props.errorMessage) {
            this.props.history.push('/dashboard');
        }
    }


    render() {
        return (
            <div className="text-center  pb-5" style={backG}>
                <div className="pt-5 pb-5">
                    <div className="text-white text-center pb-5">
                        <h2 className="pt-5">FOOD FOR EVERYONE</h2>
                        <h3 className="text-dark mx-auto mt-5 mb-5">A LITTLE INITIATIVE TO HELP THE NEEDY</h3>
                    </div>
                </div>
                <h5 className="pb-4">Sign Up with Google</h5>
                <GoogleLogin className="mb-5"
                    clientId={CLIENT_ID}
                    buttonText="Google"
                    scope="openid profile email"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    isSignedIn={true}

                />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage,
        accessTokenG: state.auth.accessTokenG
    }
}


const backG = {
    backgroundImage: `url(${require("../images/2_1200x700.jpg")})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    height: 'auto',
    width: '100%'
}

export default connect(mapStateToProps, actions)(SignUp)
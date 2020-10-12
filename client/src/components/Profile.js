
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/profileAction';


class Profile extends Component {
    render() {
        const { userProfile } = this.props;
        return (
            <div className="container emp-profile">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={userProfile.image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-2">
                        <div className="profile-head">
                            <h5>Hello <i>{userProfile.name}</i></h5>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Dashboard</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">

                        <Link to={'edit_profile/' + userProfile.userid}><button type="submit" className="profile-edit-btn" name="btnAddMore">Edit Profile</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userProfile.userid.substr(0, 10)}xxxxxxx</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userProfile.name}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userProfile.email}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Location</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userProfile.location ? userProfile.location : 'Not Available'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.profile.userProfile,
        orders: state.profile.orders
    }
}

export default connect(mapStateToProps, actions)(Profile)
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { adminDetailsData } from "./data.js";
import "../App.css";

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: adminDetailsData.getCurrentUser() || {},
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }

  render() {
    const { admin } = this.state;
    return (
      <div>
        <NavBar />
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Here are your details
          </h3>
        </div>

        <div className="FormCenter">
          <form onSubmit={this.handleClose} className="FormFields">
            {/*Write code to create spans for name,email,dob,mobileno and location */}
            <div className="FormField">
              <span className="FormField__span" htmlFor="uname">
                Name
              </span>
              <input
                id="name"
                className="FormField__Input"
                type="text"
                value={admin.name}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__span" htmlFor="email">
                Email
              </span>
              <input
                id="email"
                className="FormField__Input"
                type="email"
                value={admin.email}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__span" htmlFor="dob">
                DOB
              </span>
              <input
                id="dob"
                className="FormField__Input"
                type="text"
                value={admin.dob}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__span" htmlFor="mobileno">
                Mobileno
              </span>
              <input
                id="mobileno"
                className="FormField__Input"
                type="text"
                value={admin.mobileno}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__span" htmlFor="location">
                Location
              </span>
              <input
                id="location"
                className="FormField__Input"
                type="text"
                value={admin.location}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              {/*Write code here to create a close button */}
              <button className="FormField__Button">Close</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewProfile;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";

class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dob: "",
      location: "",
      mobile: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    if (this.canBeSubmitted()) {
      alert("Patient Added successfully");
      patientDetailsData.add(
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );
      this.props.history.push("/allPatients");
    }
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }
  canBeSubmitted() {
    const { name, email, dob, location, mobile } = this.state;
    return (
      name.length > 0 &&
      email.length > 0 &&
      dob.length > 0 &&
      location.length > 0 &&
      mobile.length > 0
    );
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    const name = this.state.name;
    const date = new Date();
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "30px",
              fontSize: "2em",
            }}
          >
            Adding a Patient
          </p>
        </div>
        {/* Write code here to create fields and input labels for name,email,dob,mobileno and location  */}
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="FormField__Input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="Enter name"
              ></input>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="FormField__Input"
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                placeholder="Enter email"
              ></input>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="dob">
                Dob
              </label>
              <input
                id="dob"
                className="FormField__Input"
                type="text"
                name="dob"
                onChange={this.handleChange}
                value={this.state.dob}
                placeholder="Enter dob"
              ></input>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="mobile">
                Mobile
              </label>
              <input
                id="mobile"
                className="FormField__Input"
                type="text"
                name="mobile"
                onChange={this.handleChange}
                value={this.state.mobile}
                placeholder="Enter mobile"
              ></input>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                className="FormField__Input"
                type="text"
                name="location"
                onChange={this.handleChange}
                value={this.state.location}
                placeholder="Enter location"
              ></input>
            </div>
            <div className="FormField">
              <div>
                <button className="FormField__Button">Add</button>
                <button
                  className="FormField__Button"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPatient;

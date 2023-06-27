import React, { Component } from "react";
import "../App.css";
import NavBar from "./NavBar.jsx";
import { patientDetailsData } from "./data.js";
import { Route } from "react-router-dom";

class EditPatient extends Component {
  constructor(props) {
    super(props);
    const patient =
      patientDetailsData.getPatientDetails(props.match.params.id) || undefined;
    this.state = {
      name: patient.name || "",
      email: patient.email || "",
      dob: patient.dob || "",
      location: patient.location || "",
      mobile: patient.mobile || "",
      patient: patient,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    if (this.canBeSubmitted()) {
      e.preventDefault();

      patientDetailsData.edit(
        this.state.patient.id,
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );

      this.props.history.push("/allPatients");
    }
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
  handleCancel(e) {
    this.props.history.push("/allPatients");
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    const { patient } = this.state;
    if (!patient) {
      return <div>Patient doesnot exist</div>;
    }

    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "10px",
              fontSize: "2em",
            }}
          >
            Edit patient
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/* Write code here to create labels and input fields for edit patient like name,email,dob,location and mobile*/}
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
            <div className="SideRow">
              {/* Write code here to create submit and cancel buttons */}
              <div className="FormField">
                <button className="FormField__Button">Edit</button>
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

export default EditPatient;

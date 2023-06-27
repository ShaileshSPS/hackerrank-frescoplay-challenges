import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { appDetailsData } from "./data.js";
import { patientDetailsData } from "./data";

import "../App.css";

class EditAppointment extends Component {
  constructor(props) {
    super(props);
    const appointment =
      appDetailsData.getAppointmentDetails(props.match.params.appId) ||
      undefined;
    this.state = {
      name: appointment.name || "",
      disease: appointment.disease || "",
      appdate: appointment.appdate || "",
      slot: appointment.slot || "",
      description: appointment.description || "",
      appointment: appointment,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownNameChange = this.handleDropdownNameChange.bind(this);
  }
  handleDropdownChange(e) {
    if (e.target.value === "N/A") alert("please select slot other than N/A");
    this.setState({ slot: e.target.value });
  }
  handleDropdownNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    console.log(
      "Details",
      this.state.appointment.appId,
      this.state.name,
      this.state.disease,
      this.state.appdate,
      this.state.slot,
      this.state.description
    );
    if (true) {
      e.preventDefault();
      if (this.state.slot === "N/A" || this.state.name === "N/A") {
        alert("Please select slot and name values other than N/A");
      } else {
        appDetailsData.edit(
          this.state.appointment.appId,
          this.state.name,
          this.state.disease,
          this.state.appdate,
          this.state.slot,
          this.state.description
        );
        this.props.history.push("/allAppointments");
      }
    }
  }

  canBeSubmitted() {
    const { name, disease, appdate, slot, description } = this.state;
    return (
      name.length > 0 &&
      disease.length > 0 &&
      appdate.length > 0 &&
      slot.length > 0 &&
      description.length > 0
    );
  }
  handleCancel(e) {
    this.props.history.push("/allAppointments");
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
    const { appointment } = this.state;
    const names = patientDetailsData.getName();

    if (!appointment) {
      return <h1>No appointments Found</h1>;
    }
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
            Edit Appointment
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*it should have fields like name, disease, appdate, slot, description, submit and cancel buttons */}
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                Name
              </label>
              <input type="hidden"></input>
              <select
                id="name"
                name="name"
                class="DropDowns"
                ref={(input) => (this.name = input)}
                onChange={this.handleDropdownNameChange}
                value={this.state.name}
              >
                <header>select names </header>
                <option value="N/A">N/A</option>
                {names.map((nameItem, index) => (
                  <option value={nameItem}>{nameItem}</option>
                ))}
              </select>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="appdate">
                Appointment date
              </label>
              <input
                id="appdate"
                className="FormField__Input"
                type="text"
                name="appdate"
                onChange={this.handleChange}
                value={this.state.appdate}
                placeholder="Enter Appointment date"
              ></input>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="disease">
                Disease
              </label>
              <input
                id="disease"
                className="FormField__Input"
                type="text"
                name="disease"
                onChange={this.handleChange}
                value={this.state.disease}
                placeholder="Enter disease"
              ></input>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="slots">
                Slots
              </label>
              <input type="hidden"></input>
              <select
                id="slot"
                class="DropDowns"
                ref={(input) => (this.slots = input)}
                onChange={this.handleDropdownChange}
                value={this.state.slot}
              >
                <header>select slots </header>
                <option value="N/A">N/A</option>
                <option value="10-11 AM">10-11 AM</option>
                <option value="1-2 PM">1-2 PM</option>
                <option value="3-4 PM">3-4 PM</option>
                <option value="6-8 PM">6-8 PM</option>
              </select>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="description">
                Description
              </label>
              <input
                id="description"
                className="FormField__Input"
                type="textarea"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
                placeholder="Add description"
              ></input>
            </div>
            <div className="FormField">
              <div>
                <button className="FormField__Button">Submit</button>
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

export default EditAppointment;

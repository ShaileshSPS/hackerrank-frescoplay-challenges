import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { appDetailsData } from "./data";
import { patientDetailsData } from "./data";

class BookAppointment extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      disease: "",
      appdate: "",
      slot: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownNameChange = this.handleDropdownNameChange.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleDropdownChange(e) {
    if (e.target.value === "N/A") alert("please select slot other than N/A");
    this.setState({ slot: e.target.value });
  }
  handleDropdownNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    if (this.canBeSubmitted()) {
      e.preventDefault();

      let slot = this.slots.value;
      if (slot === "N/A" || this.state.name === "N/A") {
        alert("Please select slot and name values other than N/A");
      } else {
        alert("Appointment booked successfully");
        appDetailsData.add(
          this.state.name,
          this.state.disease,
          this.state.appdate,
          slot,
          this.state.description
        );
        this.props.history.push("/allAppointments");
      }
    }
  }
  handleCancel(e) {
    this.props.history.push("/allAppointments");
  }

  canBeSubmitted() {
    const { name, disease, appdate, slot, description } = this.state;
    return (
      name.length > 4 &&
      disease.length > 0 &&
      appdate.length > 0 &&
      description.length > 0
    );
  }
  render() {
    const names = patientDetailsData.getName();

    const isEnabled = this.canBeSubmitted();
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
            Booking Appointment
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*Write code here to create dropdown to list the name of patients, if no patients are avilable then it should be N/A */}
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                Names
              </label>
              <select
                name="name"
                class="DropDowns"
                ref={(input) => (this.name = input)}
                onChange={this.handleDropdownNameChange}
              >
                <header>select names </header>
                <option value="N/A">N/A</option>
                {names.map((nameItem, index) => (
                  <option value={nameItem}>{nameItem}</option>
                ))}
              </select>
            </div>
            {/*Write code here to create date and disease labels */}
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
              <select
                class="DropDowns"
                ref={(input) => (this.slots = input)}
                onChange={this.handleDropdownChange}
              >
                <header>select slots </header>
                <option value="N/A">N/A</option>
                <option value="10-11 AM">10-11 AM</option>
                <option value="1-2 PM">1-2 PM</option>
                <option value="3-4 PM">3-4 PM</option>
                <option value="6-8 PM">6-8 PM</option>
              </select>
            </div>
            {/* Write code here to create description field,submit and cancel buttons */}
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

export default BookAppointment;

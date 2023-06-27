import React, { Component } from "react";
import NavBar from "./NavBar";
import { appDetailsData } from "./data.js";

class ViewAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: appDetailsData.getAppointmentDetails(
        props.match.params.appId
      ),
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allAppointments");
  }

  render() {
    const { appointment } = this.state;
    if (!appointment) {
      return <h1>No appointments found</h1>;
    }
    return (
      <div>
        <NavBar />
        <div>
          <div>
            <p
              style={{
                textAlign: "center",
                paddingBottom: "10px",
                paddingTop: "30px",
                fontSize: "2em",
              }}
            >
              Viewing Appointment
            </p>
          </div>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleClose} className="FormFields">
            {/* Write code here to display name, appdate, slot, description and disease */}
            <div className="FormField">
              <span className="FormField__span" htmlFor="name">
                Name
              </span>
              <input
                id="name"
                className="FormField__Input"
                type="text"
                name="name"
                value={appointment.name}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__span" htmlFor="appdate">
                Appointment date
              </span>
              <input
                id="appdate"
                className="FormField__Input"
                type="text"
                name="appdate"
                value={appointment.appdate}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__span" htmlFor="disease">
                Disease
              </span>
              <input
                id="disease"
                className="FormField__Input"
                type="text"
                name="disease"
                value={appointment.disease}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__span" htmlFor="slots">
                Slots
              </span>
              <input
                id="slot"
                className="FormField__Input"
                type="text"
                name="slot"
                value={appointment.slot}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__span" htmlFor="description">
                Description
              </span>
              <input
                id="description"
                className="FormField__Input"
                type="textarea"
                name="description"
                value={appointment.description}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <button className="FormField__Button">Close</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewAppointment;

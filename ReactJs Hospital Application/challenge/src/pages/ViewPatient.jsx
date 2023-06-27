import React, { Component } from "react";
import NavBar from "./NavBar";
import { patientDetailsData } from "./data.js";
class ViewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: patientDetailsData.viewPatientDetails(props.match.params.id),
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allPatients");
  }

  render() {
    const { patient } = this.state;
    if (!patient) {
      return <h1>No patients found</h1>;
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
            Viewing Patient
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleClose} className="FormFields">
            {/* Write code here to create fields for name, disease,appdate, slot and mobile*/}
            <div className="FormField">
              <span className="FormField__Viewspan" htmlFor="name">
                Name
              </span>
              <input
                id="name"
                className="FormField__Input"
                type="text"
                name="name"
                value={patient.name}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__Viewspan" htmlFor="email">
                Email
              </span>
              <input
                id="email"
                className="FormField__Input"
                type="email"
                name="email"
                value={patient.email}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__Viewspan" htmlFor="dob">
                Dob
              </span>
              <input
                id="dob"
                className="FormField__Input"
                type="text"
                name="dob"
                value={patient.dob}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__Viewspan" htmlFor="mobile">
                Mobile
              </span>
              <input
                id="mobile"
                className="FormField__Input"
                type="text"
                name="mobile"
                value={patient.mobile}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              <span className="FormField__Viewspan" htmlFor="location">
                Location
              </span>
              <input
                id="location"
                className="FormField__Input"
                type="text"
                name="location"
                value={patient.location}
                readOnly
              ></input>
            </div>
            <div className="FormField">
              {/*Write code here to create close button */}
              <button className="FormField__Button">Close</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ViewPatient;

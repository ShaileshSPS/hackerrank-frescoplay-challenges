import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
class AllPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Write function to get the data of patients with the name as appointmentsList:
      patientsList: patientDetailsData.getData(),
    };
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleView(id) {
    this.props.history.push(`/viewPatient/${id}`);
  }
  handleEdit(id) {
    this.props.history.push(`/editPatient/${id}`);
  }
  handleDelete(e) {
    patientDetailsData.deletePatient(e);
    this.setState({
      patientsList: patientDetailsData.getData(),
    });
  }

  render() {
    const { patientsList } = this.state;

    return (
      <div style={{ height: "100%" }}>
        <NavBar />
        <form style={{ display: "flex", height: "50%", alignItems: "center" }}>
          {patientsList.length === 0 ? (
            <h1 style={{ textAlign: "center", flexGrow: "1" }}>
              No Patients Found
            </h1>
          ) : (
            /*Write code here to create all patients details*/
            <div style={{ flexDirection: "column" }}>
              {patientsList.map((patients, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "7px",
                  }}
                >
                  <div style={{ margin: "0rem 50% 0rem 0rem" }}>
                    {patients.name}
                  </div>
                  <div style={{ display: "flex", marginLeft: "30%" }}>
                    <div>
                      <button
                        className="FormField__Button"
                        onClick={this.handleEdit.bind(this, patients.id)}
                      >
                        Edit
                      </button>
                    </div>
                    <div>
                      <button
                        className="FormField__Button"
                        onClick={() => this.handleView(patients.id)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default AllPatients;

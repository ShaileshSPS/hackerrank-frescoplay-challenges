import React, { useState } from "react";
import Medilogo from "../images/Medi-Logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ display: "flex", fontSize: "10px" }}>
      {/*should have a Navbar brand, toggler and the NavItem (logout) should be linked to sign-in page */}
      <div style={{ flexDirection: "row" }}>
        <img style={{ width: "5%" }} src={Medilogo}></img>
        <NavLink className="FormTitle__Link" to="/addPatient">
          <Link to="/addPatient">Add Patient</Link>
        </NavLink>
        <NavLink className="FormTitle__Link" to="/allPatients">
          <Link to="/allPatients">All Patients</Link>
        </NavLink>
        <NavLink className="FormTitle__Link" to="/bookAppointment">
          <Link to="/bookAppointment">Book Appointment</Link>
        </NavLink>
        <NavLink className="FormTitle__Link" to="/allAppointments">
          <Link to="/allAppointments">All Appointments</Link>
        </NavLink>
        <NavLink className="FormTitle__Link" to="/viewProfile">
          <Link to="/viewProfile">Profile</Link>
        </NavLink>
        <NavLink className="FormTitle__Link" to="/sign-in">
          <Link to="/sign-in">Logout</Link>
        </NavLink>
      </div>
    </div>
  );
};
export default Example;

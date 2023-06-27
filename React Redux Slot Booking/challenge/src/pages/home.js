import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { selectGame } from "../Action/action";
import { connect } from "react-redux";

export class Games extends Component {
  handlebook = (i) => {};

  handleSearch = () => {};

  render() {
    // Template to display each game

    // <div className="Card" key={game.id}>
    //   <ul>
    //     <li>
    //       <img hieght="300px" width="200px"></img>
    //     </li>
    //     <li></li>
    //     <li>
    //       <button
    //         className="btn btn-dark "
    //       >
    //         Book Now
    //       </button>
    //     </li>
    //   </ul>
    // </div>

    return (
      <div className="Home">
        <header>
          {/* code goes here to display the title and and an image */}
        </header>
        <center>{/* code goes here to loop the each game */}</center>
        <center>
          <div>
            <button className=" btn-lg btn btn-dark m-2"></button>
          </div>
        </center>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Games: state.Games,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postDate: (date) => dispatch({ type: "TODAY_DATE", date }),
    selectGame: (id) => dispatch(selectGame(id)),
    getGameAndBooking: () => dispatch({ type: "GAME_BOOKING" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);

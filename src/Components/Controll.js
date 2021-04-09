import React from "react";
import { connect } from "react-redux";

const Controll = (props) => {
  return (
    <div>
      <button
        style={{ marginRight: "10px", fontSize: "20px" }}
        onClick={() => props.increment()}
      >
        INCREMENT
      </button>
      <button
        style={{ marginLeft: "10px", fontSize: "20px" }}
        onClick={() => props.decrement()}
      >
        DECREMENT
      </button>
      <button
        style={{ marginLeft: "10px", fontSize: "20px" }}
        onClick={() => props.reset()}
      >
        RESET
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
  };
};

export default connect(null, mapDispatchToProps)(Controll);

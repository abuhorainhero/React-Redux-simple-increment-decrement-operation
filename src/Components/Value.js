import React from "react";
import { connect } from "react-redux";

const Value = (props) => {
  return (
    <div>
      <h2>{props.value}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { value: state.value };
};

export default connect(mapStateToProps)(Value);

import { Entity } from "aframe-react";
import React from "react";
import { connect } from "react-redux";
import { resetPoints } from "../redux/actions.js";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => ({
    resetValue: () => dispatch(resetPoints())
});

const ResetComponent = ({ resetValue }) => (
    <Entity events={{
        click: () => {
            resetValue();
        }
    }} primitive="a-box" color="#222222" depth="0.1" height="1.25" width="1.5" position="4.653 0.430 4.262" rotation="-45 -30 0">
        <Entity text="value: RESTART" position="3.025 0.047 0.064" scale="7.5 9 1"></Entity>
    </Entity>
);

ResetComponent.propTypes = {
    resetValue: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(ResetComponent);
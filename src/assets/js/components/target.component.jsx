import React from "react";
import { Entity } from "aframe-react";
import { connect } from "react-redux";
import { addPoints } from "../redux/actions.js";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => ({
    setShootValue: (value) => dispatch(addPoints(value))
});

class TargetComponent extends React.Component {
    render() {
        return (
            <Entity primitive="a-box" color="#575757" depth="1" height="0.5" width="25" position="0 4.75 -8">
                <Entity position="10 -1.6 0" animation={{
                    property: "position",
                    dir: "alternate",
                    dur: 4000,
                    easing: "easeInOutCubic", 
                    loop: true,
                    to: "-10 -1.6 0"
                }}>
                    <Entity primitive="a-box" color="#333333" depth="0.1" height="2.5" width="0.2"></Entity>
                    <Entity primitive="a-sphere" radius="0.4" color="#333333" position="0 1.5 0"></Entity>
                    <Entity primitive="a-box" color="#fafafa" depth="0.02" height="1.66" width="1.38" position="0 -0.9 0.08">
                        <Entity primitive="a-circle" radius="0.4" color="#fafafa" position="0 1.15 0">
                            <Entity events={{
                                click: () => {
                                    this.props.setShootValue(25);
                                }
                            }} primitive="a-ring" color="#666" radius-inner="0.19" radius-outer="0.3" position="0 0 0.04"></Entity>
                            <Entity events={{
                                click: () => {
                                    this.props.setShootValue(50);
                                }
                            }} primitive="a-circle" radius="0.08" color="#222" position="0 0 0.04"></Entity>
                        </Entity>
                        <Entity primitive="a-circle" radius="0.6" color="#ccc" position="0 0 0.04">
                            <Entity events={{
                                click: () => {
                                    this.props.setShootValue(5);
                                }
                            }} primitive="a-ring" color="#666" radius-inner="0.36" radius-outer="0.46" position="0 0 0.04"></Entity>
                            <Entity events={{
                                click: () => {
                                    this.props.setShootValue(15);
                                }
                            }} primitive="a-ring" color="#444" radius-inner="0.19" radius-outer="0.26" position="0 0 0.04"></Entity>
                            <Entity events={{
                                click: () => {
                                    this.props.setShootValue(30);
                                }
                            }} primitive="a-circle" radius="0.1" color="#222" position="0 0 0.04"></Entity>
                        </Entity>
                    </Entity>
                </Entity>
            </Entity>
        );
    }
}

TargetComponent.propTypes = {
    setShootValue: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(TargetComponent);
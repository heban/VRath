import { Entity } from "aframe-react";
import React from "react";
import { connect } from "react-redux";
import { addBullets } from "../redux/actions.js";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => ({
    addBullets: () => dispatch(addBullets())
});

class CameraComponent extends React.Component {
    componentDidMount() {
        document.querySelector("a-cursor").addEventListener("click", this.addBullets.bind(this));
    }
    componentWillUnmount() {
        document.querySelector("a-cursor").removeEventListener("click", this.addBullets.bind(this));
    }
    addBullets() {
        this.props.addBullets();
    }
    render() {
        return (
            <Entity primitive="a-camera" wasd-controls="enabled: false" position="0 0 10">
                <Entity primitive="a-cursor" 
                    geometry="primitive: ring; radiusInner: 0.00001; radiusOuter: 0.04" 
                    material="src: #crosshairTexture" 
                    sound="src: #shot; on: click; poolSize: 10; volume: 0.2" />
            </Entity>
        );
    }
}

CameraComponent.propTypes = {
    addBullets: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(CameraComponent);
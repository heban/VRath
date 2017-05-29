import { Entity } from "aframe-react";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ScoreboardComponent = ({ points, bullets }) => {
    let pointsValue = `value: Points: ${points}`;
    let bulletsValue = `value: Bullets: ${bullets}`;
    
    return (
        <Entity primitive="a-box" color="#575757" depth="1" height="0.2" width="5" position="0 4.92 5">
            <Entity primitive="a-box" color="#222222" depth="0.1" height="1.25" width="3" position="0 -0.505 0.021" rotation="45 0 0">
                <Entity text={pointsValue} position="1 0.21 0.05" scale="4.6 6.64 1"></Entity>
                <Entity text={bulletsValue} position="1 -0.18 0.05" scale="4.6 6.64 1"></Entity>
            </Entity>
        </Entity>
    );
};

ScoreboardComponent.propTypes = {
    points: PropTypes.number.isRequired,
    bullets: PropTypes.number.isRequired
};

export default connect(({ points, bullets }) => ({
    points,
    bullets
}))(ScoreboardComponent);
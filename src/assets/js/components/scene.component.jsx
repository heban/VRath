import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "aframe-animation-component";
import { Scene } from "aframe-react";
import AssetsManager from "./assets-manager.component.jsx";
import Arena from "./arena.component.jsx";
import ArenaLights from "./arena-lights.component.jsx";
import Camera from "./camera.component.jsx";
import Target from "./target.component.jsx";
import Details from "./details.component.jsx";
import Scoreboard from "./scoreboard.component.jsx";
import LoaderComponent from "./loader.component.jsx";

const SceneComponent = ({ loader }) => (
    <div className="vrath-scene">
        <Scene>
            <AssetsManager />
            <Arena />
            <Camera />
            <ArenaLights />
            <Details />
            <Target />
            <Scoreboard />
        </Scene>

        {loader ? <LoaderComponent /> : null}
    </div>
);

SceneComponent.propTypes = {
    loader: PropTypes.bool.isRequired
};

export default connect(({ loader }) => ({
    loader
}))(SceneComponent);
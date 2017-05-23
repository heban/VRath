import React from "react";
import "aframe-animation-component";
import "../redux/reducer.js";
import AssetsManager from "./assets-manager.component.jsx";
import Arena from "./arena.component.jsx";
import ArenaLights from "./arena-lights.component.jsx";
import Camera from "./camera.component.jsx";
import Target from "./target.component.jsx";
import Details from "./details.component.jsx";

const SceneComponent = () => (
    <a-scene redux="reducers: vrathReducer">
        <AssetsManager />
        <Arena />
        <Camera />
        <ArenaLights />
        <Details />
        <Target />
    </a-scene>
);

export default SceneComponent;
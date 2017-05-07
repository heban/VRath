import React from "react";
import { Scene } from "aframe-react";
import "aframe-animation-component";
import AssetsManager from "./assets-manager.component.jsx";
import Arena from "./arena.component.jsx";
import ArenaLights from "./arena-lights.component.jsx";
import Camera from "./camera.component.jsx";
import Target from "./target.component.jsx";

const SceneComponent = () => (
    <Scene stats>
        <AssetsManager />
        <Arena />
        <Camera />
        <ArenaLights />
        <Target />
    </Scene>
);

export default SceneComponent;
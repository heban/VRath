import { Scene } from "aframe-react";
import React from "react";
import AssetsManager from "./assets-manager.component.jsx";
import Arena from "./arena.component.jsx";
import ArenaLights from "./arena-lights.component.jsx";
import Camera from "./camera.component.jsx";

const SceneComponent = () => (
    <Scene stats>
        <AssetsManager />
        <Arena />
        <Camera />
        <ArenaLights />
    </Scene>
);

export default SceneComponent;
import { Scene, Entity } from "aframe-react";
import React from "react";

const SceneComponent = () => (
    <Scene>
        <Entity primitive="a-sphere" radius="100" color="#258bd6" />
        <Entity primitive="a-camera" position="0 0 500" />
    </Scene>
);

export default SceneComponent;
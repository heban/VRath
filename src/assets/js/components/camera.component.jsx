import { Entity } from "aframe-react";
import React from "react";

const CameraComponent = () => (
    <Entity primitive="a-camera" wasd-controls="enabled: false" position="0 0 10">
        <Entity primitive="a-cursor" geometry="primitive: ring; radiusInner: 0.00001; radiusOuter: 0.04" material="src: #crosshairTexture" />
    </Entity>
);

export default CameraComponent;
import { Entity } from "aframe-react";
import React from "react";

const CameraComponent = () => (
    <Entity primitive="a-camera" wasd-controls="enabled: true" position="0 0 10">
        <Entity primitive="a-cursor" 
            geometry="primitive: ring; radiusInner: 0.00001; radiusOuter: 0.04" 
            material="src: #crosshairTexture" 
            sound="src: #shot; on: click; poolSize: 10" />
    </Entity>
);

export default CameraComponent;
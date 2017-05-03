import { Entity } from "aframe-react";
import React from "react";

const ArenaComponent = () => (
    <Entity>
        <Entity primitive="a-plane" material="src: #floorTexture" repeat="12.5 12.5" width="25" height="25" rotation="-90 0 0" />
        <Entity primitive="a-plane" material="src: #wallTexture" repeat="5 1" width="25" height="5" rotation="180 0 0" position="0 2.5 12.5" />
        <Entity primitive="a-plane" material="src: #wallTexture" repeat="5 1" width="25" height="5" rotation="0 0 0" position="0 2.5 -12.5" />
        <Entity primitive="a-plane" material="src: #wallTexture" repeat="5 1" width="25" height="5" rotation="0 -90 0" position="12.5 2.5 0" />
        <Entity primitive="a-plane" material="src: #wallTexture" repeat="5 1" width="25" height="5" rotation="0 90 0" position="-12.5 2.5 0" />
        <Entity primitive="a-plane" material="src: #ceilTexture" repeat="5 5" width="25" height="25" rotation="90 0 0" position="0 5 0" />
    </Entity>
);

export default ArenaComponent;
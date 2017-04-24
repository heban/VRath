import { Scene, Entity } from "aframe-react";
import React from "react";
import floorImg from "../../images/stone.png";
import crosshairImg from "../../images/crosshair.png";

const SceneComponent = () => (
    <Scene stats>
        <Entity primitive="a-assets">
            <img id="floorTexture" src={floorImg} />
            <img id="crosshairTexture" src={crosshairImg} />
        </Entity>
        <Entity primitive="a-plane" material="src: #floorTexture" repeat="5 5" width="25" height="25" rotation="-90 0 0" />
        <Entity primitive="a-camera" wasd-controls="enabled: false">
            <Entity primitive="a-cursor" geometry="primitive: ring; radiusInner: 0.00001; radiusOuter: 0.04" material="src: #crosshairTexture" />
        </Entity>
    </Scene>
);

export default SceneComponent;
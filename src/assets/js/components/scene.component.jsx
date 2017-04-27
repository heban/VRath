import { Scene, Entity } from "aframe-react";
import React from "react";
import floorImg from "../../images/stone.png";
import crosshairImg from "../../images/crosshair.png";
import ceilImg from "../../images/wall2.jpg";
import wall2Img from "../../images/wall2.png";

const SceneComponent = () => (
    <Scene stats>
        <Entity primitive="a-assets">
            <img id="floorTexture" src={floorImg} />
            <img id="crosshairTexture" src={crosshairImg} />
            <img id="ceilTexture" src={ceilImg} />
            <img id="wallTexture" src={wall2Img} />
        </Entity>
        <Entity primitive="a-plane" material="src: #floorTexture" repeat="12.5 12.5" width="25" height="25" rotation="-90 0 0" />
        <Entity primitive="a-plane" material="src: #wallTexture" repeat="5 1" width="25" height="5" rotation="180 0 0" position="0 2.5 12.5" />
        <Entity primitive="a-plane" material="src: #wallTexture" repeat="5 1" width="25" height="5" rotation="0 0 0" position="0 2.5 -12.5" />
        <Entity primitive="a-plane" material="src: #wallTexture" repeat="5 1" width="25" height="5" rotation="0 -90 0" position="12.5 2.5 0" />
        <Entity primitive="a-plane" material="src: #wallTexture" repeat="5 1" width="25" height="5" rotation="0 90 0" position="-12.5 2.5 0" />
        <Entity primitive="a-plane" material="src: #ceilTexture" repeat="5 5" width="25" height="25" rotation="90 0 0" position="0 5 0" />
        <Entity primitive="a-camera" wasd-controls="enabled: false" position="0 0 10">
            <Entity primitive="a-cursor" geometry="primitive: ring; radiusInner: 0.00001; radiusOuter: 0.04" material="src: #crosshairTexture" />
        </Entity>
        <Entity primitive="a-light" type="spot" intensity="1" penumbra="0.3" color="#fff" position="0 1 5" rotation="-15 0 0"></Entity>
        <Entity primitive="a-light" type="point" intensity="0.5" color="green" position="0 3 5"></Entity>
        <Entity primitive="a-light" type="point" intensity="0.2" color="#fff" position="0 3 12"></Entity>
    </Scene>
);

export default SceneComponent;
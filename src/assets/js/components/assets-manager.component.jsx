import { Entity } from "aframe-react";
import React from "react";
import floorImg from "../../images/stone.png";
import crosshairImg from "../../images/crosshair.png";
import ceilImg from "../../images/wall2.jpg";
import wallImg from "../../images/wall2.png";

const AssetsManagerComponent = () => (
    <Entity primitive="a-assets">
        <img id="floorTexture" src={floorImg} />
        <img id="crosshairTexture" src={crosshairImg} />
        <img id="ceilTexture" src={ceilImg} />
        <img id="wallTexture" src={wallImg} />
    </Entity>
);

export default AssetsManagerComponent;
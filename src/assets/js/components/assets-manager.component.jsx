import React from "react";
import floorImg from "../../images/stone.png";
import crosshairImg from "../../images/crosshair.png";
import ceilImg from "../../images/wall2.jpg";
import wallImg from "../../images/wall2.png";
import shotMp3 from "../../sounds/shot.mp3";
import "../../images/bumpy-olive-green-plastic-texture.jpg";
import "../../images/Lock.png";
import healthPackObj from "../../images/health-pack.obj";
import healthPackMtl from "../../images/health-pack.mtl";

const AssetsManagerComponent = () => (
    <a-assets>
        <img id="floorTexture" src={floorImg} />
        <img id="crosshairTexture" src={crosshairImg} />
        <img id="ceilTexture" src={ceilImg} />
        <img id="wallTexture" src={wallImg} />
        <audio id="shot" src={shotMp3}></audio>
        <a-asset-item id="healthPackObj" src={healthPackObj}></a-asset-item>
        <a-asset-item id="healthPackMtl" src={healthPackMtl}></a-asset-item>
    </a-assets>
);

export default AssetsManagerComponent;
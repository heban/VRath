import { Entity } from "aframe-react";
import React from "react";

const DetailsComponent = () => (
    <Entity>
        <Entity obj-model="obj: #healthPackObj; mtl: #healthPackMtl" position="10 -0.5 4" />
        <Entity primitive="a-image" src="#armyWomanPoster" width="1.9" height="2" position="-12.42 3.091 8.824" rotation="0 90 0" />
        <Entity primitive="a-box" src="#boxImg" width="2" height="2" depth="2" position="-5.578 1.035 1.044" rotation="0 51.410 0" />
        <Entity primitive="a-cone" color="#222222" radius-bottom="0.65" radius-top="0" position="0 -0.067 5.341" rotation="0 -90 -90"/>
    </Entity>
);

export default DetailsComponent;
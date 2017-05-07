import { Entity } from "aframe-react";
import React from "react";

const TargetComponent = () => (
    <Entity primitive="a-sphere" radius="0.5" color="#fff" position="10 2.5 -5" animation={{
        property: "position",
        dir: "alternate",
        dur: 4000,
        easing: "easeInOutCubic", 
        loop: true,
        to: "-10 2.5 -5"
    }} events={{
        click: () => {
            console.log("Hit!");
        }
    }} />
);

export default TargetComponent;
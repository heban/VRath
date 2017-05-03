import { Entity } from "aframe-react";
import React from "react";

const ArenaLightsComponent = () => (
    <Entity>
        <Entity primitive="a-light" type="spot" intensity="1" penumbra="0.3" color="#fff" position="0 1 5" rotation="-15 0 0"></Entity>
        <Entity primitive="a-light" type="point" intensity="0.5" color="green" position="0 3 5"></Entity>
        <Entity primitive="a-light" type="point" intensity="0.2" color="#fff" position="0 3 12"></Entity>
    </Entity>
);

export default ArenaLightsComponent;
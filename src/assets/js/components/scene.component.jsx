import { Scene, Entity } from "aframe-react";
import React from "react";

const SceneComponent = () => (
    <Scene stats>
        <Entity primitive="a-plane" color="#FF0000" width="25" height="25" rotation="-90 0 0" 
            material="shader: flat; color: red" />

    </Scene>
);

export default SceneComponent;
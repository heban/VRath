import React from "react";
import SphereComponent from "./sphere.component.jsx";
import CameraComponent from "./camera.component.jsx";

const SceneComponent = () => (
    <a-scene>
    	<SphereComponent />
    	<CameraComponent />
    </a-scene>
);

export default SceneComponent;
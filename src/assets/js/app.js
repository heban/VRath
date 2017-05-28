import "../sass/app.scss";
import "aframe";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import gameState from "./redux/reducer.js";
import SceneComponent from "./components/scene.component.jsx";

let appStore = createStore(gameState);

const AppComponent = () => (
    <Provider store={appStore}>
        <SceneComponent />
    </Provider>
);

render(<AppComponent />, document.getElementById("vrath-wrapper"));
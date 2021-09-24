import React from "react";
import Button from "../components/Button";

const Main = () => {
    return (
        <div>
            <h1>Dark Theme Switcher</h1>
            <Button text="auto" />
            <Button text="dark" />
            <Button text="light" />
        </div>
    );
};

export default Main;

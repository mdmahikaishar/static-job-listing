import React from "react";
import { AppContextProvider } from "./context/App";
import { Home } from "./page";
import "./styles/main.scss";

export default function App() {
    return (
        <AppContextProvider>
            <Home />
        </AppContextProvider>
    );
}

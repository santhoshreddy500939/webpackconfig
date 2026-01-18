import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header/header";
import Paragraph from "./Components/Paragraph/paragraph";

function App(){
    return (
        <>
        <Header/>
        <Paragraph/>
        </>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App/>);

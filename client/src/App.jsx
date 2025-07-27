import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

const App = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
            </Routes>
        </>
    );
};
export default App;

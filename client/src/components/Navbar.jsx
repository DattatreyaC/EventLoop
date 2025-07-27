import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full border-b-4 border-double border-b-white p-3 flex items-center justify-around text-red z-50 bg-black/60 [backdrop-filter:blur(5px)]">
                <div id="Logo">
                    <h1 className="text-2xl">EventLoop</h1>
                </div>

                <div
                    id="NavLinks"
                    className="flex gap-3 items-center justify-center text-red font-semibold"
                >
                    <a href="#home">Home</a>
                    <a href="#events">Events</a>
                    <a href="#contact">Contact</a>

                    <button className="bg-white text-black flex p-1 gap-1 rounded font-semibold cursor-pointer">
                        <h3>Register with</h3>
                        <img
                            src="google-icon.png"
                            alt="google"
                            className="w-6"
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;

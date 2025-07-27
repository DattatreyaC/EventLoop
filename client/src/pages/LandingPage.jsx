import React from "react";
import Home from "./Home";
import Events from "./Events";
import Contact from "./Contact";

const LandingPage = () => {
    return (
        <div className="bg-transparent text-white">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className=" w-full h-full object-cover fixed top-0 left-0 z-[-1]"
                src="bg-vid.mp4"
            ></video>

            {/* <img
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3V0bnpkb2oybDQ5ZjlxZTNjc29ocjBremx5dXVqeWU5NTFmMnZuaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dVtfrb8be6eNN9cjbP/giphy.gif"
                alt=""
            /> */}

            <Home />
            <Events />
            <Contact />
        </div>
    );
};

export default LandingPage;

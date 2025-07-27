import React from "react";

const EventCard = ({
    title,
    description,
    participation,
    prize,
    certificates,
    color,
}) => {
    return (
        <div
            className={`border ${
                color === "red" ? "border-red" : "border-golden"
            } w-[350px] flex flex-col gap-3 rounded overflow-hidden bg-gray-950/90 backdrop-blur-xs group transition-all duration-300`}
        >
            {/* heading */}
            <div
                className={`text-center border-b ${
                    color === "red" ? "border-b-red" : "border-b-golden"
                } p-2 bg-black/50`}
            >
                <h1 className="text-3xl font-semibold">
                    {title.prefix}
                    <span
                        className={`${
                            color === "red" ? "text-red" : "text-golden"
                        }`}
                    >
                        {title.suffix}
                    </span>
                </h1>
                <p className="text-sm">{description}</p>
            </div>

            <p className="px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quaerat temporibus aut accusantium unde officia impedit
                aspernatur autem veniam sunt!
            </p>

            {/* team */}
            <h3 className="text-lg px-3 font-thin">
                <span className="font-bold">Participation</span> :{" "}
                {participation}
            </h3>

            {/* prizes */}
            <div className="px-3">
                <h2 className="text-lg ">Rewards :</h2>
                <ul className="flex gap-3">
                    <li className="text-golden">
                        1 : <span className="text-white font-thin">₹ </span>
                        {prize.first}
                    </li>
                    <li className="text-gray-400">
                        2 : <span className="text-white font-thin">₹ </span>
                        {prize.second}
                    </li>
                    <li className="text-orange-900">
                        3 : <span className="text-white font-thin">₹ </span>
                        {prize.third}
                    </li>
                </ul>
            </div>

            {/* certs */}
            <div className="px-3">
                <h2 className="text-lg ">Certificates :</h2>
                <ul>
                    <li className="list-disc ml-6">
                        Physical : {certificates.physical}
                    </li>
                    <li className="list-disc ml-6">
                        Digital : {certificates.digital}
                    </li>
                </ul>
            </div>

            {/* register button */}
            <div
                className={`p-2 text-center w-full text-shadow-[1px_1px_0_black] ${
                    color === "red" ? "bg-red/80" : "bg-golden/80"
                } cursor-pointer transition-all duration-200 hover:bg-white hover:${
                    color === "red" ? "text-red" : "text-golden"
                }`}
            >
                Register
            </div>
        </div>
    );
};

export default EventCard;

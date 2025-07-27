import React from "react";
import EventCard from "../components/EventCard";

const Events = () => {
    const events = [
        {
            title: {
                prefix: "Code",
                suffix: "Clash",
            },
            description: "DSA Competition",
            participation: "Individual",
            prize: {
                first: 2500,
                second: 1500,
                third: 1000,
            },
            certificates: {
                physical: "Top 3",
                digital: "All finalists",
            },
            color: "red",
        },
        {
            title: {
                prefix: "Vibe",
                suffix: "Dev",
            },
            description: "Web Development Hackathon",
            participation: "Team of 2 (Duo)",
            prize: {
                first: 2500,
                second: 1500,
                third: 1000,
            },
            certificates: {
                physical: "Top 3 teams(6 members)",
                digital: "All finalists",
            },
            color: "golden",
        },
        {
            title: {
                prefix: "Flag",
                suffix: "Forge",
            },
            description: "Capture the flag/Cryptography",
            participation: "Team of 2 (Duo)",
            prize: {
                first: 2500,
                second: 1500,
                third: 1000,
            },
            certificates: {
                physical: "Top 3 teams(6 members)",
                digital: "All finalists",
            },
            color: "red",
        },
    ];

    return (
        <section
            id="events"
            className="min-h-screen py-20 flex flex-col items-center"
        >
            <div id="Heading" className="text-5xl font-bold">
                Our{" "}
                <span className="text-golden text-shadow-[0_0_3px_white]">
                    Events
                </span>
            </div>

            <div
                id="events-container"
                className="w-full flex items-center justify-evenly flex-1"
            >
                {events.map((event, i) => {
                    return (
                        <React.Fragment key={i}>
                            <EventCard
                                title={event.title}
                                description={event.description}
                                participation={event.participation}
                                prize={event.prize}
                                certificates={event.certificates}
                                color={event.color}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        </section>
    );
};

export default Events;

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Home = () => {
    const headingRef = useRef(null);
    const tagRef = useRef(null);
    const locationRef = useRef(null);
    const dateRef = useRef(null);
    const pinRef = useRef(null);
    const calRef = useRef(null);

    useEffect(() => {
        let tagSplit = SplitText.create(tagRef.current, { type: "words" });
        let locSplit = SplitText.create(locationRef.current, { type: "chars" });

        const timeline = gsap.timeline();

        timeline.from(headingRef.current, {
            opacity: 0,
            x: 500,
            duration: 1,
            stagger: 1,
        });

        timeline.from(
            tagSplit.words,
            {
                duration: 0.3,
                scale: 25,
                autoAlpha: 0,
                stagger: 0.33,
                ease: "circ.inOut",
            },
            "-=0.5",
        );

        timeline.from(
            locSplit.chars,
            {
                x: 250,
                autoAlpha: 0,
                duration: 0.5,
                ease: "power4.out",
                stagger: 0.13,
            },
            "-=1.5",
        );
        timeline.from(
            pinRef.current,
            {
                y: -5,
                autoAlpha: 0,
                duration: 1,
                ease: "bounce.out",
                repeat: -1,
                yoyo: true,
                yoyoEase: true,
                repeatDelay: 0.2,
            },
            "-=2",
        );
        timeline.from(
            calRef.current,
            {
                y: -300,
                duration: 1,
            },
            "-=2",
        );
        timeline.from(
            dateRef.current,
            {
                x: -50,
                autoAlpha: 0,
                duration: 1,
                ease: "power1.inOut",
            },
            "-=1",
        );

        return () => {
            tagSplit.revert();
            locSplit.revert();
        };
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen py-20 flex flex-col items-center justify-center"
        >
            <div className=" p-40 flex relative border">
                <div className=" flex flex-col p-15 py-7 items-center justify-center relative">
                    <h3
                        ref={locationRef}
                        className="absolute flex top-0 left-0 text-red font-bold text-xl"
                    >
                        {/* location icon */}
                        <i
                            ref={pinRef}
                            className="ri-map-pin-line font-thin text-xl text-white "
                        ></i>
                        JADAVPUR
                        <span className="text-white">&nbsp;UNIVERSITY</span>
                    </h3>

                    <h1 ref={headingRef} className="text-9xl font-bold flex">
                        <span className="bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">
                            Event
                        </span>
                        <span className="bg-gradient-to-r from-red to-red-950 bg-clip-text text-transparent">
                            Loop
                        </span>
                        <span className=" bg-gradient-to-br from-yellow-200 via-golden to-yellow-800 bg-clip-text text-transparent font-normal text-8xl">
                            '25
                        </span>
                    </h1>
                    <p ref={tagRef} className="text-xl font-black italic">
                        Welcome to the Ultimate Async Experience !
                    </p>

                    <h3
                        ref={dateRef}
                        className="absolute bottom-0 right-0 text-2xl font-thin"
                    >
                        {/* calendar icon */}
                        <i
                            ref={calRef}
                            className="ri-calendar-event-line font-extralight text-[18px]"
                        ></i>{" "}
                        August&nbsp;
                        <span className="text-golden font-bold animate-pulse text-4xl">
                            28
                        </span>
                        , <span className="text-red font-semibold">2025</span>
                    </h3>
                </div>

                {/* <div className=" absolute bottom-[0] left-[50%]">
                    <p className="text-2xl">
                        A tech fest that never blocks the main thread{" "}
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default Home;

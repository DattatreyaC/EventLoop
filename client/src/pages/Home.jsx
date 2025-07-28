import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Home = () => {
    const headingRef1 = useRef(null);
    const headingRef2 = useRef(null);
    const headingDateRef = useRef(null);
    const tagRef = useRef(null);
    const locationRef = useRef(null);
    const dateRef = useRef(null);
    const pinRef = useRef(null);
    const calRef = useRef(null);
    const buttonRef = useRef(null);
    const arrowRef = useRef(null);
    const loopRef = useRef(null);

    useEffect(() => {
        let tagSplit = SplitText.create(tagRef.current, { type: "words" });
        let locSplit = SplitText.create(locationRef.current, { type: "chars" });

        const timeline = gsap.timeline();

        timeline.from(headingRef1.current, {
            opacity: 0,
            x: 500,
            duration: 0.5,
            ease: "power3.inOut",
        });
        timeline.from(
            headingRef2.current,
            {
                autoAlpha: 0,
                x: -500,
                duration: 0.5,
                ease: "power3.inOut",
            },
            "-=0.2",
        );
        timeline.from(
            headingDateRef.current,
            {
                y: -150,
                autoAlpha: 0,
                duration: 0.7,
                ease: "power3.out",
            },
            "-=0.01",
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
            "-=0.7",
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
                stagger: 0.2,
            },
            "-=1",
        );
        timeline.from(tagSplit.words, {
            autoAlpha: 0,
            scale: 25,
            duration: 0.2,
            stagger: 0.2,
        });
        timeline.from(
            buttonRef.current,
            {
                autoAlpha: 0,
                duration: 1.3,
                y: -10,
            },
            "-=0.7",
        );
        timeline.from(
            loopRef.current,
            {
                autoAlpha: 0,
                duration: 0.5,
            },
            "<",
        );

        gsap.to(arrowRef.current, {
            opacity: 1,
            y: 30,
            duration: 1.25,
            repeat: -1,
            yoyo: true,
            yoyoEase: "power1.in",
            ease: "circ.out",
        });

        return () => {
            tagSplit.revert();
            locSplit.revert();
            tagSplit = null;
            locSplit = null;
        };
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen py-20 flex flex-col items-center justify-center bg-black/40"
        >
            <div className=" p-40 flex flex-col relative items-center justify-center ">
                <img
                    ref={loopRef}
                    src="loop.gif"
                    alt="loop"
                    className="absolute w-50 bottom-[-13%] z-10 opacity-50"
                />

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

                    <h1 className="text-9xl font-bold flex">
                        <span
                            ref={headingRef1}
                            className="bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text"
                        >
                            Event
                        </span>
                        <span
                            ref={headingRef2}
                            className="bg-gradient-to-r from-red to-red-950 bg-clip-text text-transparent"
                        >
                            Loop
                        </span>
                        <span
                            ref={headingDateRef}
                            className=" bg-gradient-to-br from-yellow-200 via-golden to-yellow-800 bg-clip-text text-transparent font-thin text-8xl"
                        >
                            '25
                        </span>
                    </h1>

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
                <p
                    id="tagline"
                    ref={tagRef}
                    className="text-2xl font-black italic text-golden"
                >
                    Welcome to the Ultimate Async Experience !
                </p>

                <a
                    href="#events"
                    ref={buttonRef}
                    className="flex border-1 border-gray-400/50 hover:border-white text-center w-max absolute bottom-0 text-lg font-thin rounded-full px-1.5 h-15 bg-gradient-to-br from-gray-800/30 via-gray-400/20  to-white/20  hover:shadow-[0_0_3px_red,0_0_10px_white] transition-shadow duration-200 z-20"
                >
                    <div className="relative w-3 h-full">
                        <i
                            id="down-arrow"
                            ref={arrowRef}
                            className="ri-arrow-down-s-fill text-lg opacity-30 absolute top-0 left-[-25%] "
                        ></i>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Home;

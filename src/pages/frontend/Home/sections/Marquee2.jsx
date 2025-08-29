import React from 'react';
import Marquee from 'react-fast-marquee';

const Marquee2 = () => {
    const Text = [
        ".", "search optimized",
        ".", "Engaging",
        ".", "Responsive",
        ".", "Dynamic",
        ".", "Scalable",
        ".", "Interactive",
        ".", "Secure",
        ".", "Reliable",
        ".", "Accessible",
        ".", "Experienced",
    ];

    return (
        <div className="relative flex flex-col justify-center items-center gap-16 ">
            {/* First line → rotate clockwise */}
            <div className="rotate-4 sm:rotate-2 w-full relative top-15 ">
                <Marquee autoFill={true}>
                    <div className="uppercase font-semibold text-xl flex gap-4 items-center blur-[2px] bg-gradient-to-r text-transparent from-blue-800 via-blue-700 opacity-70 to-blue-800 outfit-main py-3">
                        {Text.map((text, index) =>
                            text === "." ? (
                                <span key={index} className=" flex items-center justify-center">•</span>
                            ) : (
                                <span key={index}>{text}</span>
                            )
                        )}
                    </div>
                </Marquee>
            </div>

            {/* Second line → rotate counter-clockwise */}
            <div className="-rotate-4 sm:-rotate-2 w-full relative -top-14 outfit-">
                <Marquee direction="right" autoFill={true}>
                    <div className="uppercase font-semibold text-xl flex gap-4 items-center bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 outfit-main py-3">
                        {Text.map((text, index) =>
                            text === "." ? (
                                <span key={index} className=" flex items-center justify-center">•</span>
                            ) : (
                                <span key={index}>{text}</span>
                            )
                        )}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Marquee2;

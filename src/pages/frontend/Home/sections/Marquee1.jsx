import React from 'react';
import Marquee from 'react-fast-marquee';

const Marquee1 = () => {
    const Text = [
        ".", "INNOVATIVE",
        ".", "CREATIVE",
        ".", "TECHNICAL",
        ".", "passionate",
        ".", "EXPERIENCED",
        ".", "PROFESSIONAL",
        ".", "PROBLEM SOLVING",
        ".", "TECHNICAL",
        ".", "passionate",
        ".", "EXPERIENCED",
        ".", "PROFESSIONAL",
        ".", "PROBLEM SOLVING",
    ]

    return (
        <div>
            <Marquee>
                <div className="uppercase font-bold text-6xl flex gap-2 items-center">
                    {Text.map((text, index) => (
                        text === "." ? (
                            <span key={index} className="text-4xl flex items-center justify-center">•</span>
                        ) : (
                            <span key={index}>{text}</span>
                        )
                    ))}
                </div>
            </Marquee>

        </div>
    );
};

export default Marquee1;
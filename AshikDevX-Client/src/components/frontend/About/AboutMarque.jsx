"use client";

import MyBadge from "@/components/ui/MyBadge";
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import Marquee from "react-fast-marquee";
import MarqueData from "@/data/MarqueData";
const FallingGlitch = ({
    glitchColors = ["#ff7cce", "#7cf0ff", "#fcf07c", "#8E44AD", "#3498DB"],
    fontSize = 14,
    backgroundColor = "#080A12",
    glitchSpeed = 50,
    glitchIntensity = 0.05,
    fallSpeed = 0.75,
    outerVignette = true,
    children
}) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationFrameId = useRef(null);
    const grid = useRef({
        columns: 0,
        rows: 0,
        charWidth: 0,
        charHeight: 0
    });
    const letters = useRef([]);
    const lastGlitchTime = useRef(0);
    const characterSet = useMemo(() => '.:*+=#%@",', []);
    const getRandomChar = useCallback(() => characterSet[Math.floor(Math.random() * characterSet.length)], [characterSet]);
    const getRandomColor = useCallback(() => glitchColors[Math.floor(Math.random() * glitchColors.length)], [glitchColors]);
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let canvasWidth = 0;
        let canvasHeight = 0;
        const setup = () => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            const dpr = window.devicePixelRatio || 1;
            const rect = container.getBoundingClientRect();
            canvasWidth = rect.width;
            canvasHeight = rect.height;
            canvas.width = canvasWidth * dpr;
            canvas.height = canvasHeight * dpr;
            canvas.style.width = `${canvasWidth}px`;
            canvas.style.height = `${canvasHeight}px`;
            ctx.scale(dpr, dpr);
            ctx.font = `${fontSize}px monospace`;
            const charMetrics = ctx.measureText("M");
            grid.current = {
                columns: Math.floor(canvasWidth / charMetrics.width),
                rows: Math.floor(canvasHeight / (fontSize * 1.2)),
                charWidth: charMetrics.width,
                charHeight: fontSize * 1.2
            };
            const extendedRows = grid.current.rows * 2;
            const totalLetters = grid.current.columns * extendedRows;
            letters.current = Array.from({
                length: totalLetters
            }, (_, i) => {
                const col = i % grid.current.columns;
                const row = Math.floor(i / grid.current.columns);
                return {
                    char: getRandomChar(),
                    x: col * grid.current.charWidth,
                    y: row * grid.current.charHeight - grid.current.rows * grid.current.charHeight,
                    color: getRandomColor()
                };
            });
            animationFrameId.current = requestAnimationFrame(animate);
        };
        const animate = timestamp => {
            animationFrameId.current = requestAnimationFrame(animate);
            if (timestamp - lastGlitchTime.current > glitchSpeed) {
                lastGlitchTime.current = timestamp;
                const updateCount = Math.floor(letters.current.length * glitchIntensity);
                for (let i = 0; i < updateCount; i++) {
                    const index = Math.floor(Math.random() * letters.current.length);
                    if (letters.current[index]) {
                        letters.current[index].char = getRandomChar();
                        letters.current[index].color = getRandomColor();
                    }
                }
            }
            const totalFieldHeight = grid.current.rows * grid.current.charHeight * 2;
            letters.current.forEach(letter => {
                letter.y += fallSpeed;
                if (letter.y > canvasHeight) {
                    letter.y -= totalFieldHeight;
                }
            });
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            ctx.font = `${fontSize}px monospace`;
            ctx.textBaseline = "top";
            letters.current.forEach(letter => {
                ctx.fillStyle = letter.color;
                ctx.fillText(letter.char, letter.x, letter.y);
            });
        };
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(setup, 150);
        };
        window.addEventListener("resize", handleResize);
        setup();
        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [glitchColors, fontSize, backgroundColor, glitchSpeed, glitchIntensity, fallSpeed, getRandomChar, getRandomColor]);
    return <div ref={containerRef} className="relative w-full h-full bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        {outerVignette && <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle,_transparent_70%,_black_100%)]"></div>}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
            {children}
        </div>
    </div>;
};

console.log(MarqueData)
export default function AboutMarque() {


    return <div className="relative w-full h-full overflow-hidden">

        <FallingGlitch

        >
            <div
                className="absolute inset-0 z-0 opacity-80"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
                }}
            />

            <div className="flex z-10 flex-col items-center py-10   justify-between w-full h-full">

                <div className=" p-1">
                    <h1 className="text-2xl text-center font-bold                    
                    ">Passionate About Cutting- edge technologies</h1>
                </div>
                {/* marquee Container  */}
                <div className="flex justify-between w-full flex-col gap-y-10">
                    <div className="p-1 w-full">
                        <Marquee speed={30} pauseOnHover={true}>
                            {[...Array(2)].map((_, loopIndex) =>
                                MarqueData &&
                                MarqueData.slice(0, 3).map((item, index) => (
                                    <MyBadge
                                        key={`${loopIndex}-${item.icon}`} // unique key for React
                                        text={item.icon}
                                        iconKey={item.iconKey}
                                        display="2"
                                    />
                                ))
                            )}
                        </Marquee>
                        {/* <MyBadge text="React" iconKey={"react"} display="2" /> */}
                    </div>

                    <div className="p-1 w-full">
                        <Marquee speed={40} pauseOnHover={true} direction="right">
                            {[...Array(2)].map((_, loopIndex) =>
                                MarqueData &&
                                MarqueData.slice(4, 8).map((item, index) => (
                                    <MyBadge
                                        key={`${loopIndex}-${item.icon}`} // unique key for React
                                        text={item.icon}
                                        iconKey={item.iconKey}
                                        display="2"
                                    />
                                ))
                            )}
                        </Marquee>

                    </div>
                    <div className="p-1 w-full">

                        <Marquee speed={50} pauseOnHover={true}>
                            {[...Array(2)].map((_, loopIndex) =>
                                MarqueData &&
                                MarqueData.slice(9, 13).map((item, index) => (
                                    <MyBadge
                                        key={`${loopIndex}-${item.icon}`} // unique key for React
                                        text={item.icon}
                                        iconKey={item.iconKey}
                                        display="2"
                                    />
                                ))
                            )}
                        </Marquee>

                    </div>
                </div>

                <div className="p-20 group border hover:shadow-xl translate-y-10">
                    {/* X Organizations Black Background with Top Glow */}
                    <div
                        className="absolute inset-0 z-0 opacity-80"
                        style={{
                            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
                        }}
                    />
                    <img className=" opacity-0" src="/assets/images/grid-1.jpg" alt="" />


                    <img className="absolute 
                      shadow-2xl shadow-sky-200/50
                             top-15  left-1/2 -translate-x-1/2 group-hover:translate-40 group-hover:scale-50 w-8/12 rounded-xl  
                            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]" src="/assets/images/grid-1.jpg" alt="" />
                    <img className="absolute
                            top-15 
                            group-hover:shadow-2xl shadow-orange-200/50
                             group-hover:left-1/2 group-hover:-translate-x-1/2
                             group-hover:translate-y-0 group-hover:scale-100
                             translate-y-40 -translate-x-80 scale-50
                             
                             
                             w-8/12 rounded-xl  
                            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]" src="/assets/images/grid-2.jpg" alt="" />
                </div>
                {/* <div className="p-1"></div> */}

            </div>

        </FallingGlitch>
    </div>;
}
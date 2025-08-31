import { Copy, HandGrab } from 'lucide-react';
import React from 'react';
import { LiaLayerGroupSolid } from "react-icons/lia";

const WorkTogether = () => {
    return (
        <div className='flex items-center justify-center w-full h-full text-white' >
            {/* Dark Sphere Grid Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "#020617",
                    backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
                    backgroundSize: "32px 32px, 32px 32px, 100% 100%",
                }}
            />
            <div className='z-10 h-full flex flex-col font-semibold items-center justify-center gap-4 text-center'>
                <div>
                    <LiaLayerGroupSolid size={60} />
                </div>
                <h1 className='outfit-main text-3xl'>Let's Work together <br /> on your next project</h1>

                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <Copy />  mdaashikur@gmail.com
                </div>
            </div>

        </div>
    );
};

export default WorkTogether;
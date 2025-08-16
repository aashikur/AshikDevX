import { IconLibrary } from '@/components/icons/IconLibrary';
import MyBadge from '@/components/ui/MyBadge';
import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';
import MarqueData from "@/data/MarqueData";
const TechStack = () => {
    
console.log( "TEST LIBEARY",MarqueData)
    
    return (
        <div>
            <SectionTitle></SectionTitle>
            <div className='flex flex-wrap justify-center gap-1 px-4  max-w-2xl mx-auto'>
      
            {MarqueData.map((item, index) => (
                <MyBadge key={index} text={item.icon} display='1' iconKey={item.iconKey} />
            ))}
      
            </div>
        </div>
    );
};

export default TechStack;
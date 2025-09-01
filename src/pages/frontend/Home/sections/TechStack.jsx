import { IconLibrary } from '@/components/icons/IconLibrary';
import MyBadge from '@/components/ui/MyBadge';
import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';
import MarqueData from "@/data/MarqueData";
import Section from '@/components/ui/Section';
const TechStack = () => {
    
console.log( "TEST LIBEARY",MarqueData)
    
    return (
        <Section>
            <SectionTitle 
            badge='MY SKILLS'
            title='The Secret'
            gradientText='Sauce'
            description='A section of my most impactful work across various industries and technology'
            ></SectionTitle>
            <div className='flex flex-wrap justify-center gap-1 px-4  max-w-2xl mx-auto'>
      
            {MarqueData.map((item, index) => (
                <MyBadge key={index} text={item.icon} display='1' iconKey={item.iconKey} />
            ))}
      
            </div>
        </Section>
    );
};

export default TechStack;
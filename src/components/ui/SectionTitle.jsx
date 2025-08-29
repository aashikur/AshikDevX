import React from 'react';
import MyBadge from './MyBadge';

const SectionTitle = ({
  badge = 'My recent works',
  title = 'Featured',
  gradientText = 'Projects',
  description = 'A section of my most impactful work across various industries and technology',
}) => {




  return (
    <div className='max-w-lg mb-10 mx-auto text-center flex flex-col justify-center items-center gap-4'>
        <MyBadge text={badge}/>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
        {title}{' '}
        <span
          className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500'
        >
          {gradientText}
        </span>
      </h1>
      <p className=' sm:text-[1.125rem] text-gray-500'>{description}</p>
    </div>
  );
};

export default SectionTitle;

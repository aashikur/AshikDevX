import React from 'react';
import FeaturedProjects from '../About/sections/FeaturedProjects';

const Projects = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Banner Section */}
            <div 
              className='relative h-[400px] bg-[url("https://cdn.dribbble.com/userupload/2941052/file/original-27e35433c7444f2c2cbf08086ad79d43.jpg?resize=1024x768&vertical=center")] bg-fixed bg-center flex items-center justify-center px-6 pt-24'
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

                {/* Text content */}
                <div className="relative z-10 max-w-4xl text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        My Projects
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                        Explore a collection of my latest work showcasing web applications, 
                        creative designs, and real-world solutions built with modern 
                        technologies. Each project reflects my dedication to clean code, 
                        user-friendly interfaces, and problem-solving through innovation.
                    </p>
                </div>
            </div>

            {/* Featured Projects Section */}
            <FeaturedProjects />
        </div>
    );
};

export default Projects;

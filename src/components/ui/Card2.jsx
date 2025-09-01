import React from 'react';

const Card2 = ({ children, className = "" }) => {
    return (
        <div
            className={`relative group rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10  ${className}`}
        >
            {children}
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
        </div>
    );
};

export default Card2;
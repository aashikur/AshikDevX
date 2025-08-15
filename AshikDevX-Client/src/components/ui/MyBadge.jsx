import React from 'react';
import { IconLibrary } from '../icons/IconLibrary';

const MyBadge = ({ text = 'My works' , icon = null , iconKey = null}) => {
    return (
        <div>
            <button className="badge bg-gray-700/30 rounded-full p-2 text-xs border border-gray-700">
             {iconKey && IconLibrary[iconKey]}
              {icon && <span className=''>{icon}</span>}  {text}
            </button>
        </div>
    );
};

export default MyBadge;
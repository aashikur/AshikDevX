import React from 'react';
import { IconLibrary } from '../icons/IconLibrary';

const MyBadge = ({ 
    text = 'My works', icon = null, iconKey = null, display = '1' 
}) => {
    return (
        <div>
            { display == '1' &&
                <button className="
                transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-xl
                badge bg-gray-700/30 rounded-full p-2 text-xs border border-gray-700">
                    {iconKey && IconLibrary[iconKey]}
                    {icon && <span className=''>{icon}</span>}  {text}
                </button>
            }
            { display == '2' &&
                <button className="badge bg-gray-700/30 rounded-full p-2 text-xs border border-gray-700">
                    {iconKey && IconLibrary[iconKey]}
                    {icon && <span className=''>{icon}</span>}  {text}
                </button>
            }
        </div>
    );
};

export default MyBadge;
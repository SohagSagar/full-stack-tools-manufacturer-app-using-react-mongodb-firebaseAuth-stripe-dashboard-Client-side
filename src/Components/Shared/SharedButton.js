import React from 'react';

const SharedButton = ({children}) => {
    return (
        <div>
            <button className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0 mt-5 text-primary rounded-full px-5 h-10">{children}</button>
        </div>
    );
};

export default SharedButton;
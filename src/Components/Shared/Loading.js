import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-20 h-20 font-bold border-l-2 border-primary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;
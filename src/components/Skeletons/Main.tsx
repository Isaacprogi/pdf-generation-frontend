import React from 'react';
const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse w-full  mx-auto max-w-[400px]">
        <div className="h-10 max-w-[358px] mx-auto bg-gray-300 mb-4 rounded" />
        <div className="h-2  bg-gray-300 mb-4 rounded" />
        <div className="h-[15rem] w-full bg-gray-300 mb-4 rounded" />
        <div className="flex w-full justify-center gap-4 mt-4">
          <div className="h-10 w-full max-w-[9rem] bg-gray-300 rounded" />
          <div className="h-10 w-full max-w-[9rem] bg-gray-300 rounded" />
        </div>
      </div>
  );
};

export default LoadingSkeleton;

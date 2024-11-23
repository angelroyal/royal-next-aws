import React from "react";

const LinearProgress = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full h-auto">
      <div className="w-full h-1 bg-gry-30 overflow-hidden relative rounded-full">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-bl-100 animate-linearIndeterminate"></div>
      </div>
    </div>
  );
};

export default LinearProgress;

import React from "react";

const ErrorCard = () => {
  return (
    <div className="bg-red-300 p-5 items-center  rounded-md flex flex-col gap-4">
      <h3 className="text-2xl font-bold text-red-800">
        Something went wrong!! Can't load questions please try again!
      </h3>
    </div>
  );
};

export default ErrorCard;

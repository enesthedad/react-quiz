import React from "react";

const Main = ({ children }) => {
  return (
    <div className="flex mt-10  min-h-full justify-center items-center">
      {children}
    </div>
  );
};

export default Main;

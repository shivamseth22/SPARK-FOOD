import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between pt-10 bg-yellow-100 text-lg">
      <div>
        <h1 className="text-2xl font-bold">315 resturants</h1>
      </div>
      <div className="flex gap-10 "> 
        <h1>Relevance</h1>
        <h1>Delivery Time</h1>
        <h1>Rating</h1>
        <h1>Cost: Low To High</h1>
        <h1>Cost: High To Low</h1>
        <h1>Filters</h1>
      </div>
    </div>
  );
};

export default Header;

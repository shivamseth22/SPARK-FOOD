import React from "react";
import { Res_Img } from "../Constant";
import { AiFillStar } from "react-icons/ai";

const ResturantList = (res) => {
  return (
    <div className="flex flex-col hover:block hover:cursor-pointer">
      {res &&
        Object.values(res)?.map((it) => (
          <div className="w-[254px] flex flex-col items-start h-80 ">
            <img src={Res_Img + it?.data?.cloudinaryImageId} />
            <h1 className="font-bold">{it?.data?.name}</h1>
            <h1 className="text-sm flex  flex-wrap overflow-hidden">{it?.data?.cuisines}</h1>
            <div className="flex flex-row gap-8 text-sm my-3">
              <div className="flex items-center  ">
                <AiFillStar />
                <h1>{it?.data?.avgRating}</h1>
              </div>
              <h1>{it?.data?.slaString}</h1>
              <h1>{it?.data?.costForTwoString}</h1>
            </div>
            <div className="mx-auto my-2  hover:text-black ">Quick View</div>
          </div>
        ))}
    </div>
  );
};

export default ResturantList;

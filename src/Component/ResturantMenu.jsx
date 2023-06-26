import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResMenu_API } from "../Constant";
import { Res_Img } from "../Constant";
import { AiOutlineStar } from "react-icons/ai";

const ResturantMenu = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState({});

  const getResturantMenu = async () => {
    const data = await fetch(ResMenu_API + id);
    const json = await data.json();
    // console.log(json.data.cards);
    setMenu(json?.data?.cards);
    // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  };

  useEffect(() => {
    getResturantMenu();
  }, []);

  return (
    <div className="max-w-[800px] min-w-[800px] m-auto mt-10">
      {
        /* console.log(menu[0]?.card?.card?.info) */
        console.log(menu[1]?.card?.card?.gridElements?.infoWithStyle?.offers)

        /* {menu &&
        Object.values(menu[0])?.map((res) => (
          <div>{console.log(res?.card?.info)}</div>
        ))} */
      }
      <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-lg">
            {menu[0]?.card?.card?.info?.name}
          </h1>
          <h1 className="flex text-sm">
            {menu[0]?.card?.card?.info?.cuisines}
          </h1>
          <div className="flex text-sm gap-1">
            <h1>{menu[0]?.card?.card?.info?.areaName}</h1>
            <h1>{menu[0]?.card?.card?.info?.sla?.lastMileTravelString}</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-solid border-2">
          <div className="flex items-center ">
            <AiOutlineStar />
            <h1>{menu[0]?.card?.card?.info?.avgRatingString}</h1>
          </div>
          <h1 className="text-xs">
            {menu[0]?.card?.card?.info?.totalRatingsString}
          </h1>
        </div>
      </div>
      {/* totalRatingsString */}
    </div>
    <div className="flex my-5 gap-10 ">
      <h1>{menu[0]?.card?.card?.info?.sla?.slaString}</h1>
      <h1>{menu[0]?.card?.card?.info?.costForTwoMessage}</h1>
    </div>
    <div>
    <div className="flex  justify-between ">
    {(menu[1]?.card?.card?.gridElements?.infoWithStyle?.offers)?.map((inner)=>(
      <div className="bg-red-200 border-solid border-2 border-black min-w-200px">
      <h1 className="text-sm">{inner.info.header}</h1>
      <div className="text-xs flex divide-x-2">
      <h1>{inner.info.couponCode}</h1>
      <h1>{inner.info.description}</h1>
      </div>
      </div>
    ))}
    </div>
    {/* <h1>{menu[0]?.card?.card?.info?.aggregatedDiscountInfo?.shortDescriptionList[1]?.meta}</h1> */}
    </div>

    <div>

    </div>
    </div>
  );
};

export default ResturantMenu;

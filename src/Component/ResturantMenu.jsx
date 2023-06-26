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
    <div className="max-w-[700px] min-w-[700px] m-auto">
      {
        console.log(menu[0]?.card?.card?.info)

        /* {menu &&
        Object.values(menu[0])?.map((res) => (
          <div>{console.log(res?.card?.info)}</div>
        ))} */
      }
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-lg">
            {menu[0]?.card?.card?.info?.name}
          </h1>
          <h1 className="flex text-sm">
            {menu[0]?.card?.card?.info?.cuisines}
          </h1>
          <div className="flex text-sm">
            <h1>{menu[0]?.card?.card?.info?.areaName}</h1>
            <h1>{menu[0]?.card?.card?.info?.sla?.lastMileTravelString}</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-solid border-2">
          <div className="flex items-center ">
            <AiOutlineStar />
            <h1>{menu[0]?.card?.card?.info?.avgRatingString}</h1>
          </div>
          <h1 className="text-xs">{menu[0]?.card?.card?.info?.totalRatingsString}</h1>
        </div>
      </div>
      {/* totalRatingsString */}
    </div>
  );
};

export default ResturantMenu;

import React, { useEffect, useState } from "react";
import { API } from "../Constant";
import ResturantList from "./ResturantList";

const Body = () => {
  
  const [apiData, setApiData] = useState(null);
  // console.log(apiData);

  const getData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    setApiData(json?.data?.cards[2]?.data?.data?.cards);
  };
  useEffect(() => {
    getData();
  }, []);

  return (<div className="flex flex-wrap justify-between mt-10">
  {
    apiData && 
    apiData?.map((item) => <ResturantList key={item?.data?.id} res={item}/>
    
    )}
    </div>);
  // return <>{apiData && apiData?.map((res) => console.log(res))}</>;
};

export default Body;

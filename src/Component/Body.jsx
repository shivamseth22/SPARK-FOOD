import React, { useEffect, useState } from "react";
import { API } from "../Constant";

const Body = () => {
  const [apiData, setApiData] = useState("shivam");
  console.log(apiData);

  const getData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    setApiData(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* {apiData &&
        apiData.map((item) => (
        <h1>{item.data.name}</h1>)
        )} */}
    </div>
  );
};

export default Body;

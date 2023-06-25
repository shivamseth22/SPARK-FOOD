import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ResMenu_API } from '../Constant';
import { Res_Img } from '../Constant';

const ResturantMenu = () => {
    const {id} = useParams();
    console.log(id);
    const [menu , setMenu] = useState({})

    const getResturantMenu = async()=>{
        const data = await fetch(ResMenu_API);
        const json = await data.json();
        console.log(json.data.cards[3].data.data);
        setMenu(json.data.cards[3].data.data)
    }

    useEffect(()=>{
        getResturantMenu()
    },[])

  return (
    <>
        <h1>Resturant id:123</h1>
        <h1>{menu.name}</h1>
        <img src={Res_Img + menu.cloudinaryImageId} alt="" />
        <h1>{menu.area}</h1>
        <h1>{menu.city}</h1>
        <h1>{menu.avgRating} star</h1>
        <h1>{menu.costForTwo}</h1>

    </>
  )
}

export default ResturantMenu; 
import React, { useState, useEffect } from "react";
import "@/components/NutritionalCard/NutritionalCard.css";
import Lipide from "@/asset/lipide.png";
import Proteines from "@/asset/protein.png";
import Glucides from "@/asset/glucide.png";
import Calories from "@/asset/calories.png";
import { fetchUserInfos } from "../../ApiServices/ApiServices";
import { useParams } from 'react-router-dom';


const iconNutri = (name) => {
  switch (name) {
    case "Calories":
      return Calories;
    case "Proteines":
      return Proteines;
    case "Glucides":
      return Glucides;
    case "Lipides":
      return Lipide;
    default:
      return "";
  }
};

const NutritionalCard = () => {
  const  { userId }= useParams();
  const [userData,setUserData] = useState(null)
   useEffect(() =>{
    const fetchData = async() => {
      try {
        const userInfos = await fetchUserInfos(userId);
        if(userInfos) {
          setUserData(userInfos.keyData);
    }
  } catch (error) {
    console.error("Error fetching user data" ,error);
  }
};
fetchData();
   },[userId]);

   if(!userData){
    return <div>Loading...</div>;
   }

  const data = [
    { name: "Calories", value: `${userData.calorieCount} kcal` },
    { name: "Proteines", value: `${userData.proteinCount} g` },
    { name: "Glucides", value: `${userData.carbohydrateCount} g` },
    { name: "Lipides", value: `${userData.lipidCount} g`},
  ];

  return (
    <div className="infoNutri">
      {data.map((item, index) => (
        <figure key={index} >
          <div>
            <h6 className="titreNutri">{item.name}</h6>
            <h4 className="valeurNutri">{item.value}</h4>
          </div>
          <figcaption></figcaption>
          <img src={iconNutri(item.name)} alt={item.name} />
        </figure>
      ))}
    </div>
  );
}
export default NutritionalCard ;
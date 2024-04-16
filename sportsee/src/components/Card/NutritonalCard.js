import React from "react";
import "./NutritionalCard.css";
import Lipide from "/Users/Fujitsu/Documents/SportSee-Projet12-8_04_2024/sportsee/src/asset/lipide.png";
import Proteines from "/Users/Fujitsu/Documents/SportSee-Projet12-8_04_2024/sportsee/src/asset/protein.png";
import Glucides from "/Users/Fujitsu/Documents/SportSee-Projet12-8_04_2024/sportsee/src/asset/glucide.png";
import Calories from "/Users/Fujitsu/Documents/SportSee-Projet12-8_04_2024/sportsee/src/asset/calories.png";

const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Karl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
];

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

export default function NutritionalCard() {
  const user = USER_MAIN_DATA[0];

  const data = [
    { name: "Calories", value: `${user.keyData.calorieCount} kcal` },
    { name: "Proteines", value: `${user.keyData.proteinCount} g` },
    { name: "Glucides", value: `${user.keyData.carbohydrateCount} g` },
    { name: "Lipides", value: `${user.keyData.lipidCount} g`},
  ];

  return (
    <div className="infoNutri">
      {data.map((item, index) => (
        <figure key={index} >
          <div>
            <h6 class="titreNutri">{item.name}</h6>
            <h4 class="valeurNutri">{item.value}</h4>
          </div>
          <figcaption></figcaption>
          <img src={iconNutri(item.name)} alt={item.name} />
        </figure>
      ))}
    </div>
  );
}
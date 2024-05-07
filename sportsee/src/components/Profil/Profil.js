import React, { useState, useEffect } from "react";
import "./Profil.css";
import { fetchUserInfos } from "../../ApiServices/ApiServices";
import { useParams } from "react-router-dom";
import { Loadingchart } from "@/components/Loading/Loading";
import { USER_MAIN_DATA } from "@/dataMock/Data.js";

const Profil = () => {
  const [userInfos, setUserInfos] = useState(null);
  const { userId } = useParams();
  useEffect(() => {
    // Vérifie d'abord l'API
    const fetchData = async () => {
      const userInfo = await fetchUserInfos(userId); 
      if (userInfo) {
        setUserInfos(userInfo);
      } else {
           // En cas d'erreur lors de la récupération des données depuis l'API, utilisez les données mock
        const mockUserData = USER_MAIN_DATA.find(
          (data) => data.id.toString() === userId.toString()
        );
        setUserInfos(mockUserData);
      }
    };
    fetchData();
  }, [userId]);

  if (!userInfos) {
    return <Loadingchart />;
  }
  return (
    <div className="profil">
      <h1 className="titre-accueil">
        Bonjour{" "}
        <span className="firstname">{userInfos.userInfos.firstName}</span>
      </h1>
      <p className="felicitation">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default Profil;

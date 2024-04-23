import React, { useEffect, useState } from "react";
import ChartBar from "@/components/Activity/Activity.js";
import LineChartComponent from "@/components/AverageSessions/AverageSessions.js";
import ChartRadar from "@/components/Performance/Performance.js";
import TodayScore from "@/components/Score/Score.js";
import NutritionalCard from "@/components/NutritionalCard/NutritonalCard.js";
import LogoImg from "@/asset/logo.svg";
import Profil from "@/components/profil/Profil.js";
import { useParams } from "react-router-dom";
import { fetchUserInfos } from "../ApiServices/ApiServices.js";
import Error from "./Error/Error.js";
import "./Home.css"




const Home = () => {
  const [userInfos, setUserInfos] = useState(null);
  const { userId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await fetchUserInfos(userId); // Utilisez la fonction fetchUserInfos pour récupérer les données de l'utilisateur
      setUserInfos(userInfo);
    };
    fetchData();
  }, [userId]);

  if (!userInfos) {
    return <Error />;
  }
  return (
    <div>
      <img alt="logo" src={LogoImg} />
      <section>
         <Profil />
        <article>
          <aside>
            <ChartBar />
            <div class="asideChart">
              <LineChartComponent />
              <ChartRadar />
              <TodayScore />
            </div>
           </aside>
            <div class="AsideInfo">
              <NutritionalCard />
            </div>
        
          
        </article>
      </section>
    </div>
  );
};

export default Home;

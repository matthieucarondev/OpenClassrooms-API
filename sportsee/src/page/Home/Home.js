import React, { useEffect, useState } from "react";
import ChartBar from "@/components/Activity/Activity.js";
import LineChartComponent from "@/components/AverageSessions/AverageSessions.js";
import ChartRadar from "@/components/Performance/Performance.js";
import TodayScore from "@/components/Score/Score.js";
import NutritionalCard from "@/components/NutritionalCard/NutritonalCard.js";
import Profil from "@/components/profil/Profil.js";
import { useParams } from "react-router-dom";
import { fetchUserInfos } from "../../ApiServices/ApiServices.js";
import Error from "../Error/Error.js";
import "./Home.css";
import Loading from "../../components/Loading/Loading.js";

const Home = () => {
  const [userInfos, setUserInfos] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { userId } = useParams();
  useEffect(() => {
    
    const fetchData = async () => {
      setTimeout(async () => {
      setLoading(true);
      const userInfo = await fetchUserInfos(userId);
      setUserInfos(userInfo);
      setLoading(false);
    }, 3000);
    };
    fetchData();
  }, [userId]);
  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && !userInfos && <Error />}
      {userInfos && (
        <section>
          <Profil />
          <article>
            <aside>
              <ChartBar />
              <div className="asideChart">
                <LineChartComponent />
                <ChartRadar />
                <TodayScore />
              </div>
            </aside>
            <div className="AsideInfo">
              <NutritionalCard />
            </div>
          </article>
        </section>
      )}
    </div>
  );
};

export default Home;

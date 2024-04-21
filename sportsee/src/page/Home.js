import React from 'react';
import ChartBar from "@/components/Activity/Activity.js";
import LineChart from "@/components/AverageSessions/AverageSessions.js";
import ChartRadar from "@/components/Performance/Performance.js";
import TodayScore from "@/components/Score/Score.js";
import NutritionalCard from "@/components/NutritionalCard/NutritonalCard.js";
import LogoImg from "@/asset/logo.svg";
import Profil from '../components/Profil/Profil';

const Home = () => {
    return (
        <div>
        <img alt="logo" src={LogoImg} />
    <section>
        <Profil/>
      <article>
        <ChartBar />
        <aside class="asideChart">
          <LineChart />
          <ChartRadar />
          <TodayScore />
        </aside>
      </article>
      <aside class="AsideInfo">
        <NutritionalCard />
      </aside>
    </section>
    </div>
    );
};

export default Home;
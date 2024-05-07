import React, { useState, useEffect } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { fetchUserInfos } from '@/ApiServices/ApiServices';
import { useParams } from 'react-router-dom';
import { Loadingchart } from '@/components/Loading/Loading';
import { USER_MAIN_DATA } from "@/dataMock/Data.js";
import UserModel from '../../model/UserModel';


const TodayScore = () => {
  const  { userId }= useParams();
  const [todayScore, setTodayScore] = useState(null);
  const [userModel, setUserModel] = useState(null); // État pour stocker l'instance UserModel

  useEffect(() => {
    const fetchUserData = async () => {
      // Vérifie d'abord l'API
      let score ;
        const userInfos = await fetchUserInfos(userId);
        if(userInfos) {
          const newUserModel = new UserModel(userId);
          await newUserModel.initialize(userInfos);
          setUserModel(newUserModel);
          score = parseFloat(userInfos.todayScore);
        }else {
             // En cas d'erreur lors de la récupération des données depuis l'API, utilisez les données mock
        const mockUserData = USER_MAIN_DATA.find(
          (data) => data.id.toString() === userId.toString()
        );
        if (mockUserData) {
          score = parseFloat(mockUserData.todayScore);
        } 
      }
      setTodayScore(score);
      };
    fetchUserData();
  }, [userId]); // Exécute une seule fois après le montage du composant

  if (!todayScore) {
    return <Loadingchart />;
}
  return (
    <ResponsiveContainer width={258} height={263}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="50%"
        outerRadius="100%"
        innerRaduis="100%"
        startAngle={90}
        endAngle={90 + 360 * todayScore}
        barSize={10}
        data={[{ todayScore }]}
      >
        <rect
          x={0}
          y={0}
          width={258}
          height={263}
          fill="#FBFBFB"
          rx={10}
          ry={10}
        />
        <circle cx="50%" cy="50%" r="23%" fill="white" />
        <text
          x={40}
          y={20}
          width={39}
          height={24}
          fill="#20253A"
          fontFamily="roboto"
          fontWeight="800"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Score
        </text>
        <RadialBar fill="red"  minWidth={15} dataKey="todayScore"  cornerRadius="50%" />
        <div className="centralChart"></div>
        <text
          x="50%"
          y="48%"
          alignmentBaseline="central"
          fill="#000"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="26"
        >
          {todayScore*100}%
        </text>
        <text
          x="50%"
          y="50%"
          alignmentBaseline="central"
          fill="#74798C"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
        >
          <tspan x="50%" dy="1.2em">de votre</tspan>
          <tspan x="50%" dy="1.2em">objectif</tspan>
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
export default TodayScore;
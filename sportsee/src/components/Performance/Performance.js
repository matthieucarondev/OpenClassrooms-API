import "@/components/Performance/Performance.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  
} from "recharts";
import { fetchPerformanceData } from "@/ApiServices/ApiServices.js";
import { Loadingchart } from '@/components/Loading/Loading';
import { USER_PERFORMANCE } from "@/dataMock/Data";



const ChartRadar= ()=> {
      const {userId} = useParams();
      const [performeanceData, setPerformanceData] = useState(null);
  useEffect(()=>{
    const fetchData = async () => {
      try {
         // Vérifie d'abord l'API
        const performeanceData= await fetchPerformanceData(userId);
        setPerformanceData(performeanceData);
  } catch {
       // En cas d'erreur lors de la récupération des données depuis l'API, utilisez les données mock
    const mockData = USER_PERFORMANCE.find(item => item.userId === parseInt(userId));
        if (mockData) {
          setPerformanceData(mockData);
        } 
  }
};  
fetchData();
  },[userId]);
  if(!performeanceData){
    return <Loadingchart />;
   }
  const data =performeanceData ? performeanceData.data.map((item) => ({
    subject: performeanceData.kind[item.kind],
    A: item.value,
  })):[];
  return (
    <div className="radar-chart-container">
      <RadarChart
        cx={129}
        cy={131.5}
        outerRadius={75}
        width={258}
        height={263}
        data={data}
        style={{ background: "black", borderRadius: "10px" }}
      >
        <PolarGrid grid={{ stroke: "white" }} radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "white", fontSize: 12 }}
        />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}
export default  ChartRadar ;
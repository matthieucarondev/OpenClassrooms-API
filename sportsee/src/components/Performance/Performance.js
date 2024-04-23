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



const ChartRadar= ()=> {
      const {userId} = useParams();
      const [performeanceData, setPerformanceData] = useState(null);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const performeanceData= await fetchPerformanceData(userId);
        setPerformanceData(performeanceData);
        
  } catch (error) {
    console.error("Error fetching activity data:", error);
  }
};  
fetchData();
  },[userId]);

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
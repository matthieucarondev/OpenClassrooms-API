import "@/components/Performance/Performance.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { fetchPerformanceData } from "@/ApiServices/ApiServices.js";
import { Loadingchart } from "@/components/Loading/Loading";
import { USER_PERFORMANCE } from "@/dataMock/Data";
import PerformanceModel from "../../model/PerformanceModel";

const ChartRadar = () => {
  const { userId } = useParams();
  const [performeanceData, setPerformanceData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const performanceModel = new PerformanceModel(userId); // Créer une instance du modèle
        const responseData = await fetchPerformanceData(userId); // Récupérer les données de performance
        await performanceModel.initialize(responseData); // Initialiser le modèle avec les données
        setPerformanceData(performanceModel); // Mettre à jour l'état avec le modèle
    } catch {      
        // En cas d'erreur lors de la récupération des données depuis l'API, utilisez les données mock
      const mockData = USER_PERFORMANCE.find(
        (item) => item.userId === parseInt(userId)
      );
      if (mockData) {
        const performanceModel = new PerformanceModel(userId); // Créer une instance du modèle
        performanceModel.initialize(mockData); // Initialiser le modèle avec les données mock
        setPerformanceData(performanceModel); // Mettre à jour l'état avec le modèle
      }
    }
  };
    fetchData();
  }, [userId]);
  if (!performeanceData) {
    return <Loadingchart />;
  }
  const data = performeanceData.performances.map((item) => ({
    subject: item.kind,
    A: item.value,
  }));
  
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
};
export default ChartRadar;

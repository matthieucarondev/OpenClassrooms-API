import "@/components/Activity/Activity.css";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Text,
  Legend,
} from "recharts";
import { fetchActivityData } from "@/ApiServices/ApiServices.js";
import { useParams } from "react-router-dom";
import { Loadingchart } from "@/components/Loading/Loading";
import { USER_ACTIVITY } from "@/dataMock/Data";
import DailyActivity from "@/model/ActivityModel";

export default function ChartBar() {
  const { userId } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Vérifie d'abord l'API
      let activityData;
      try {
        activityData = await fetchActivityData(userId);
      } catch (error) {
        console.error("Error fetching activity data from API:", error);
      }
      if (activityData) {
        const dailyActivity = new DailyActivity(userId); // Créez une instance de DailyActivity
        await dailyActivity.initialize(activityData); // Initialisez la classe avec les données d'activité
        setSessions(dailyActivity.sessions); // Utilisez les sessions de la classe pour mettre à jour l'état
      } else {
        // En cas d'erreur lors de la récupération des données depuis l'API, utilisez les données mock
        const userData = USER_ACTIVITY.find(
          (user) => user.userId === parseInt(userId)
        );
        if (userData) {
          setSessions(userData.sessions);
        } else {
          console.error("No mock data found for user:", userId);
        }
      }
    };
    fetchData();
  }, [userId]);

  if (!sessions) {
    const userData = USER_ACTIVITY.find(
      (user) => user.userId === parseInt(userId)
    );
    if (userData) {
      return <Loadingchart />;
    } else {
      console.error("No mock data found for user:", userId);
      return null;
    }
  }
  const CustomTooltipBar = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const { kilogram, calories } = payload[0].payload;
      return (
        <div className="Barcustom-tooltip">
          <p className="Bartext-tooltip">{kilogram} kg</p>
          <p className="Bartext-tooltip">{calories} kcal</p>
        </div>
      );
    }

    return null;
  };

  const data = sessions
    ? sessions.map((session, index) => ({
        number: index + 1,
        kilogram: session.kilograms,
        calories: session.calories,
      }))
    : [];
  // Trouver la valeur maximale des calories pour ajuster l'échelle de l'axe y
  const maxCalories = Math.max(...data.map((item) => item.calories));
  return (
    <div className="BarGraphique">
      <Text className="titreChartBar" textAnchor="start" verticalAnchor="start">
        Activité quotidienne
      </Text>
      <BarChart
        style={{ background: "#FBFBFB", borderRadius: "10px" }}
        width={800}
        height={320}
        data={data}
        margin={{ top: 80, right: 28, bottom: 32, left: 28 }}
        barGap={8}
        barCategoryGap="20%"
      >
        <CartesianGrid vertical={false} strokeDasharray="2" />
        <XAxis
          dataKey="number" // Utiliser le numéro séquentiel comme valeur pour l'axe x
          dy={16}
          tickLine={false}
          tick={{ fontSize: 14, fontWeight: 500 }}
        />
        <YAxis
          dataKey="kilogram"
          orientation="right"
          axisLine={false}
          tickLine={false}
          allowDecimals={false}
        />
        <YAxis
          yAxisId="right"
          orientation="left"
          axisLine={false}
          tickLine={false}
          allowDecimals={false}
          domain={[0, maxCalories]} // Définir le domaine de l'axe y pour les calories
          hide={true}
        />
        <Tooltip content={<CustomTooltipBar />} />
        <Bar radius={[20, 20, 0, 0]} maxBarSize={8} dataKey="kilogram" />
        <Bar
          radius={[20, 20, 0, 0]}
          maxBarSize={8}
          dataKey="calories"
          fill="red"
          yAxisId="right" // Utiliser l'axe y de droite pour les calories
        />
        <Legend
          className="Legend"
          align="right"
          verticalAlign="top"
          height={36}
          iconType="circle"
          top={47}
          payload={[
            {
              value: <span style={{ color: "#74798C" }}>poids (kg)</span>,
              type: "circle",
              id: "kilogram",
            },
            {
              value: (
                <span className="kcal" style={{ color: "#74798C" }}>
                  Calories brûlées (kCal)
                </span>
              ),
              type: "circle",
              id: "calories",
              color: "red",
            },
          ]}
        />
      </BarChart>
    </div>
  );
}

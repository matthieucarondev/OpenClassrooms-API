import "@/components/AverageSessions/AverageSessions.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from "recharts";
import { fetchAverageSessionsData } from "@/ApiServices/ApiServices.js";
import { Loadingchart } from "@/components/Loading/Loading";
import { USER_AVERAGE_SESSIONS } from "@/dataMock/Data";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const sessionLength = payload[0].value;
    return (
      <div className="custom-tooltip">
        <p className="text-tooltip">{` ${sessionLength}min`}</p>
      </div>
    );
  }

  return null;
};
const CustomCursor = (props) => {
  const { points } = props;
  const Height = 263;
  const Width = 258;
  const { x } = points[0];

  return (
    <Rectangle
      fill="#b21100"
      stroke="#b21100"
      fillOpacity={0.5} // Définir l'opacité du remplissage
      strokeOpacity={0.5} // Définir l'opacité du trait
      x={x}
      y={0}
      width={Width}
      height={Height}
    />
  );
};
const LineChartComponent = () => {
  const { userId } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Vérifie d'abord l'API
        const averageSessionsData = await fetchAverageSessionsData(userId);

        setSessions(averageSessionsData.sessions);
      } catch {
        // En cas d'erreur lors de la récupération des données depuis l'API, utilisez les données mock
        const userData = USER_AVERAGE_SESSIONS.find(
          (user) => user.userId === parseInt(userId)
        );
        if (userData) {
          setSessions(userData.sessions);
        }
      }
    };
    fetchData();
  }, [userId]);

  if (sessions.length === 0) {
    return <Loadingchart />;
  }

  const data = sessions.map((session) => ({
    day: ["L", "M", "M", "J", "V", "S", "D"],
    sessionLength: session.sessionLength,
  }));

  return (
    <div className="lineGrapphique">
      <LineChart
        width={258}
        height={263}
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        animation={{ duration: 3500, easing: "ease-in-out" }}
        style={{ background: "red", borderRadius: "10px" }}
      >
        <text
          className="titreLineChart"
          x={258 / 2}
          y={15} // Position du titre sur le graphique
          textAnchor="middle"
        >
          Durée moyenne des sessions
        </text>
        <XAxis
          dataKey="day"
          domain={[-10, "dataMax"]}
          axisLine={false}
          tick={{ fill: "#FFFFFF" }}
          tickLine={false}
        />
        <YAxis hide={true} domain={[-10, "auto"]} />
        <Tooltip
          cursor={<CustomCursor />}
          content={<CustomTooltip />}
          contentStyle={{ backgroundColor: "#FFFFFF", color: "#000000" }}
        />

        <Line
          type="monotone"
          dataKey="sessionLength"
          fill="white"
          stroke="white"
          dot={false}
        />
      </LineChart>
    </div>
  );
};
export default LineChartComponent;

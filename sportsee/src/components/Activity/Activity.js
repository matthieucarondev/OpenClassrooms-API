import "@/components/Activity/Activity.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Text,
  Legend
} from "recharts";

const USER_ACTIVITY = [
  {
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 80,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 80,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 81,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 81,
        calories: 290,
      },
      {
        day: "2020-07-05",
        kilogram: 80,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 78,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 76,
        calories: 390,
      },
    ],
  },
];


export default function ChartBar() {
  // Créer un tableau de données avec des numéros séquentiels pour l'axe x
  const data = USER_ACTIVITY[0].sessions.map((session, index) => ({
    number: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));
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
  // Trouver la valeur maximale des calories pour ajuster l'échelle de l'axe y
  const maxCalories = Math.max(...data.map((item) => item.calories));
  return (
    <div className="BarGraphique" >
    <Text 
      className="titreChartBar"
      textAnchor="start"
      verticalAnchor="start"
     
    >
     Activité quotidienne
    </Text>
    <BarChart
    style={{ background: "#FBFBFB",borderRadius: "10px"  }}
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
      <Tooltip  content={<CustomTooltipBar />} />
      <Bar radius={[20, 20, 0, 0]} maxBarSize={8} dataKey="kilogram" />
      <Bar
        radius={[20, 20, 0, 0]}
        maxBarSize={8}
        dataKey="calories"
        fill="red"
        yAxisId="right" // Utiliser l'axe y de droite pour les calories
      />
       <Legend
          align="right"
          verticalAlign="top"
          height={36}
          iconType="circle"
          top={47}
          payload={[
            { value: <span style={{ color: "#74798C" }}>poids (kg)</span>, type: "circle", id: "kilogram" },
            { value: <span class="kcal" style={{ color: "#74798C" }}>Calories brûlées (kCal)</span>, type: "circle", id: "calories", color: "red" },
          ]}
        />
    </BarChart>
    </div>
  );
};
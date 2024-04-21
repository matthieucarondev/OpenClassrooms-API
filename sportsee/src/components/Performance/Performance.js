import "@/components/Performance/Performance.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  
} from "recharts";

const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
      {
        value: 50,
        kind: 4,
      },
      {
        value: 200,
        kind: 5,
      },
      {
        value: 90,
        kind: 6,
      },
    ],
  },
];

export default function ChartRadar() {
  const data = USER_PERFORMANCE[0].data.map((item) => ({
    subject: USER_PERFORMANCE[0].kind[item.kind],
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
}

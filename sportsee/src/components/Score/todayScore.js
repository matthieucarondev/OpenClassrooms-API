import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Karl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
];
const score = USER_MAIN_DATA[0].todayScore;

export default function TodayScore() {
    return (
      <ResponsiveContainer width={258} height={263}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="50%"
          outerRadius="100%"
          innerRaduis="100%"
          startAngle={90}
          endAngle={90 + 360 * score}
          barSize={10}
          data={[{ todayScore: score }]}
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
            <tspan fontSize="15">Score</tspan>
          </text>
          <RadialBar
            fill="red"
            widths={10}
            dataKey="todayScore"
            cornerRadius="50%"
          />
          <div className="centralChart"></div>
          <text
            x="50%"
            y="48%"
            alignmentBaseline="central"
            fill="#000"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            <tspan dy="0.2em" fontSize="26">
              {score * 100}%
            </tspan>
          </text>
          <text
            x="50%"
            y="50%"
            alignmentBaseline="central"
            fill="#74798C"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            <tspan x="50%" dy="1.2em" fontSize="16">
              de votre
            </tspan>
            <tspan x="50%" dy="1.2em" fontSize="16">
              objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }

 
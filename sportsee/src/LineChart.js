import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  Text
} from "recharts";

const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 23,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 0,
      },
      {
        day: 7,
        sessionLength: 60,
      },
    ],
  },
];
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
  const { points} = props;
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
export default function lineChart() {
  const data = USER_AVERAGE_SESSIONS[0].sessions.map((session) => ({
    day: ["L", "M", "M", "J", "V", "S", "D"],
    sessionLength: session.sessionLength,
  }));

  return (
    <div>
      <Text 
      className="titreLineChart"
      textAnchor="start"
      verticalAnchor="start"
    >
     Durée moyenne des sessions
    </Text>
    <LineChart
      width={258}
      height={263}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      animation={{ duration: 3500, easing: "ease-in-out" }}
      style={{ background: "red",borderRadius: "10px"  }}
    > 
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
}

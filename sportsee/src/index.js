import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import ChartBar from './components/Activity/ChartBar.js';
import LineChart from './components/AverageSessions/LineChart.js';
import ChartRadar from './components/Performance/ChartRadar.js';
import TodayScore from './components/Score/todayScore.js';
import NutritionalCard from './components/Card/NutritonalCard.js'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChartBar/>
    <LineChart/>
    <ChartRadar/>
    <TodayScore/>
    <NutritionalCard/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

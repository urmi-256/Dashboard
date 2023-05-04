import React from "react";
import DashboardItem from "./DashboardItem";
import "./Dashboard.css";
import soundItem from "../images/soundItem.png";
const Dashboard = () => {
  const items = [
    {
      image: soundItem,
      title: "Sound 1",
      unique_plays: 10,
      total_plays: 20,
      completion_rate: 75,
    },
    {
      image: soundItem,
      title: "Sound 2",
      unique_plays: 5,
      total_plays: 10,
      completion_rate: 90,
    },
    // ...
  ];

  return (
    <div className="dashboard">
      {items.map((item, index) => (
        <DashboardItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Dashboard;

import React from "react";
import PieGraph from "../PieGraph";
import "./DashboardItem.css";

const DashboardItem = ({
  image,
  title,
  unique_plays,
  total_plays,
  completion_rate,
}) => {
  return (
    <div className="dashboard-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div>
       <PieGraph  labels={["Unique Plays","Total Plays"]}
                  data={[unique_plays,total_plays]}
                  heading={``}/> 
</div>
      <div className="completion-rate">
        <p>Completion Rate:</p>
        <progress value={completion_rate} max="100"></progress>
      </div>
    </div>
  );
};

export default DashboardItem;

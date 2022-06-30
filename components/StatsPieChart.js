import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatsPieChart({ count, target, aux }) {
  const percentage =
    (parseInt(count.replace(",", "")) / parseInt(target.replace(",", ""))) *
    100;
  const data = {
    labels: [`${aux} Registered`, "Remaining"],
    datasets: [
      {
        label: "percentage of registration goal accomplished",
        data: [percentage, 100 - percentage],
        backgroundColor: [
          "#f6bc56",
          "rgba(230,230,230,0.5)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "#f6bc56",
          "rgba(230,230,230,0.5)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StatsRegionalChart({ majalis }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: `Registration Data ${majalis[0].region} Region`,
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = majalis.map((majlis) => majlis.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Registered",
        data: majalis.map((majlis) => majlis.all),
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "",
        data: majalis.map((majlis) => majlis.allTarget),
        backgroundColor: "rgb(240,240,240)",
        stack: "Stack 0",
      },
      {
        label: "Atfal Registered",
        data: majalis.map((majlis) => majlis.atfalCount),
        backgroundColor: "rgb(53, 162, 235)",
        stack: "Stack 1",
      },
      {
        label: "",
        data: majalis.map((majlis) => majlis.atfalTarget),
        backgroundColor: "rgb(240,240,240)",
        stack: "Stack 1",
      },
      {
        label: "Khuddam Registered",
        data: majalis.map((majlis) => majlis.khuddamCount),
        backgroundColor: "rgb(53, 162, 235)",
        stack: "Stack 2",
      },
      {
        label: "",
        data: majalis.map((majlis) => majlis.khuddamTarget),
        backgroundColor: "rgb(240,240,240)",
        stack: "Stack 2",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

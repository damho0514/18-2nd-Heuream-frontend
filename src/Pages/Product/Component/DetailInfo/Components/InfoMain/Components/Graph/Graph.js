import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Graph = ({ chartData }) => {
  const [dataValue, setDataValue] = useState([]);
  const [dataDate, setDataDate] = useState([]);

  useEffect(() => {
    setDataValue(chartData.map(data => data.bidded_price));
    setDataDate(chartData.map(data => data.bidded_date));
  }, [chartData.length]);

  const dataBackground = CANVAS => {
    const ctx = CANVAS.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "#FD6150");
    gradient.addColorStop(1, "white");
    return gradient;
  };

  return (
    <Line
      height={100}
      data={{
        labels: dataDate,
        datasets: [
          {
            data: dataValue,
            lineTension: 0,
            backgroundColor: dataBackground(CANVAS),
            borderWidth: 1,
            borderColor: "red",
            pointRadius: 0,
          },
        ],
      }}
      options={{
        legend: {
          display: false,
        },
        animation: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              display: false,
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: function (value, index, values) {
                  return value.toLocaleString({
                    style: "currency",
                    currency: "USD",
                  });
                },
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  );
};

const CANVAS = document.createElement("canvas");

export default Graph;

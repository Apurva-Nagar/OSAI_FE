import ReactECharts from "echarts-for-react";

const StateWiseChart = () => {
  const options = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "2%",
      left: "1%",
      orient: "horizontal",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        left: 0,
        top: 0,
        right: 0,
        bottom: 50,
        width: "auto",
        height: "auto",
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  return (
    <div className="w-full bg-white shadow-lg border rounded-md mt-4">
      <ReactECharts option={options} />
    </div>
  );
};

export default StateWiseChart;

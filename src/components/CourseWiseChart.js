import ReactECharts from "echarts-for-react";

const CourseWiseChart = ({ data, setCourseSelected }) => {
  const onChartClick = (params) => {
    const { name } = params;
    setCourseSelected(name);
  };

  const _onEvents = {
    click: onChartClick,
  };

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
        name: "Course Wise Distribution",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "40%"],
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
        data: data,
      },
    ],
  };

  return (
    <div className="w-full bg-white shadow-lg border rounded-md mt-4">
      <ReactECharts option={options} onEvents={_onEvents} />
    </div>
  );
};

export default CourseWiseChart;

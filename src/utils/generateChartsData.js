export const generateChartsData = async (colleges) => {
  const stateWiseData = [];
  const courseWiseData = [];
  const courseWiseFrequency = {};

  const stateWiseFrequency = colleges.reduce((acc, college) => {
    college.courses.forEach((course) => {
      courseWiseFrequency[course]
        ? courseWiseFrequency[course]++
        : (courseWiseFrequency[course] = 1);

      courseWiseData[course]
        ? courseWiseData[course].push(college)
        : (courseWiseData[course] = [college]);
    });

    acc[college.state] ? acc[college.state]++ : (acc[college.state] = 1);

    stateWiseData[college.state]
      ? stateWiseData[college.state].push(college)
      : (stateWiseData[college.state] = [college]);

    return acc;
  }, {});

  const stateChartData = formatChartData(stateWiseFrequency);
  const courseChartData = formatChartData(courseWiseFrequency);

  return { stateChartData, stateWiseData, courseChartData, courseWiseData };
};

const formatChartData = (categoryWiseFrequency) => {
  return Object.keys(categoryWiseFrequency).map((category) => {
    return {
      value: categoryWiseFrequency[category],
      name: category,
    };
  });
};

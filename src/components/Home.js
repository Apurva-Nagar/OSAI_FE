import React, { useEffect, useState } from "react";
import axios from "axios";
import { Label, Select } from "@windmill/react-ui";

import BaseLayout from "./BaseLayout";
import CollegeTable from "./CollegeTable";
import CourseWiseChart from "./CourseWiseChart";
import StateWiseChart from "./StateWiseChart";

import { generateChartsData } from "../utils/generateChartsData";

const Home = () => {
  const [country, setCountry] = useState("India");

  const [colleges, setColleges] = useState();

  const [stateChartData, setStateChartData] = useState();
  const [stateWiseCollegeData, setStateWiseCollegeData] = useState();
  const [stateSelected, setStateSelected] = useState();

  const [courseChartData, setCourseChartData] = useState();
  const [courseWiseCollegeData, setCourseWiseCollegeData] = useState();
  const [courseSelected, setCourseSelected] = useState();

  const handleStateChartClick = (state) => {
    setCourseSelected(null);
    setStateSelected(state);
  };

  const handleCourseChartClick = (course) => {
    setStateSelected(null);
    setCourseSelected(course);
  };

  const getTableData = () => {
    if (!courseSelected && !stateSelected) return colleges;
    else if (courseSelected) return courseWiseCollegeData[courseSelected];
    else return stateWiseCollegeData[stateSelected];
  };

  const getTableText = () => {
    if (!courseSelected && !stateSelected) return "All Colleges";
    else if (courseSelected)
      return `Colleges offering ${courseSelected} course`;
    else return `Colleges in ${stateSelected}`;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/colleges?country=${country}`
        );
        setColleges(data);

        const {
          stateChartData,
          stateWiseData,
          courseChartData,
          courseWiseData,
        } = await generateChartsData(data);

        setStateChartData(stateChartData);
        setStateWiseCollegeData(stateWiseData);
        setCourseChartData(courseChartData);
        setCourseWiseCollegeData(courseWiseData);
        setStateSelected(null);
        setCourseSelected(null);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [country]);

  return (
    <BaseLayout>
      <div className="w-full flex justify-start">
        <div className="w-1/2 md:w-1/5 flex flex-row mb-3 md:mb-0 items-center">
          <Label className="">
            <span className="font-semibold text-lg">Country</span>
          </Label>
          <div className="w-full md:w-1/3">
            <Select
              className="ml-4 mt-1 p-2 cursor-pointer"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="flex flex-col md:w-1/3 gap-4">
          <StateWiseChart
            data={stateChartData}
            setStateSelected={(state) => handleStateChartClick(state)}
          />
          <CourseWiseChart
            data={courseChartData}
            setCourseSelected={(course) => handleCourseChartClick(course)}
          />
        </div>
        <div className="md:w-2/3">
          <CollegeTable colleges={getTableData()} title={getTableText()} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;

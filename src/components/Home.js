import React, { useEffect, useState } from "react";
import axios from "axios";
import { Label, Select } from "@windmill/react-ui";

import BaseLayout from "./BaseLayout";
import CollegeTable from "./CollegeTable";
import CourseWiseChart from "./CourseWiseChart";
import StateWiseChart from "./StateWiseChart";

const Home = () => {
  const [country, setCountry] = useState("India");
  const [colleges, setColleges] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/colleges?country=${country}`
        );
        setColleges(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [country]);

  return (
    <BaseLayout>
      <div className="flex w-full items-left mb-3 md:mb-0">
        <Label className="w-full md:w-1/12">
          <span className="font-semibold text-lg">Country</span>
          <Select
            className="mt-1 p-2 cursor-pointer"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
          </Select>
        </Label>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="flex flex-col md:w-1/3 gap-4">
          <StateWiseChart />
          <CourseWiseChart />
        </div>
        <div className="md:w-2/3">
          <CollegeTable colleges={colleges} title={"All Colleges"} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;

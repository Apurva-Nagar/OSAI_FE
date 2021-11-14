import { useEffect, useState } from "react";
import BaseLayout from "./BaseLayout";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import CollegeTable from "./CollegeTable";
import StudentTable from "./StudentTable";

const CollegeDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { collegeData } = location.state || {};
  const [collegeDetails, setCollegeDetails] = useState();
  const [similarColleges, setSimilarColleges] = useState();
  const [students, setStudents] = useState();

  useEffect(() => {
    if (collegeData) setCollegeDetails(collegeData);
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/colleges/${id}/?onlySimilar=${
            collegeData ? true : false
          }`
        );
        const { college, similarColleges } = data;
        if (college) setCollegeDetails(college);
        setSimilarColleges(similarColleges);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [collegeData]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/students/?collegeId=${id}`
        );
        setStudents(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <BaseLayout>
      <div className="flex flex-col w-full justify-center mb-3 md:mb-0">
        <div className="flex flex-row">
          {collegeDetails && (
            <div className="w-1/2 bg-white rounded-lg shadow-lg border border-gray p-4 mt-4">
              <div className="pb-4 pl-3 font-semibold text-lg text-left border-b-2">
                Details
              </div>
              <div className="grid grid-cols-2 mt-4 text-left gap-4">
                <div className="text-left ml-8 font-semibold">Name</div>
                <div>{collegeDetails.name}</div>
                <div className="text-left ml-8 font-semibold">Year Founded</div>
                <div>{collegeDetails.yearFounded}</div>
                <div className="text-left ml-8 font-semibold">City</div>
                <div>{collegeDetails.city}</div>
                <div className="text-left ml-8 font-semibold">State</div>
                <div>{collegeDetails.state}</div>
                <div className="text-left ml-8 font-semibold">Country</div>
                <div>{collegeDetails.country}</div>
                <div className="text-left ml-8 font-semibold">Skills</div>
                <div>{collegeData.courses.join(", ")}</div>
              </div>
            </div>
          )}
          <div className="ml-8 w-1/2">
            {/* <CollegeTable colleges={similarColleges} /> */}
            <StudentTable students={students} />
          </div>
        </div>
        <div className="mt-8">
          <CollegeTable colleges={similarColleges} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default CollegeDetails;

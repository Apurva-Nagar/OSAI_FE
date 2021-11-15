import { useEffect, useState } from "react";
import BaseLayout from "./BaseLayout";
import { useLocation, useParams } from "react-router-dom";
import CollegeTable from "./CollegeTable";
import StudentTable from "./StudentTable";
import fireRequest from "../fireRequest/fireRequest";

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
        const data = await fireRequest(
          "fetchCollegeDetails",
          { id },
          { onlySimilar: collegeData ? true : false }
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
        const data = await fireRequest(
          "fetchCollegeStudents",
          {},
          { collegeId: id }
        );
        setStudents(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <BaseLayout>
      <div className="flex flex-col w-full justify-center mb-3 md:mb-0">
        <div className="flex flex-col md:flex-row">
          {collegeDetails && (
            <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg border border-gray mt-4 pb-4">
              <div className="pb-4 pl-8 font-semibold text-lg text-left text-white bg-purple-500 pt-3 rounded-t-lg">
                College Details
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
                <div className="text-left ml-8 font-semibold">Courses</div>
                <div className="flex flex-row gap-2 flex-wrap">
                  {collegeData &&
                    collegeData.courses.map((course) => (
                      <div
                        key={course}
                        className="bg-purple-500 text-white font-bold py-1 px-2 rounded-full text-xs inline-block"
                      >
                        {course}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
          <div className="md:ml-8 w-full md:w-1/2 mt-8 md:mt-0">
            <StudentTable students={students} title="Students enrolled" />
          </div>
        </div>
        <div className="mt-8">
          {similarColleges && similarColleges.length ? (
            <CollegeTable
              colleges={similarColleges}
              title={"Other Similar Colleges"}
            />
          ) : (
            <div>
              <h3 className="text-left ml-4 font-semibold p-2 text-lg">
                Other Similar Colleges
              </h3>
              <p className="font-thin">
                No similar colleges found (based on location, course, student
                count)
              </p>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default CollegeDetails;

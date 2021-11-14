import { useEffect, useState } from "react";
import BaseLayout from "./BaseLayout";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const StudentDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { studentData } = location.state || {};
  const [studentDetails, setStudentDetails] = useState();

  useEffect(() => {
    if (studentData) setStudentDetails(studentData);
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/students/${id}`
        );
        setStudentDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [studentData]);

  return (
    <BaseLayout>
      <div className="flex w-full justify-center mb-3 md:mb-0">
        {studentDetails && (
          <div className="w-2/3 bg-white rounded-lg shadow-lg border border-gray p-4 mt-4">
            <div className="pb-4 pl-3 font-semibold text-lg text-left border-b-2">
              Details
            </div>
            <div className="grid grid-cols-2 mt-4 text-left gap-4">
              <div className="text-left ml-8 font-semibold">Name</div>
              <div>{studentDetails.name}</div>
              <div className="text-left ml-8 font-semibold">College</div>
              <div>{studentDetails.collegeId.name}</div>
              <div className="text-left ml-8 font-semibold">Batch Year</div>
              <div>{studentDetails.batchYear}</div>
              <div className="text-left ml-8 font-semibold">Skills</div>
              <div>{studentDetails.skills.join(", ")}</div>
            </div>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default StudentDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import axios from "axios";

const StudentDetails = () => {
  const { id } = useParams();
  const [studentDetails, setStudentDetails] = useState();

  useEffect(() => {
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
  }, []);

  return (
    <BaseLayout>
      <div className="flex w-full justify-center mb-3 md:mb-0">
        {studentDetails && (
          <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg border border-gray mt-4 pb-4">
            <div className="pb-4 pl-8 font-semibold text-lg text-left bg-purple-500 rounded-t-lg pt-3 text-white">
              Student Details
            </div>
            <div className="grid grid-cols-2 mt-4 text-left gap-4">
              <div className="text-left ml-8 font-semibold">Name</div>
              <div>{studentDetails.name}</div>
              <div className="text-left ml-8 font-semibold">College</div>
              <div>{studentDetails.collegeId.name}</div>
              <div className="text-left ml-8 font-semibold">Batch Year</div>
              <div>{studentDetails.batchYear}</div>
              <div className="text-left ml-8 font-semibold">Skills</div>
              <div className="flex flex-row flex-wrap gap-2">
                {studentDetails.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-purple-500 text-white font-bold py-1 px-2 rounded-full text-xs inline-block"
                  >
                    <span className="whitespace-no-wrap">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default StudentDetails;

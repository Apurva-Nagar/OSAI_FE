import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Pagination,
} from "@windmill/react-ui";
import { useState } from "react";
import { Link } from "react-router-dom";

const StudentTable = ({ students, title }) => {
  const RESULTS_PER_PAGE = 10;
  const [page, setPage] = useState(0);

  return (
    <div className="w-full">
      <h3 className="text-left ml-4 font-semibold p-2 text-lg">{title}</h3>
      <TableContainer className="shadow-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Batch Year</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students &&
              students
                .slice((page - 1) * RESULTS_PER_PAGE, page * RESULTS_PER_PAGE)
                .map((student, idx) => (
                  <TableRow
                    key={student._id}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <TableCell>
                      <Link
                        to={`/student/${student._id}`}
                        state={{ studentData: student }}
                      >
                        <div className="flex items-center text-sm hover:text-purple-500">
                          <span className="font-semibold ml-2">
                            {student.name}
                          </span>
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <span className="font-semibold ml-2">
                          {student.batchYear}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <TableFooter>
          {students && (
            <Pagination
              totalResults={students.length}
              resultsPerPage={RESULTS_PER_PAGE}
              onChange={setPage}
              label="Table navigation"
            />
          )}
        </TableFooter>
      </TableContainer>
    </div>
  );
};

export default StudentTable;

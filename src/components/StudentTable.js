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
import { Link } from "react-router-dom";

const StudentTable = ({ students }) => {
  return (
    <div className="w-full md:mt-4">
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
              students.map((student) => (
                <TableRow key={student._id}>
                  <Link
                    to={`/student/${student._id}`}
                    state={{ studentData: student }}
                  >
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <span className="font-semibold ml-2">
                          {student.name}
                        </span>
                      </div>
                    </TableCell>
                  </Link>
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
          <Pagination
            totalResults={10}
            resultsPerPage={4}
            onChange={() => {}}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </div>
  );
};

export default StudentTable;

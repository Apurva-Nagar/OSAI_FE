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

const CollegeTable = ({ colleges, title }) => {
  const RESULTS_PER_PAGE = 10;
  const [page, setPage] = useState(0);

  return (
    <div className="w-full">
      <h3 className="text-left ml-4 font-semibold p-2 text-lg">{title}</h3>
      <TableContainer className="shadow-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>College</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Year Founded</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {colleges &&
              colleges
                .slice((page - 1) * RESULTS_PER_PAGE, page * RESULTS_PER_PAGE)
                .map((college, idx) => (
                  <TableRow
                    key={college._id}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <TableCell>
                      <Link
                        to={`/college/${college._id}`}
                        state={{ collegeData: college }}
                      >
                        <div className="flex items-center text-sm hover:text-purple-500">
                          <span className="font-semibold ml-2 ">
                            {college.name}
                          </span>
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <span className="font-semibold ml-2">
                          {college.state}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <span className="font-semibold ml-2">
                          {college.country}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <span className="font-semibold ml-2">
                          {college.yearFounded}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <TableFooter>
          {colleges && (
            <Pagination
              totalResults={colleges.length}
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

export default CollegeTable;

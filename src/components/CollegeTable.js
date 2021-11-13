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

const CollegeTable = ({ colleges }) => {
  return (
    <div className="w-full md:mt-4">
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
              colleges.map((college) => (
                <TableRow>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <span className="font-semibold ml-2">{college.name}</span>
                    </div>
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

export default CollegeTable;

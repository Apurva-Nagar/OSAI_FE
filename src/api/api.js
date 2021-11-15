const Routes = {
  fetchCollegesByCountry: {
    endpoint: "/colleges",
    method: "GET",
  },

  fetchCollegeDetails: {
    endpoint: "/colleges/{id}",
    method: "GET",
  },

  fetchCollegeStudents: {
    endpoint: "/students",
    method: "GET",
  },

  fetchStudent: {
    endpoint: "/students/{id}",
    method: "GET",
  },
};

export default Routes;

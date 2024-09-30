export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(allEmps) {
      return Object.keys(allEmps).length;
    },
  };
}

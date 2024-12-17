export const addTaskData = (prevData, dataToAdd, firstname) => {
  const employee = prevData.employees.find((emp) => emp.firstName == firstname);
  if (employee) {
    employee.tasks.push(dataToAdd);
    return prevData;
  } else {
    return null;
  }
};

// import React from 'react'

// const tasks = [
//   { name: "John Doe", title: "Deploy update", status: "Accepted" },
//   { name: "Jane Smith", title: "Research market trends", status: "Failed" },
//   { name: "Sarah Johnson", title: "Code review", status: "Completed" },
//   { name: "David Lee", title: "Write documentation", status: "Failed" },
//   { name: "Sarah Johnson", title: "Write documentation", status: "New Task" },
//   { name: "Kevin White", title: "Research market trends", status: "New Task" },
//   { name: "Sarah Johnson", title: "Code review", status: "New Task" },
//   { name: "Michael Brown", title: "Organize team event", status: "Accepted" },
//   { name: "Laura Taylor", title: "Deploy update", status: "Completed" },
//   { name: "Sarah Johnson", title: "Code review", status: "Failed" },
// ];


// const AllTask = () => {
//   return (
//     <div className="mt-5 bg-zinc-800 h-96 overflow-y-auto rounded-xl p-4">
//         <h2 className=' mb-4 text-2xl'>All Tasks</h2>
//       {tasks.map((task, index) => (
//         <Task key={index} task={task} />
//       ))}
//     </div>
//   );
// }

// const Task = ({task}) => {
//     return (
//       <div
//         className={`flex justify-between items-center py-3 mb-3 px-2 rounded-xl ${
//           task.status === "New Task"
//             ? "bg-gradient-to-r from-blue-500 to-blue-700"
//             : task.status === "Completed"
//             ? "bg-gradient-to-r from-green-500 to-green-700"
//             : task.status === "Accepted"
//             ? "bg-gradient-to-r from-teal-500 to-teal-700"
//             : task.status === "Failed"
//             ? "bg-gradient-to-r from-red-500 to-red-700"
//             : "bg-yellow-700" 
//         }`}
//       >
//         <h2 className='font-bold'>{task.name}</h2>
//         <h3 className='text-sm font-semibold'>{task.title}</h3>
//         <h4 className='text-xs'>{task.status}</h4>
//       </div>
//     );
// }

// export default AllTask



import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


const EmployeeList = () => {
  const {employees} = useContext(AuthContext);
  const [expandedEmployeeId, setExpandedEmployeeId] = useState(null);

  const toggleEmployeeTasks = (employeeId) => {
    setExpandedEmployeeId(
      expandedEmployeeId === employeeId ? null : employeeId
    );
  };

  return (
    <div className="mt-5 bg-zinc-800 h-96 overflow-y-auto rounded-xl p-4">
      <h2 className="mb-4 text-2xl">Employees</h2>
      {employees.map((employee) => (
        <div key={employee.id} className="mb-4 rounded-xl pb-2 bg-zinc-900">
          <div
            className=" p-4 rounded-lg cursor-pointer"
            onClick={() => toggleEmployeeTasks(employee.id)}
          >
            <h2 className="font-bold text-lg">{employee.firstName}</h2>
            <p className="text-sm">Email: {employee.email}</p>
          </div>

          {expandedEmployeeId === employee.id && (
            <div className="mt-3 p-4 rounded-xl bg-zinc-700">
              <div className="mb-3">
                <h3 className="text-xl hidden sm:block">Tasks</h3>
                <div className="sm:hidden flex justify-between">
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-4 w-4 rounded-md bg-blue-700"></div>
                    <h4 className="text-xs">New Task</h4>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-4 w-4 rounded-md bg-teal-700"></div>
                    <h4 className="text-xs">Accepted</h4>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-4 w-4 rounded-md bg-green-700"></div>
                    <h4 className="text-xs">Completed</h4>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-4 w-4 rounded-md bg-red-700"></div>
                    <h4 className="text-xs">Failed</h4>
                  </div>
                  
                </div>
              </div>
              <AllTasks tasks={employee.tasks} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AllTasks = ({ tasks }) => {
  return (
    <div className=" overflow-y-auto rounded-xl ">
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
};

const Task = ({ task }) => {
  return (
    <div
      className={`flex justify-between items-center py-3 mb-3 px-2 rounded-xl ${
        task.completed
          ? "bg-gradient-to-r from-green-500 to-green-700"
          : task.failed
          ? "bg-gradient-to-r from-red-500 to-red-700"
          : task.accepted
          ? "bg-gradient-to-r from-teal-500 to-teal-700"
          : "bg-blue-700"
      }`}
    >
      <h2 className="font-bold sm:w-1/3">{task.taskTitle}</h2>
      <h4 className="text-xs sm:text-base sm:w-1/3 sm:text-center">{task.category}</h4>
      <h4 className="hidden sm:block w-1/3 text-right">
        {(task.completed && "Completed") ||
          (task.failed && "Failed") ||
          (task.accepted && "Accepted") ||
          (task.newTask && "New Task")}
      </h4>
    </div>
  );
};

export default EmployeeList;

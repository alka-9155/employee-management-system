import React from 'react'

const TaskListNumbers = ({user}) => {
  return (
    <div className=" flex w-full flex-wrap sm:flex-nowrap mt-10 justify-between gap-y-4 sm:gap-5 ">
      <div className=" w-[48%] p-3 sm:py-6 sm:px-9 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900  hover:bg-gradient-to-l">
        <h2 className="text-3xl font-semibold">{user.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" w-[48%] p-3 sm:py-6 sm:px-9 rounded-xl bg-gradient-to-r from-green-700 to-green-900  hover:bg-gradient-to-l">
        <h2 className="text-3xl font-semibold">{user.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className=" w-[48%] p-3 sm:py-6 sm:px-9 rounded-xl bg-gradient-to-r from-teal-700 to-teal-900  hover:bg-gradient-to-l">
        <h2 className="text-3xl font-semibold">{user.taskCounts.accepted}</h2>
        <h3 className="text-xl font-medium">Accepted</h3>
      </div>
      <div className=" w-[48%] p-3 sm:py-6 sm:px-9 rounded-xl bg-gradient-to-r from-red-700 to-red-900  hover:bg-gradient-to-l">
        <h2 className="text-3xl font-semibold">{user.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
}

export default TaskListNumbers
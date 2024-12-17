import React from "react";

const TaskList = ({user}) => {
  const [tasks, setTasks] = ([user.tasks])

  return (
    <div
      id="tasklist"
      className=" flex flex-col h-96 sm:h-auto rounded-xl overflow-x-auto sm:flex-row mt-10 w-full "
    >
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            totalTasks={tasks.length}
            index={index}
            task={task}
          />
        );
      })}
    </div>
  );
};

const Task = ({ task, index, totalTasks }) => {
  return (
    <div
      className={`w-full p-5 pb-10 ${
        index != 0 ? "-mt-5 sm:mt-0 sm:-ml-10" : ""
      } ${
        index == totalTasks - 1 ? "rounded-xl sm:pr-5" : ""
      } sm:pb-5 sm:pt-10 sm:pr-16 sm:w-[35%] flex-shrink-0 rounded-t-xl sm:rounded-l-xl ${
        task.priority == "high" &&
        "bg-gradient-to-r from-red-700 to-red-900 border border-red-700"
      } ${
        task.priority == "low" &&
        "bg-gradient-to-r from-green-700 to-green-900 border border-green-700"
      } ${
        task.priority == "medium" &&
        "bg-gradient-to-r from-yellow-700 to-yellow-900 border border-yellow-700"
      }
  `}
    >
      <div className="flex justify-between items-center">
        <h3
          className={`text-sm sm:text-xl capitalize font-semibold text-zinc-900 px-3 py-1 rounded ${
            task.priority === "high"
              ? "bg-red-600"
              : task.priority === "medium"
              ? "bg-yellow-500"
              : task.priority === "low"
              ? "bg-green-500"
              : ""
          }`}
        >
          {task.priority}
        </h3>
        <h4 className="text-sm sm:text-lg">{task.taskDate}</h4>
      </div>
      <div className="mt-3">
        <span className=" text-lg sm:text-2xl font-bold">Category: </span>
        <span className=" bg-violet-400 py-2 px-3 rounded-xl ml-2 text-zinc-900 font-semibold">{task.category}</span>
      </div>
      <h2 className="mt-3 text-xl font-bold sm:text-3xl ">
        {task.taskTitle}
      </h2>
      <p className="text-sm sm:text-lg mt-2 text-gray-300 overflow-y-auto max-h-36">
        {task.taskDescription} 
      </p>
      <div>
        {task.accepted && (
          <div className="flex justify-between mt-4 sm:mt-6">
            <button className=" px-2 py-1 sm:py-2 sm:px-5 sm:text-xl bg-green-300 rounded-xl text-zinc-950 font-semibold">
              Mark as Complete
            </button>
            <button className=" px-2 py-1 sm:py-2 sm:px-5 sm:text-xl bg-red-300 rounded-xl text-zinc-950 font-semibold">
              Mark as Failed
            </button>
          </div>
        )}
        {task.newTask && (
          <div className="flex justify-between mt-4 sm:mt-6">
            <button className=" px-2 py-1 sm:py-2 sm:px-5 sm:text-xl bg-green-300 rounded-xl text-zinc-950 font-semibold">
              Accept
            </button>
            <button className=" px-2 py-1 sm:py-2 sm:px-5 sm:text-xl bg-red-300 rounded-xl text-zinc-950 font-semibold">
              Reject
            </button>
          </div>
        )}
        {task.completed && (
          <div className="flex mt-4 sm:mt-6">
            <button className=" px-2 py-1 sm:py-2 sm:px-5 sm:text-xl bg-green-300 rounded-xl text-zinc-950 font-semibold">
              Completed
            </button>
          </div>
        )}
        {task.failed && (
          <div className="flex mt-4 sm:mt-6">
            <button className=" px-2 py-1 sm:py-2 sm:px-5 sm:text-xl bg-red-300 rounded-xl text-zinc-950 font-semibold">
              Failed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;


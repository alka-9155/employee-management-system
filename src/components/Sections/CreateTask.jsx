import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { addTaskData } from "../../utils/helperFunctions";

const CreateTask = () => {
  const [createTaskFormData, setCreateTaskFormData] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    assignTo: "",
    category: "",
    priority: "high",
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setCreateTaskFormData(prev => ({...prev, [name] : value}))
  };
  const prevData = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...createTaskFormData,
      accepted: false,
      newTask: true,
      completed: false,
      failed: false,
    };
    const updatedData = addTaskData(prevData, dataToSend, createTaskFormData.assignTo);
    if(updatedData){
      localStorage.setItem("employees", JSON.stringify(updatedData.employees));
      setCreateTaskFormData({
        taskTitle: "",
        taskDescription: "",
        taskDate: "",
        assignTo: "",
        category: "",
        priority: "high",
      });
      alert("Task created successfully!");
    }else{
      alert("User with firstname " + createTaskFormData.assignTo + " not found!");
    }
    console.log(dataToSend);
    console.log(prevData);
  }
  return (
    <div className="mt-5 bg-zinc-800 rounded-xl p-4">
      <form onSubmit={handleSubmit} className=" w-full">
        <div className=" sm:flex sm:justify-between sm:gap-5">
          <div className=" sm:w-1/2">
            <div>
              <h3 className=" font-bold">Task Title</h3>
              <input
                className=" bg-[#2C2C2C] text-gray-50 placeholder:text-gray-100 px-3 py-2 mt-2 w-full rounded-xl outline-none"
                required
                name="taskTitle"
                onChange={handleChange}
                value={createTaskFormData.taskTitle}
                type="text"
                placeholder="Make a UI Design"
              />
            </div>
            <div className="sm:hidden">
              <h3 className=" mt-5 font-bold">Description</h3>
              <textarea
                className=" bg-[#2C2C2C] text-gray-50 placeholder:text-gray-100 px-3 py-2 mt-2 w-full h-40 rounded-xl outline-none"
                required
                name="taskDescription"
                onChange={handleChange}
                value={createTaskFormData.taskDescription}
                type="text"
                placeholder="Detailed description of task [Max 500 word]"
              />
            </div>
            <div>
              <h3 className=" mt-5 font-bold">Date</h3>
              <input
                className=" bg-[#2C2C2C] appearance-none h-12 text-gray-50 placeholder:text-gray-100 px-3 py-2 mt-2 w-full rounded-xl outline-none"
                required
                name="taskDate"
                onChange={handleChange}
                value={createTaskFormData.taskDate}
                type="date"
              />
            </div>
            <div>
              <h3 className=" mt-5 font-bold">Assign To</h3>
              <input
                className=" bg-[#2C2C2C] text-gray-50 placeholder:text-gray-100 px-3 py-2 mt-2 w-full rounded-xl outline-none"
                required
                name="assignTo"
                onChange={handleChange}
                value={createTaskFormData.assignTo}
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <h3 className=" mt-5 font-bold">Category</h3>
              <input
                className=" bg-[#2C2C2C] text-gray-50 placeholder:text-gray-100 px-3 py-2 mt-2 w-full rounded-xl outline-none"
                required
                name="category"
                onChange={handleChange}
                value={createTaskFormData.category}
                type="text"
                placeholder="Design, Development, etc.."
              />
            </div>
            <div className=" ">
              <h3 className=" font-bold mt-5">Priority</h3>
              <div className=" bg-[#2C2C2C] flex justify-between sm:justify-center sm:gap-20 items-center text-gray-50 px-3 py-1 mt-2 w-full rounded-xl ">
                <div className=" bg-red-300 px-3 sm:px-5 py-1 rounded-xl flex items-center gap-2 sm:gap-4">
                  <label className="text-zinc-900 font-bold" htmlFor="high">
                    High
                  </label>
                  <input
                    type="radio"
                    name="priority"
                    onChange={handleChange}
                    value="high"
                    checked={createTaskFormData.priority === "high"}
                    id="high"
                  />
                </div>
                <div className=" bg-yellow-300 px-3 sm:px-5 py-1 rounded-xl flex items-center gap-2 sm:gap-4">
                  <label className="text-zinc-900 font-bold" htmlFor="medium">
                    Medium
                  </label>
                  <input
                    type="radio"
                    name="priority"
                    onChange={handleChange}
                    value="medium"
                    checked={createTaskFormData.priority === "medium"}
                    id="medium"
                  />
                </div>
                <div className=" bg-green-300 px-3 sm:px-5 py-1 rounded-xl flex items-center gap-2 sm:gap-4">
                  <label className="text-zinc-900 font-bold" htmlFor="low">
                    Low
                  </label>
                  <input
                    type="radio"
                    name="priority"
                    onChange={handleChange}
                    value="low"
                    checked={createTaskFormData.priority === "low"}
                    id="low"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:w-1/2 ">
            <h3 className=" mt-5 font-bold">Description</h3>
            <textarea
              className=" bg-[#2C2C2C] flex-grow text-gray-50 placeholder:text-gray-100 px-3 py-2 mt-2 w-full rounded-xl outline-none"
              required
              name="taskDescription"
              onChange={handleChange}
              value={createTaskFormData.taskDescription}
              type="text"
              placeholder="Detailed description of task [Max 500 word]"
            />
          </div>
        </div>
        <button className="w-full mt-5 bg-zinc-900 py-3 rounded-xl">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;

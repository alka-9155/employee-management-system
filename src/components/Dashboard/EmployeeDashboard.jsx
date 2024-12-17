import React from 'react'
import Header from '../Sections/Header'
import TaskListNumbers from '../Sections/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import Footer from '../Sections/Footer'

const EmployeeDashboard = ({ user, handleLogout }) => {
  return (
    <div className="p-5 sm:p-10 min-h-screen bg-zinc-950">
      <Header user={user} handleLogout={handleLogout} />
      <TaskListNumbers user={user} />
      <TaskList user={user} />
      <Footer />
    </div>
  );
};

export default EmployeeDashboard
import React from 'react'
import Header from '../Sections/Header'
import CreateTask from '../Sections/CreateTask';
import EmployeeList from '../Sections/EmployeeList';
import Footer from '../Sections/Footer';

const AdminDashboard = ({ user, handleLogout }) => {
  return (
    <div className="p-5 sm:p-10 min-h-screen bg-zinc-950">
      <Header user={user} handleLogout={handleLogout} />
      <CreateTask user={user} />
      <EmployeeList user={user} />
      <Footer />
    </div>
  );
};

export default AdminDashboard
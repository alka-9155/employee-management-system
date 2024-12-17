import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  useEffect(()=>{
    try {
      const loggedInUserData = JSON.parse(
        localStorage.getItem("loggedInUserData")
      );
      if(loggedInUserData){
        if(loggedInUserData.role == "admin"){
          setIsAdmin(true);
          setUser(loggedInUserData.data);
        }else if(loggedInUserData.role == "employee"){
          setIsEmployee(true);
          setUser(loggedInUserData.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },[])

  const data = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEmployee, setIsEmployee] = useState(false);
  const handleLogin = (email, password) => {
    let emailFoundInEmployee = data.employees.filter(
      (employee) => employee.email == email
    );
    let emailFoundInAdmin = data.admin.filter((admin) => admin.email == email);
    if (emailFoundInAdmin.length == 0 && emailFoundInEmployee.length == 0) {
      alert("Email not found");
    } else if (emailFoundInAdmin.length > 0) {
      if (password != emailFoundInAdmin[0].password) {
        alert("Incorrect Password!");
      } else {
        setUser(emailFoundInAdmin[0]);
        emailFoundInEmployee = false;
        setIsAdmin(true);
        localStorage.setItem(
          "loggedInUserData",
          JSON.stringify({ role: "admin", data: emailFoundInAdmin[0] })
        );
      }
    } else if (emailFoundInEmployee.length > 0) {
      if (password != emailFoundInEmployee[0].password) {
        alert("Incorrect Password!");
      }else{
        setUser(emailFoundInEmployee[0]);
        emailFoundInAdmin = false;
        setIsEmployee(true);
        localStorage.setItem(
          "loggedInUserData",
          JSON.stringify({ role: "employee", data: emailFoundInEmployee[0] })
        );
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsAdmin(false);
    setIsEmployee(false);
    localStorage.setItem("loggedInUserData",null)
  }
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {isEmployee && (
        <EmployeeDashboard handleLogout={handleLogout} user={user} />
      )}
      {isAdmin && <AdminDashboard handleLogout={handleLogout} user={user} />}
    </>
  );
};

export default App;

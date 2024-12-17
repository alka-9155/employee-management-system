import React from 'react'

const Header = ({ user, handleLogout }) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {user.firstName}👋
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-lg font-medium px-5 py-2 rounded-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header
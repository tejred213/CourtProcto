import React from "react";
import { useNavigate } from "react-router-dom";

function Casestatus() {
  const navigate = useNavigate(); // Hook to navigate to different pages

  // Navigation handlers
  const handleCasesClick = () => navigate("/judgedash");
  const handleCollaboratorsClick = () => navigate("/collaborators");
  const handleCaseStatusClick = () => navigate("/casestatus");
  const handleSettingsClick = () => navigate("/settings");
  const handleLogoutClick = () => {
    alert("You have logged out!");
    navigate("/login");
  };

  // Example onClick function for the Update button
  const handleUpdateClick = () => alert("Case status updated!");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-lg shadow-lg p-6 mr-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Application Name</h2>
        <div className="border-b border-gray-200 mb-6"></div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">QUICK CONTROLS</h3>
        <button
          onClick={handleCasesClick}
          className="flex items-center w-full px-4 py-2 mb-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
        >
          Cases
        </button>
        <button
          onClick={handleCollaboratorsClick}
          className="flex items-center w-full px-4 py-2 mb-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
        >
          Collaborators
        </button>
        <button
          onClick={handleCaseStatusClick}
          className="flex items-center w-full px-4 py-2 mb-2 text-black font-bold"
        >
          Case Status
        </button>
        <div className="border-b border-gray-200 my-6"></div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">OPTIONS</h3>
        <button
          onClick={handleSettingsClick}
          className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
        >
          Settings
        </button>
        <button
          onClick={handleLogoutClick}
          className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Search bar and user info */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-1/2">
            <input
              type="text"
              className="w-full p-2 pl-10 border rounded-full"
              placeholder="Search"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
          <div className="flex items-center">
            <i className="fas fa-user-circle text-3xl text-gray-400 mr-2"></i>
            <span className="text-gray-600">Judge</span>
          </div>
        </div>

        {/* Case Status Heading */}
        <h2 className="text-3xl font-bold mb-6">Case Status</h2>

        {/* Case Status Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-4">CASE ID</th>
                <th className="pb-4">CASE NAME</th>
                <th className="pb-4">CASE DESCRIPTION</th>
                <th className="pb-4">DATE</th>
                <th className="pb-4">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">00002</td>
                <td className="py-4">Rosie Pearson</td>
                <td className="py-4">979 Immanuel Ferry Suite 526</td>
                <td className="py-4">14 Feb 2019</td>
                <td className="py-4">
                  <select className="border rounded p-2">
                    <option value="pending">Pending</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Update Button */}
        <div className="flex justify-end mt-6">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-full"
            onClick={handleUpdateClick}
          >
            Update
          </button>
        </div>
      </main>
    </div>
  );
}

export default Casestatus;

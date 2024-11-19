import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDash ()  {
  const navigate = useNavigate(); // useNavigate for navigation
  
  const handleLogout = () => {
    // Clear any authentication tokens or user data (if stored in local storage/session storage)
    localStorage.removeItem("authToken"); // Example: removing the auth token
    // Redirect to the login page
    navigate("/"); // Redirect to login (assuming you have a login route setup)
  };

  const casesData = [
    {
      id: '00001',
      caseName: 'Christine Brooks',
      caseDescription: '089 Kutch Green Apt. 448',
      date: '14 Feb 2019',
      status: 'Completed',
    },
    {
      id: '00002',
      caseName: 'Rosie Pearson',
      caseDescription: '979 Immanuel Ferry Suite 526',
      date: '14 Feb 2019',
      status: 'Processing',
    },
    {
      id: '00003',
      caseName: 'Darrell Caldwell',
      caseDescription: '8587 Frida Ports',
      date: '14 Feb 2019',
      status: 'Rejected',
    },
    {
      id: '00004',
      caseName: 'Gilbert Johnston',
      caseDescription: '768 Destiny Lake Suite 600',
      date: '14 Feb 2019',
      status: 'Completed',
    },
    {
      id: '00005',
      caseName: 'Alan Cain',
      caseDescription: '042 Mylene Throughway',
      date: '14 Feb 2019',
      status: 'Processing',
    },
    {
      id: '00006',
      caseName: 'Alfred Murray',
      caseDescription: '543 Weimann Mountain',
      date: '14 Feb 2019',
      status: 'Completed',
    },
  ];

  const [cases] = useState(casesData);
  const [filterDate, setFilterDate] = useState('14 Feb 2019');
  const [filterName, setFilterName] = useState('');
  const [filterStatus, setFilterStatus] = useState('');


  const handleAssignRoles = () => {
    console.log('Assign Roles clicked');
    navigate('/roles'); // Navigate to the assign roles page
  };

  const handleCreateCase = () => {
    console.log('Create Case clicked');
    navigate('/caseform'); // Navigate to the create case page
  };

  const handleRolesClick = () => {
    console.log('Roles clicked');
    navigate('/roles'); // Navigate to the roles management page
  };

  const handleUsersClick = () => {
    console.log('Users clicked');
    navigate('/users'); // Navigate to the users page
  };

  const handleCasesClick = () => {
    console.log('Cases clicked');
    navigate('/admindash'); // Navigate to the cases management page
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
    navigate('/settings'); // Navigate to the settings page
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === 'filterDate') {
      setFilterDate(value);
    } else if (name === 'filterName') {
      setFilterName(value);
    } else if (name === 'filterStatus') {
      setFilterStatus(value);
    }
  };


  const filteredCases = cases.filter((c) => {
    return (
      c.date === filterDate &&
      c.caseName.toLowerCase().includes(filterName.toLowerCase()) &&
      (filterStatus === '' || c.status === filterStatus)
    );
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-lg shadow-lg p-6 mr-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Application Name</h2>
            <div className="border-b border-gray-200 mb-6"></div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">QUICK CONTROLS</h3>
            <button
              className="flex items-center w-full px-4 py-2 mb-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
              onClick={handleAssignRoles}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Assign Roles
            </button>
            <button
              className="flex items-center w-full px-4 py-2 mb-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
              onClick={handleCreateCase}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Create Case
            </button>
            <div className="border-b border-gray-200 my-6"></div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">OPTIONS</h3>
            <ul>
              <li className="mb-2">
                <button
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
                  onClick={handleRolesClick}
                >
                  Roles
                </button>
              </li>
              <li className="mb-2">
                <button
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
                  onClick={handleUsersClick}
                >
                  Users
                </button>
              </li>
              <li>
                <button
                  className="block w-full px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-md"
                  onClick={handleCasesClick}
                >
                  Cases
                </button>
              </li>
            </ul>
            <div className="border-b border-gray-200 my-6"></div>
            <ul>
              <li className="mb-2">
                <button
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
                  onClick={handleSettingsClick}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Settings
                </button>
              </li>
              <li>
                <button
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
                  onClick={handleLogout}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                  Logout
                </button>
              </li>
            </ul>
          </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cases</h1>
        {/* Filter inputs... */}
        <div className="mb-4">
          <label className="block text-gray-700">Filter by Date:</label>
          <input
            type="text"
            name="filterDate"
            value={filterDate}
            onChange={handleFilterChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Filter by Name:</label>
          <input
            type="text"
            name="filterName"
            value={filterName}
            onChange={handleFilterChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Filter by Status:</label>
          <select
            name="filterStatus"
            value={filterStatus}
            onChange={handleFilterChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value="">All</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
              <tr>
                <th className="py-3 px-6 text-left">Case ID</th>
                <th className="py-3 px-6 text-left">Case Name</th>
                <th className="py-3 px-6 text-left">Case Description</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {filteredCases.map((c) => (
                <tr key={c.id} className="border-b">
                  <td className="py-3 px-6">{c.id}</td>
                  <td className="py-3 px-6">{c.caseName}</td>
                  <td className="py-3 px-6">{c.caseDescription}</td>
                  <td className="py-3 px-6">{c.date}</td>
                  <td className="py-3 px-6">
                    <span
                      className={`py-1 px-3 rounded-full text-sm font-medium ${
                        c.status === 'Completed'
                          ? 'bg-green-200 text-green-800'
                          : c.status === 'Processing'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 space-x-2 flex">
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;



// import React, { useState } from 'react';

// const casesData = [
//   {
//     id: '00001',
//     caseName: 'Christine Brooks',
//     caseDescription: '089 Kutch Green Apt. 448',
//     date: '14 Feb 2019',
//     status: 'Completed',
//   },
//   {
//     id: '00002',
//     caseName: 'Rosie Pearson',
//     caseDescription: '979 Immanuel Ferry Suite 526',
//     date: '14 Feb 2019',
//     status: 'Processing',
//   },
//   {
//     id: '00003',
//     caseName: 'Darrell Caldwell',
//     caseDescription: '8587 Frida Ports',
//     date: '14 Feb 2019',
//     status: 'Rejected',
//   },
//   {
//     id: '00004',
//     caseName: 'Gilbert Johnston',
//     caseDescription: '768 Destiny Lake Suite 600',
//     date: '14 Feb 2019',
//     status: 'Completed',
//   },
//   {
//     id: '00005',
//     caseName: 'Alan Cain',
//     caseDescription: '042 Mylene Throughway',
//     date: '14 Feb 2019',
//     status: 'Processing',
//   },
//   {
//     id: '00006',
//     caseName: 'Alfred Murray',
//     caseDescription: '543 Weimann Mountain',
//     date: '14 Feb 2019',
//     status: 'Completed',
//   },
// ];

// const App = () => {
//     const [cases, setCases] = useState(casesData);
//     const [filterDate, setFilterDate] = useState('14 Feb 2019');
//     const [filterName, setFilterName] = useState('');
//     const [filterStatus, setFilterStatus] = useState('');
  
//     const handleFilterChange = (event) => {
//       const { name, value } = event.target;
//       if (name === 'filterDate') {
//         setFilterDate(value);
//       } else if (name === 'filterName') {
//         setFilterName(value);
//       } else if (name === 'filterStatus') {
//         setFilterStatus(value);
//       }
//     };
  
//     const handleResetFilter = () => {
//       setFilterDate('14 Feb 2019');
//       setFilterName('');
//       setFilterStatus('');
//     };
  
//     const handleAccept = (id) => {
//       setCases((prevCases) =>
//         prevCases.map((c) =>
//           c.id === id ? { ...c, status: 'Completed' } : c
//         )
//       );
//     };
  
//     const handleReject = (id) => {
//       setCases((prevCases) =>
//         prevCases.map((c) =>
//           c.id === id ? { ...c, status: 'Rejected' } : c
//         )
//       );
//     };
  
//     const filteredCases = cases.filter((c) => {
//       return (
//         c.date === filterDate &&
//         c.caseName.toLowerCase().includes(filterName.toLowerCase()) &&
//         (filterStatus === '' || c.status === filterStatus)
//       );
//     });
  
//     return (
//       <div className="flex h-screen bg-gray-50">
//         {/* Sidebar */}
//         <div className="bg-gray-800 text-white w-64 p-6 flex flex-col space-y-6">
//           <h1 className="text-2xl font-bold">Application Name</h1>
//           {/* Sidebar buttons... */}
//           <button className="mt-auto block w-full bg-red-500 hover:bg-red-600 transition text-white font-medium py-2 px-4 rounded-lg">
//             Logout
//           </button>
//         </div>
  
//         {/* Main Content */}
//         <div className="flex-1 p-6 overflow-auto">
//           <h1 className="text-3xl font-bold text-gray-900 mb-6">Cases</h1>
//           {/* Filter inputs... */}
  
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white rounded-lg shadow-lg">
//               <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
//                 <tr>
//                   <th className="py-3 px-6 text-left">Case ID</th>
//                   <th className="py-3 px-6 text-left">Case Name</th>
//                   <th className="py-3 px-6 text-left">Case Description</th>
//                   <th className="py-3 px-6 text-left">Date</th>
//                   <th className="py-3 px-6 text-left">Status</th>
//                   <th className="py-3 px-6 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-900">
//                 {filteredCases.map((c) => (
//                   <tr key={c.id} className="border-b">
//                     <td className="py-3 px-6">{c.id}</td>
//                     <td className="py-3 px-6">{c.caseName}</td>
//                     <td className="py-3 px-6">{c.caseDescription}</td>
//                     <td className="py-3 px-6">{c.date}</td>
//                     <td className="py-3 px-6">
//                       <span
//                         className={`py-1 px-3 rounded-full text-sm font-medium ${
//                           c.status === 'Completed'
//                             ? 'bg-green-200 text-green-800'
//                             : c.status === 'Processing'
//                             ? 'bg-yellow-200 text-yellow-800'
//                             : 'bg-red-200 text-red-800'
//                         }`}
//                       >
//                         {c.status}
//                       </span>
//                     </td>
//                     <td className="py-3 px-6 space-x-2 flex">
//                       <button
//                         onClick={() => handleAccept(c.id)}
//                         className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
//                       >
//                         Accept
//                       </button>
//                       <button
//                         onClick={() => handleReject(c.id)}
//                         className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
//                       >
//                         Reject
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default App;
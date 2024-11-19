import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddCaseForm = () => {
  const [petitionerFirstName, setPetitionerFirstName] = useState('');
  const [petitionerLastName, setPetitionerLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfFiling, setDateOfFiling] = useState('');
  const [caseType, setCaseType] = useState('');
  const [caseStatus, setCaseStatus] = useState('');
  const [caseDescription, setCaseDescription] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to API
    console.log('Form submitted:', {
      petitionerFirstName,
      petitionerLastName,
      address,
      phoneNumber,
      dateOfFiling,
      caseType,
      caseStatus,
      caseDescription,
    });
  };

  // Button click handlers to navigate to different pages
  const handleAssignRoles = () => navigate('/roles');
  const handleUsersClick = () => navigate('/users');
  const handleCreateCase = () => navigate('/caseform');
  const handleCasesClick = () => navigate('/admindash');
  const handleSettingsClick = () => navigate('/Settings');
  
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear any authentication tokens or user data
    navigate("/"); // Redirect to login (assuming you have a login route set up)
  };

  return (
    <div className="flex flex-wrap justify-center mt-4">
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
                  onClick={handleAssignRoles}
                >
                  Roles
                </button>
              </li>
              <li className="mb-2">
                <button
                  className="block w-full px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-md"
                  onClick={handleUsersClick}
                >
                  Users
                </button>
              </li>
              <li>
                <button
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
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
      <div className="flex-1 p-8 lg:p-12">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6">Add Cases</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="petitionerFirstName" className="block text-gray-700 font-bold mb-2">
                  Petitioner First Name
                </label>
                <input
                  type="text"
                  id="petitionerFirstName"
                  className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Enter your first name"
                  value={petitionerFirstName}
                  onChange={(e) => setPetitionerFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="petitionerLastName" className="block text-gray-700 font-bold mb-2">
                  Petitioner Last Name
                </label>
                <input
                  type="text"
                  id="petitionerLastName"
                  className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Enter your last name"
                  value={petitionerLastName}
                  onChange={(e) => setPetitionerLastName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="dateOfFiling" className="block text-gray-700 font-bold mb-2">
                Date of Filing
              </label>
              <input
                type="date"
                id="dateOfFiling"
                className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
                value={dateOfFiling}
                onChange={(e) => setDateOfFiling(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="caseType" className="block text-gray-700 font-bold mb-2">
                Case Type
              </label>
              <select
                id="caseType"
                className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
                value={caseType}
                onChange={(e) => setCaseType(e.target.value)}
              >
                <option value="">Select case type</option>
                <option value="civil">Civil</option>
                <option value="criminal">Criminal</option>
              </select>
            </div>
            <div>
              <label htmlFor="caseStatus" className="block text-gray-700 font-bold mb-2">
                Case Status
              </label>
              <select
                id="caseStatus"
                className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
                value={caseStatus}
                onChange={(e) => setCaseStatus(e.target.value)}
              >
                <option value="">Select case status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div>
              <label htmlFor="caseDescription" className="block text-gray-700 font-bold mb-2">
                Case Description
              </label>
              <textarea
                id="caseDescription"
                className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter case description"
                value={caseDescription}
                onChange={(e) => setCaseDescription(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
            >
              Add Case
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCaseForm;









// import React, { useState } from 'react';

// const AddCaseForm = () => {
//   const [petitionerFirstName, setPetitionerFirstName] = useState('');
//   const [petitionerLastName, setPetitionerLastName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [dateOfFiling, setDateOfFiling] = useState('');
//   const [caseType, setCaseType] = useState('');
//   const [caseStatus, setCaseStatus] = useState('');
//   const [caseDescription, setCaseDescription] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here, e.g., send data to API
//     console.log('Form submitted:', {
//       petitionerFirstName,
//       petitionerLastName,
//       address,
//       phoneNumber,
//       dateOfFiling,
//       caseType,
//       caseStatus,
//       caseDescription,
//     });
//   };

//   return (
//     <div className="flex flex-wrap justify-center mt-4">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-100 p-4 mb-4 lg:mb-0 lg:mr-8">
//         <h2 className="text-lg font-bold mb-4">Application Name</h2>
//         <ul className="space-y-2">
//           <li>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Assign Roles
//             </button>
//           </li>
//           <li>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Create Case
//             </button>
//           </li>
//         </ul>
//         <hr className="my-4" />
//         <ul className="space-y-2">
//           <li>Options</li>
//           <li>Roles</li>
//           <li>Users</li>
//           <li>Cases</li>
//         </ul>
//         <hr className="my-4" />
//         <ul className="space-y-2">
//           <li>Settings</li>
//           <li>Logout</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8 lg:p-12">
//         <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <h2 className="text-2xl font-bold mb-6">Add Cases</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="petitionerFirstName" className="block text-gray-700 font-bold mb-2">
//                   Petitioner First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="petitionerFirstName"
//                   className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
//                   placeholder="Enter your first name"
//                   value={petitionerFirstName}
//                   onChange={(e) => setPetitionerFirstName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="petitionerLastName" className="block text-gray-700 font-bold mb-2">
//                   Petitioner Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="petitionerLastName"
//                   className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
//                   placeholder="Enter your last name"
//                   value={petitionerLastName}
//                   onChange={(e) => setPetitionerLastName(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
//                 placeholder="Enter your address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
//                 placeholder="Enter your phone number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="dateOfFiling" className="block text-gray-700 font-bold mb-2">
//                 Date of Filing
//               </label>
//               <input
//                 type="date"
//                 id="dateOfFiling"
//                 className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
//                 value={dateOfFiling}
//                 onChange={(e) => setDateOfFiling(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="caseType" className="block text-gray-700 font-bold mb-2">
//                 Case Type
//               </label>
//               <select
//                 id="caseType"
//                 className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
//                 value={caseType}
//                 onChange={(e) => setCaseType(e.target.value)}
//               >
//                 <option value="">Select case type</option>
//                 <option value="civil">Civil</option>
//                 <option value="criminal">Criminal</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="caseStatus" className="block text-gray-700 font-bold mb-2">
//                 Case Status
//               </label>
//               <select
//                 id="caseStatus"
//                 className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
//                 value={caseStatus}
//                 onChange={(e) => setCaseStatus(e.target.value)}
//               >
//                 <option value="">Select case status</option>
//                 <option value="open">Open</option>
//                 <option value="closed">Closed</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="caseDescription" className="block text-gray-700 font-bold mb-2">
//                 Case Description
//               </label>
//               <textarea
//                 id="caseDescription"
//                 className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg shadow-md focus:ring-cyan-500 focus:border-cyan-500"
//                 placeholder="Enter case description"
//                 value={caseDescription}
//                 onChange={(e) => setCaseDescription(e.target.value)}
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
//             >
//               Add Case
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCaseForm;


// return (
//   <div className="flex flex-wrap justify-center mt-4">
//     {/* Sidebar */}
//     <div className="w-64 bg-gray-100 p-4 mb-4 lg:mb-0 lg:mr-8">
//       <h2 className="text-lg font-bold mb-4">Application Name</h2>
//       <ul className="space-y-2">
//         <li>
//           <button
//             onClick={handleRolesClick} // Navigate to Roles
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Assign Roles
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={handleCasesClick} // Navigate to Create Case
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Create Case
//           </button>
//         </li>
//       </ul>
//       <hr className="my-4" />
//       <ul className="space-y-2">
//         <li>
//           <button
//             onClick={handleRolesClick} // Navigate to Roles
//             className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//           >
//             Roles
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={handleUsersClick} // Navigate to Users
//             className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//           >
//             Users
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={handleCasesClick} // Navigate to Cases
//             className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//           >
//             Cases
//           </button>
//         </li>
//       </ul>
//       <hr className="my-4" />
//       <ul className="space-y-2">
//         <li>
//           <button
//             onClick={handleSettingsClick} // Navigate to Settings
//             className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//           >
//             Settings
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//             onClick={() => {
//               localStorage.removeItem("authToken"); // Clear auth token (example)
//               navigate("/login"); // Redirect to login page
//             }}
//           >
//             Logout
//           </button>
//         </li>
//       </ul>
//     </div>
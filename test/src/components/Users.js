import React from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  {
        name: 'Jason Price',
        role: 'Admin',
        email: 'janick_parisian@yahoo.com',
        imageUrl: 'https://example.com/jason-price.jpg', // Replace with actual image URLs
      },
      {
        name: 'Jukkoe Sisao',
        role: 'Lawyer',
        email: 'sibyl_kozey@gmail.com',
        imageUrl: 'https://example.com/jukkoe-sisao.jpg',
      },
      {
        name: 'Jukkoe Sisao',
        role: 'Lawyer',
        email: 'sibyl_kozey@gmail.com',
        imageUrl: 'https://example.com/jukkoe-sisao.jpg',
      },
      {
        name: 'Jukkoe Sisao',
        role: 'Lawyer',
        email: 'sibyl_kozey@gmail.com',
        imageUrl: 'https://example.com/jukkoe-sisao.jpg',
      },
      {
        name: 'Jukkoe Sisao',
        role: 'Lawyer',
        email: 'sibyl_kozey@gmail.com',
        imageUrl: 'https://example.com/jukkoe-sisao.jpg',
      },
      {
        name: 'Jukkoe Sisao',
        role: 'Lawyer',
        email: 'sibyl_kozey@gmail.com',
        imageUrl: 'https://example.com/jukkoe-sisao.jpg',
      },
      {
        name: 'Jukkoe Sisao',
        role: 'Lawyer',
        email: 'sibyl_kozey@gmail.com',
        imageUrl: 'https://example.com/jukkoe-sisao.jpg',
      },
      {
        name: 'Jukkoe Sisao',
        role: 'Lawyer',
        email: 'sibyl_kozey@gmail.com',
        imageUrl: 'https://example.com/jukkoe-sisao.jpg',
      },
      {
        name: 'Jukkoe Sisao',
        role: 'Lawyer',
        email: 'sibyl_kozey@gmail.com',
        imageUrl: 'https://example.com/jukkoe-sisao.jpg',
      },
];

function Users() {
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleAssignRoles = () => {
    console.log('Assign Roles clicked');
    navigate('/roles'); // Navigate to the assign roles page
  };

  const handleCreateCase = () => {
    console.log('Create Case clicked');
    navigate('/create-case'); // Navigate to the create case page
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

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear any authentication tokens or user data
    navigate("/"); // Redirect to login (assuming you have a login route set up)
  };


  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex">
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
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Users</h1>
              <div className="flex items-center w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A8.965 8.965 0 0018 11a9 9 0 10-9 9c1.538 0 2.98-.49 4.15-1.33z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {users.map((user) => (
                <div key={user.email} className="bg-white rounded-lg shadow-lg p-6">
                  <img className="w-16 h-16 rounded-full mb-4" src={user.imageUrl} alt={user.name} />
                  <h2 className="text-lg font-semibold mb-2 text-gray-800">{user.name}</h2>
                  <p className="text-gray-600">{user.role}</p>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;







// import React from 'react';

// const users = [
//   {
//     name: 'Jason Price',
//     role: 'Admin',
//     email: 'janick_parisian@yahoo.com',
//     imageUrl: 'https://example.com/jason-price.jpg', // Replace with actual image URLs
//   },
//   {
//     name: 'Jukkoe Sisao',
//     role: 'Lawyer',
//     email: 'sibyl_kozey@gmail.com',
//     imageUrl: 'https://example.com/jukkoe-sisao.jpg',
//   },
//   {
//     name: 'Jukkoe Sisao',
//     role: 'Lawyer',
//     email: 'sibyl_kozey@gmail.com',
//     imageUrl: 'https://example.com/jukkoe-sisao.jpg',
//   },
//   {
//     name: 'Jukkoe Sisao',
//     role: 'Lawyer',
//     email: 'sibyl_kozey@gmail.com',
//     imageUrl: 'https://example.com/jukkoe-sisao.jpg',
//   },
//   {
//     name: 'Jukkoe Sisao',
//     role: 'Lawyer',
//     email: 'sibyl_kozey@gmail.com',
//     imageUrl: 'https://example.com/jukkoe-sisao.jpg',
//   },
//   {
//     name: 'Jukkoe Sisao',
//     role: 'Lawyer',
//     email: 'sibyl_kozey@gmail.com',
//     imageUrl: 'https://example.com/jukkoe-sisao.jpg',
//   },
//   {
//     name: 'Jukkoe Sisao',
//     role: 'Lawyer',
//     email: 'sibyl_kozey@gmail.com',
//     imageUrl: 'https://example.com/jukkoe-sisao.jpg',
//   },
//   {
//     name: 'Jukkoe Sisao',
//     role: 'Lawyer',
//     email: 'sibyl_kozey@gmail.com',
//     imageUrl: 'https://example.com/jukkoe-sisao.jpg',
//   },
//   {
//     name: 'Jukkoe Sisao',
//     role: 'Lawyer',
//     email: 'sibyl_kozey@gmail.com',
//     imageUrl: 'https://example.com/jukkoe-sisao.jpg',
//   },
// ];

// function Users() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex">
//           {/* Sidebar */}
//           <div className="w-64 bg-white rounded-lg shadow-lg p-6 mr-8">
//             <h2 className="text-2xl font-bold mb-6 text-gray-800">Application Name</h2>
//             <div className="border-b border-gray-200 mb-6"></div>
//             <h3 className="text-lg font-semibold mb-4 text-gray-700">QUICK CONTROLS</h3>
//             <button className="flex items-center w-full px-4 py-2 mb-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md">
//               <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//               </svg>
//               Assign Roles
//             </button>
//             <button className="flex items-center w-full px-4 py-2 mb-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md">
//               <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
//               </svg>
//               Create Case
//             </button>
//             <div className="border-b border-gray-200 my-6"></div>
//             <h3 className="text-lg font-semibold mb-4 text-gray-700">OPTIONS</h3>
//             <ul>
//               <li className="mb-2">
//                 <a href="#roles" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md">
//                   Roles
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#users" className="block px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-md">
//                   Users
//                 </a>
//               </li>
//               <li>
//                 <a href="#cases" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md">
//                   Cases
//                 </a>
//               </li>
//             </ul>
//             <div className="border-b border-gray-200 my-6"></div>
//             <ul>
//               <li className="mb-2">
//                 <a href="#settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md">
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                   </svg>
//                   Settings
//                 </a>
//               </li>
//               <li>
//                 <a href="#logout" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-md">
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
//                   </svg>
//                   Logout
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1">
//             <div className="flex items-center justify-between mb-8">
//               <h1 className="text-3xl font-bold text-gray-800">Users</h1>
//               <div className="flex items-center w-full max-w-md">
//                 <input
//                   type="text"
//                   placeholder="Search users..."
//                   className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//               {users.map((user) => (
//                 <div key={user.email} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
//                   <div className="p-6">
//                     <div className="flex items-center mb-4">
//                       <img src={user.imageUrl} alt={user.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
//                       <div>
//                         <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
//                         <p className="text-sm text-gray-600">{user.role}</p>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 text-sm">{user.email}</p>
//                   </div>
//                   <div className="bg-gray-50 px-6 py-3">
//                     <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Profile</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Users;
// import React, { useState } from 'react';

// const App = () => {
//     // State to control the dropdowns
//     const [showDocuments, setShowDocuments] = useState(false);
//     const [showHearings, setShowHearings] = useState(false);

//     return (
//         <div className="flex h-screen">
//             <aside className="w-1/4 bg-gray-100 p-4">
//                 <div className="text-2xl font-bold mb-8">Application Name</div>
//                 <div className="mb-8">
//                     <div className="text-sm font-bold mb-2">OPTIONS</div>
//                     <div className="mb-2">
//                         <button className="w-full text-left p-2 bg-black text-white">Cases</button>
//                     </div>
//                     <div>
//                         <button className="w-full text-left p-2">Documents</button>
//                     </div>
//                 </div>
//                 <div className="mt-auto">
//                     <div className="mb-2">
//                         <button className="w-full text-left p-2">Settings</button>
//                     </div>
//                     <div>
//                         <button className="w-full text-left p-2">Logout</button>
//                     </div>
//                 </div>
//             </aside>
//             <main className="flex-1 p-8">
//                 <div className="flex justify-between items-center mb-8">
//                     <div className="relative w-1/2">
//                         <input type="text" placeholder="Search" className="w-full p-2 border rounded-full" />
//                         <span className="absolute top-2 right-4 text-black">&#x1F50E;</span> {/* Search Icon (Unicode) */}
//                     </div>
//                     <div className="flex items-center">
//                         <span className="text-2xl mr-2">&#x1F464;</span> {/* User Icon (Unicode) */}
//                         <span>Lawyer</span>
//                     </div>
//                 </div>
//                 <div>
//                     <h1 className="text-3xl font-bold mb-4">Lawyer Cases</h1>
//                     <table className="w-full border-collapse border mb-4">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="border p-2">CASE ID</th>
//                                 <th className="border p-2">CASE NAME</th>
//                                 <th className="border p-2">CLIENT NAME</th>
//                                 <th className="border p-2">CASE STATUS</th>
//                                 <th className="border p-2">NEXT HEARING DATE</th>
//                                 <th className="border p-2">OPPOSING COUNSEL</th>
//                                 <th className="border p-2"></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td className="border p-2">00002</td>
//                                 <td className="border p-2">Rosie Pearson</td>
//                                 <td className="border p-2">Emily Johnson</td>
//                                 <td className="border p-2">Ongoing</td>
//                                 <td className="border p-2">14 Feb 2019</td>
//                                 <td className="border p-2 flex items-center">
//                                     Michael Simmons 
//                                 </td>
//                                 <td className="border p-2 text-center"><i className="fas fa-ellipsis-v"></i></td>
//                             </tr>
//                         </tbody>
//                     </table>
                    
//                     {/* Documents Dropdown */}
//                     <div className="border p-2 mb-2">
//                         <button 
//                             className="w-full text-left" 
//                             onClick={() => setShowDocuments(!showDocuments)}>
//                             Documents <span className="float-right">{showDocuments ? '▲' : '▼'}</span>
//                         </button>
//                         {showDocuments && (
//                             <div className="pl-4 mt-2">
//                                 <p className="p-2 border">Document 1</p>
//                                 <p className="p-2 border">Document 2</p>
//                                 <p className="p-2 border">Document 3</p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Hearings & Proceedings Dropdown */}
//                     <div className="border p-2">
//                         <button 
//                             className="w-full text-left" 
//                             onClick={() => setShowHearings(!showHearings)}>
//                             Hearings & Proceedings <span className="float-right">{showHearings ? '▲' : '▼'}</span>
//                         </button>
//                         {showHearings && (
//                             <div className="pl-4 mt-2">
//                                 <p className="p-2 border">Hearing 1</p>
//                                 <p className="p-2 border">Hearing 2</p>
//                                 <p className="p-2 border">Hearing 3</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default App;













import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Sidebar = () => {
  const navigate = useNavigate(); // Create an instance of useNavigate

  const handleCasesClick = () => {
    navigate("/cases"); // Navigate to Cases page
  };

  const handleDocumentsClick = () => {
    navigate("/DocumentLawyer"); // Navigate to Documents page
  };

  const handleSettingsClick = () => {
    navigate("/Settings"); // Navigate to Settings page
  };

  const handleLogout = () => {
    // Clear any authentication tokens or user data (if stored in local storage/session storage)
    localStorage.removeItem("authToken"); // Example: removing the auth token
    // Redirect to the login page
    navigate("/"); // Redirect to login (assuming you have a login route setup)
  };

  return (
    <aside className="w-1/5 bg-white p-6">
      <h1 className="text-xl font-bold mb-8">Application Name</h1>
      <nav className="mb-8">
        <h2 className="text-gray-500 text-sm mb-2">OPTIONS</h2>
        <ul>
          <li className="mb-4">
            <button
              onClick={handleCasesClick} // Navigate to Cases
              className="block bg-black text-white py-2 px-4 rounded w-full text-left"
            >
              Cases
            </button>
          </li>
          <li>
            <button
              onClick={handleDocumentsClick} // Navigate to Documents
              className="block text-black py-2 px-4 w-full text-left"
            >
              Documents
            </button>
          </li>
        </ul>
      </nav>
      <nav className="mt-auto">
        <ul>
          <li className="mb-4">
            <button
              onClick={handleSettingsClick} // Navigate to Settings
              className="block text-black py-2 px-4 w-full text-left"
            >
              Settings
            </button>
          </li>
          <li>
            <button 
              onClick={handleLogout} // Call handleLogout when clicked
              className="block text-black py-2 px-4 w-full text-left"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-4 rounded-full border border-gray-300"
        />
        <i className="fas fa-search absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400"></i>
      </div>
      <div className="flex items-center">
        <i className="fas fa-user-circle text-2xl mr-2"></i>
        <span>Lawyer</span>
      </div>
    </header>
  );
};

const CaseTable = () => {
  return (
    <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b text-center">CASE ID</th>
          <th className="py-2 px-4 border-b text-center">CASE NAME</th>
          <th className="py-2 px-4 border-b text-center">CLIENT NAME</th>
          <th className="py-2 px-4 border-b text-center">CASE STATUS</th>
          <th className="py-2 px-4 border-b text-center">NEXT HEARING DATE</th>
          <th className="py-2 px-4 border-b text-center">OPPOSING COUNSEL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b text-center">00001</td>
          <td className="py-2 px-4 border-b text-center">Property Dispute</td>
          <td className="py-2 px-4 border-b text-center">John Smith</td>
          <td className="py-2 px-4 border-b text-center">Ongoing</td>
          <td className="py-2 px-4 border-b text-center">01 Mar 2024</td>
          <td className="py-2 px-4 border-b text-center">Emily Adams</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b text-center">00002</td>
          <td className="py-2 px-4 border-b text-center">Contract Breach</td>
          <td className="py-2 px-4 border-b text-center">ACME Corp</td>
          <td className="py-2 px-4 border-b text-center">Resolved</td>
          <td className="py-2 px-4 border-b text-center">15 Feb 2024</td>
          <td className="py-2 px-4 border-b text-center">Michael Johnson</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b text-center">00003</td>
          <td className="py-2 px-4 border-b text-center">Family Custody</td>
          <td className="py-2 px-4 border-b text-center">Sarah Lee</td>
          <td className="py-2 px-4 border-b text-center">Ongoing</td>
          <td className="py-2 px-4 border-b text-center">20 Apr 2024</td>
          <td className="py-2 px-4 border-b text-center">Robert Brown</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b text-center">00004</td>
          <td className="py-2 px-4 border-b text-center">Theft Case</td>
          <td className="py-2 px-4 border-b text-center">Emily Davis</td>
          <td className="py-2 px-4 border-b text-center">Ongoing</td>
          <td className="py-2 px-4 border-b text-center">10 Jun 2024</td>
          <td className="py-2 px-4 border-b text-center">David Wilson</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b text-center">00005</td>
          <td className="py-2 px-4 border-b text-center">Insurance Claim</td>
          <td className="py-2 px-4 border-b text-center">Anna Garcia</td>
          <td className="py-2 px-4 border-b text-center">Pending</td>
          <td className="py-2 px-4 border-b text-center">05 Jul 2024</td>
          <td className="py-2 px-4 border-b text-center">James White</td>
        </tr>
      </tbody>
    </table>
  );
};

function LawyerDash() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header />
        <h2 className="text-2xl font-bold mb-4">Lawyer Cases</h2>
        <CaseTable />
      </main>
    </div>
  );
};

export default LawyerDash;

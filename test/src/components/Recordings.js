import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Recordings() {
  const navigate = useNavigate(); // Initialize navigate
  const [openRecording, setOpenRecording] = useState(null); // State to manage open dropdown

  // Sample data for recordings
  const recordings = [
    {
      id: '00002',
      caseName: 'Rosie Pearson',
      audioFile: 'path/to/audio1.mp3', // Replace with actual audio file path
      date: '2024-10-04',
      time: '10:00 AM',
      session: 'Morning Session',
    },
    {
      id: '00003',
      caseName: 'John Doe',
      audioFiles: [
        {
          file: 'path/to/audio2_part1.mp3', // Part 1 audio file
          date: '2024-10-04',
          time: '1:00 PM',
          session: 'Afternoon Session',
        },
        {
          file: 'path/to/audio2_part2.mp3', // Part 2 audio file
          date: '2024-10-04',
          time: '1:30 PM',
          session: 'Afternoon Session',
        },
        {
          file: 'path/to/audio2_part3.mp3', // Part 3 audio file
          date: '2024-10-04',
          time: '2:00 PM',
          session: 'Afternoon Session',
        },
      ],
    },
    {
      id: '00004',
      caseName: 'Jane Smith',
      audioFile: 'path/to/audio3.mp3', // Replace with actual audio file path
      date: '2024-10-05',
      time: '9:30 AM',
      session: 'Morning Session',
    },
    {
      id: '00005',
      caseName: 'Emily Johnson',
      audioFile: 'path/to/audio4.mp3', // Replace with actual audio file path
      date: '2024-10-05',
      time: '2:00 PM',
      session: 'Afternoon Session',
    },
    // Add more recordings as needed
  ];

  // Define navigation handlers
  const handleRecordClick = () => navigate('/record');
  const handleRecordingsClick = () => navigate('/recordings');
  const handleCaseTranscriptClick = () => navigate('/case-transcript');
  const handleSettingsClick = () => navigate('/settings');
  const handleLogoutClick = () => {
    localStorage.removeItem('authToken'); // Example: remove token from localStorage
    navigate('/'); // Navigate to Login
  };

  const toggleDropdown = (id) => {
    setOpenRecording(openRecording === id ? null : id); // Toggle dropdown
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-6 flex flex-col">
        <h1 className="text-xl font-bold mb-8">Application Name</h1>
        <nav className="space-y-4">
          <div className="text-gray-500">OPTIONS</div>
          <button onClick={handleRecordClick} className="block text-gray-700 w-full text-left">Record</button>
          <button onClick={handleRecordingsClick} className="block bg-black text-white p-2 rounded w-full text-left">Recordings</button>
          <button onClick={handleCaseTranscriptClick} className="block text-gray-700 w-full text-left">Case Transcript</button>
        </nav>
        <div className="mt-auto space-y-4">
          <button onClick={handleSettingsClick} className="block text-gray-700 w-full text-left">Settings</button>
          <button onClick={handleLogoutClick} className="block text-gray-700 w-full text-left">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          {/* Search Bar */}
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded-full pl-10"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>

          {/* User Info */}
          <div className="flex items-center">
            <i className="fas fa-user-circle text-3xl text-gray-400"></i>
            <span className="ml-2 text-gray-700">Stenographer</span>
          </div>
        </div>

        {/* Recordings Section */}
        <h2 className="text-3xl font-bold mb-4">Recordings</h2>

        {/* Case ID Dropdown */}
        <div className="mb-4">
          <label htmlFor="case-id" className="block text-gray-700 mb-2">Case ID</label>
          <select id="case-id" className="w-1/4 p-2 border rounded">
            <option>ID</option>
          </select>
        </div>

        {/* Recordings Table */}
        <table className="w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">CASE NAME</th>
              <th className="p-4 text-left">AUDIO RECORDING</th>
            </tr>
          </thead>
          <tbody>
            {recordings.map((recording) => (
              <React.Fragment key={recording.id || recording.caseName}>
                <tr className="border-b">
                  <td className="p-4">{recording.id || 'N/A'}</td>
                  <td className="p-4">{recording.caseName}</td>
                  <td className="p-4">
                    <button
                      className="text-blue-500 hover:underline flex items-center"
                      onClick={() => toggleDropdown(recording.caseName)}
                    >
                      {openRecording === recording.caseName ? 'Hide Details' : 'Show Details'}
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform ${openRecording === recording.caseName ? 'transform rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-6 6-6-6"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                {openRecording === recording.caseName && (
                  <tr>
                    <td colSpan="3" className="p-4">
                      <div className="bg-gray-100 p-4 rounded-lg">
                        {recording.audioFiles ? (
                          recording.audioFiles.map((audio, index) => (
                            <div key={index} className="mb-4">
                              <p><strong>Date:</strong> {audio.date}</p>
                              <p><strong>Time:</strong> {audio.time}</p>
                              <p><strong>Session:</strong> {audio.session}</p>
                              <audio controls className="w-full mt-2">
                                <source src={audio.file} type="audio/mpeg" />
                                Your browser does not support the audio tag.
                              </audio>
                            </div>
                          ))
                        ) : (
                          <>
                            <p><strong>Date:</strong> {recording.date}</p>
                            <p><strong>Time:</strong> {recording.time}</p>
                            <p><strong>Session:</strong> {recording.session}</p>
                            <audio controls className="w-full mt-2">
                              <source src={recording.audioFile} type="audio/mpeg" />
                              Your browser does not support the audio tag.
                            </audio>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Recordings;
















// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// function Recordings() {
//   const navigate = useNavigate(); // Initialize navigate

//   // Define navigation handlers
//   const handleRecordClick = () => {
//     navigate('/record'); // Navigate to Record
//   };

//   const handleRecordingsClick = () => {
//     navigate('/recordings'); // Navigate to Recordings
//   };

//   const handleCaseTranscriptClick = () => {
//     navigate('/case-transcript'); // Navigate to Case Transcript
//   };

//   const handleSettingsClick = () => {
//     navigate('/settings'); // Navigate to Settings
//   };

//   const handleLogoutClick = () => {
//     // Add logout logic if needed, then navigate
//     localStorage.removeItem('authToken'); // Example: remove token from localStorage
//     navigate('/'); // Navigate to Login
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-1/5 bg-white p-6 flex flex-col">
//         <h1 className="text-xl font-bold mb-8">Application Name</h1>
//         <nav className="space-y-4">
//           <div className="text-gray-500">OPTIONS</div>
//           <button onClick={handleRecordClick} className="block text-gray-700 w-full text-left">Record</button>
//           <button onClick={handleRecordingsClick} className="block bg-black text-white p-2 rounded w-full text-left">Recordings</button>
//           <button onClick={handleCaseTranscriptClick} className="block text-gray-700 w-full text-left">Case Transcript</button>
//         </nav>
//         <div className="mt-auto space-y-4">
//           <button onClick={handleSettingsClick} className="block text-gray-700 w-full text-left">Settings</button>
//           <button onClick={handleLogoutClick} className="block text-gray-700 w-full text-left">Logout</button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           {/* Search Bar */}
//           <div className="relative w-1/3">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 border rounded-full pl-10"
//             />
//             <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
//           </div>

//           {/* User Info */}
//           <div className="flex items-center">
//             <i className="fas fa-user-circle text-3xl text-gray-400"></i>
//             <span className="ml-2 text-gray-700">Stenographer</span>
//           </div>
//         </div>

//         {/* Recordings Section */}
//         <h2 className="text-3xl font-bold mb-4">Recordings</h2>

//         {/* Case ID Dropdown */}
//         <div className="mb-4">
//           <label htmlFor="case-id" className="block text-gray-700 mb-2">Case ID</label>
//           <select id="case-id" className="w-1/4 p-2 border rounded">
//             <option>ID</option>
//           </select>
//         </div>

//         {/* Recordings Table */}
//         <table className="w-full bg-white rounded-lg shadow">
//           <thead>
//             <tr className="border-b">
//               <th className="p-4 text-left">ID</th>
//               <th className="p-4 text-left">CASE NAME</th>
//               <th className="p-4 text-left">AUDIO RECORDING</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b">
//               <td className="p-4">00002</td>
//               <td className="p-4">Rosie Pearson</td>
//               <td className="p-4"></td>
//             </tr>
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// };

// export default Recordings;

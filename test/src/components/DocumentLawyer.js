import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DocumentLawyer() {
  const [view, setView] = useState('documents'); // Default view is documents
  const navigate = useNavigate();

  // Handle navigation between views
  const handleViewChange = (viewName) => {
    setView(viewName);
    if (viewName === 'cases') {
      navigate('/lawyerdash');
    } else if (viewName === 'documents') {
      navigate('/documents');
    } else if (viewName === 'settings') {
      navigate('/Settings');
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Example: removing the auth token
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
        <div>
          <div className="p-6">
            <h1 className="text-xl font-semibold">Application Name</h1>
          </div>
          <nav className="mt-6">
            <div className="px-6 py-2 text-gray-500 uppercase text-xs font-semibold">Options</div>
            <button
              onClick={() => handleViewChange('cases')}
              className={`block w-full text-left px-6 py-2 ${view === 'cases' ? 'bg-black text-white' : 'text-gray-700'}`}
            >
              Cases
            </button>
            <button
              onClick={() => handleViewChange('documents')}
              className={`block w-full text-left px-6 py-2 ${view === 'documents' ? 'bg-black text-white' : 'text-gray-700'}`}
            >
              Documents
            </button>
          </nav>
        </div>
        <div>
          <button
            onClick={() => handleViewChange('settings')}
            className={`block w-full text-left px-6 py-2 ${view === 'settings' ? 'bg-black text-white' : 'text-gray-700'}`}
          >
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-6 py-2 text-gray-700"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative w-1/3">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-full"
              placeholder="Search"
            />
            <span className="absolute top-3 right-4 text-gray-400">&#x1F50D;</span> {/* Search Icon */}
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span>&#128100;</span> {/* User Icon */}
            </div>
            <span className="ml-2">Lawyer</span>
          </div>
        </div>

        {/* Document Management Cases */}
        {view === 'documents' && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Document Management Cases</h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">DOC NAME</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">DOC TYPE</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">UPLOAD DATE</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">ASSOCIATED CASE ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">Contract Agreement</td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      <select className="border rounded-md px-2 py-1">
                        <option>Document</option>
                        <option>Evidence</option>
                        <option>Motion</option>
                        <option>Brief</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">14th Feb 2024</td>
                    <td className="py-4 px-6 text-sm text-gray-700">101</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">Evidence Submission</td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      <select className="border rounded-md px-2 py-1">
                        <option>Document</option>
                        <option>Evidence</option>
                        <option>Motion</option>
                        <option>Brief</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">20th Jan 2024</td>
                    <td className="py-4 px-6 text-sm text-gray-700">102</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">Motion for Summary Judgment</td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      <select className="border rounded-md px-2 py-1">
                        <option>Document</option>
                        <option>Evidence</option>
                        <option>Motion</option>
                        <option>Brief</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">5th Mar 2024</td>
                    <td className="py-4 px-6 text-sm text-gray-700">103</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">Client Brief</td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      <select className="border rounded-md px-2 py-1">
                        <option>Document</option>
                        <option>Evidence</option>
                        <option>Motion</option>
                        <option>Brief</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">10th Apr 2024</td>
                    <td className="py-4 px-6 text-sm text-gray-700">104</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-gray-700">Hearing Notes</td>
                    <td className="py-4 px-6 text-sm text-gray-700">
                      <select className="border rounded-md px-2 py-1">
                        <option>Document</option>
                        <option>Evidence</option>
                        <option>Motion</option>
                        <option>Brief</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">12th May 2024</td>
                    <td className="py-4 px-6 text-sm text-gray-700">105</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default DocumentLawyer;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Import components
// import Login from './components/login'; 
// import JudgeDash from './components/JudgeDash'; 
// import AdminDash from './components/AdminDash';
// import Signup from './components/signup';
// import DefaultLandingPage from './components/DefaultLandingPage';
// import Users from './components/Users';
// import Roles from './components/Roles';
// import AddCaseForm from './components/CaseForm';
// import Collaborators from './components/Collaborators';
// import Stenographer from './components/StenographerDash';
// import CaseRecordings from './components/Recordings';

// // Import PrivateRoute component
// import PrivateRoute from './components/PrivateRoute'; // For protected routes
// import Userauth from './components/Userauth';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         {/* <Route path="/admin" element={<AdminDashboard />} /> */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/default_landing_page" element={<DefaultLandingPage />} />

//         {/* Protected Routes */}
//         <Route 
//           path="/admin" 
//           element={
//             <PrivateRoute>
//               <Userauth />
//             </PrivateRoute>
//           } 
//         />
//         <Route 
//           path="/admin" 
//           element={
//             <PrivateRoute>
//               <AdminDash />
//             </PrivateRoute>
//           } 
//         />
//         <Route 
//           path="/judge" 
//           element={
//             <PrivateRoute>
//               <JudgeDash />
//             </PrivateRoute>
//           } 
//         />
//         <Route 
//           path="/users" 
//           element={
//             <PrivateRoute>
//               <Users />
//             </PrivateRoute>
//           } 
//         />
//         <Route 
//           path="/roles" 
//           element={
//             <PrivateRoute>
//               <Roles />
//             </PrivateRoute>
//           } 
//         />
//         <Route 
//           path="/create-case" 
//           element={
//             <PrivateRoute>
//               <AddCaseForm />
//             </PrivateRoute>
//           } 
//         />
//         <Route 
//           path="/collaborators" 
//           element={
//             <PrivateRoute>
//               <Collaborators />
//             </PrivateRoute>
//           } 
//         />
//         <Route 
//           path="/stenographer" 
//           element={
//             <PrivateRoute>
//               <Stenographer />
//             </PrivateRoute>
//           } 
//         />
//         <Route 
//           path="/case-recordings" 
//           element={
//             <PrivateRoute>
//               <CaseRecordings />
//             </PrivateRoute>
//           } 
//         />

//         {/* Redirect to login if no match */}
//         <Route path="*" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;













import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import JudgeDash from './components/JudgeDash';
import StenographerDash from './components/StenographerDash';
import LawyerDash from './components/LawyerDash';
import AdminDash from './components/AdminDash';
import CaseForm from './components/CaseForm';
import Users from './components/Users';
import Roles from './components/Roles';
import Recordings from './components/Recordings';
import DocumentLawyer from './components/DocumentLawyer';
import Settings from './components/Settings';
import Collaborators from './components/Collaborators';
import Casestatus from './components/Casestatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/judgedash" element={<JudgeDash />} />
        <Route path="/stenographerdash" element={<StenographerDash />} />
        <Route path="/lawyerdash" element={<LawyerDash />} />
        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/caseform" element={<CaseForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/recordings" element={<Recordings />} />
        <Route path="/documentlawyer" element={<DocumentLawyer />} />\
        <Route path="/settings" element={<Settings />} />
        <Route path="/collaborators" element={<Collaborators />} />
        <Route path="/casestatus" element={<Casestatus />} />
      </Routes>
    </Router>
  );
}

export default App;

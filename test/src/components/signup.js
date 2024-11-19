import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email, password, role };

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        if (result.message.includes('Redirecting')) {
          navigate('/default_landing_page'); // Redirect to default landing page if user found in temp collection
        } else {
          navigate('/default_landing_page'); // Redirect after successful signup
        }
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Error signing up');
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-semibold mb-4">Create an account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="judge">Judge</option>
              <option value="stenographer">Stenographer</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function CreateAccount() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [backendError, setBackendError] = useState('');
//   const [currentStep, setCurrentStep] = useState(1);
//   const navigate = useNavigate();

//   // Simple email validation function
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Handle "Next" button click for step navigation
//   const handleNext = () => {
//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }
//     setEmailError('');
//     setCurrentStep(2); // Move to step 2
//   };

//   // Handle form submission and send account creation request to backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setBackendError('');

//     try {
//       const response = await fetch('http://localhost:5000/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//           fullName,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log('Account successfully created:', data);
//         // Redirect to login page after successful account creation
//         navigate('/');
//       } else {
//         // Handle backend validation errors or other issues
//         setBackendError(data.error || 'Failed to create account.');
//       }
//     } catch (error) {
//       console.error('Error creating account:', error);
//       setBackendError('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-10 rounded-lg shadow-lg w-96">
//         <h2 className="text-center text-2xl font-semibold mb-4">Create an account</h2>
//         <p className="text-center text-gray-600 mb-8">
//           Already have an account?{' '}
//           <button onClick={() => navigate('/')} className="text-indigo-600 hover:underline">
//             Log in
//           </button>
//         </p>

//         {/* Step indicators */}
//         <div className="flex justify-between items-center mb-10">
//           <div className="flex items-center">
//             <span className={`rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold mr-2 ${currentStep >= 1 ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}>1</span>
//             <span className={`text-sm ${currentStep >= 1 ? 'text-gray-700' : 'text-gray-500'}`}>Enter your email address</span>
//           </div>
//           <div className="flex-grow mx-3 h-0.5 bg-gray-300"></div>
//           <div className="flex items-center">
//             <span className={`rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold mr-2 ${currentStep >= 2 ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}>2</span>
//             <span className={`text-sm ${currentStep >= 2 ? 'text-gray-700' : 'text-gray-500'}`}>Provide your basic info</span>
//           </div>
//           <div className="flex-grow mx-3 h-0.5 bg-gray-300"></div>
//           <div className="flex items-center">
//             <span className={`rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold ${currentStep >= 3 ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}>3</span>
//             <span className={`text-sm ${currentStep >= 3 ? 'text-gray-700' : 'text-gray-500'}`}>Create your password</span>
//           </div>
//         </div>

//         {/* Step 1: Email input */}
//         {currentStep === 1 && (
//           <div className="mb-8">
//             <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
//               What's your email?
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
//             <button
//               className={`w-full py-3 px-4 rounded-lg text-white font-semibold mt-4 ${email ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300'}`}
//               type="button"
//               onClick={handleNext}
//               disabled={!email}
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {/* Step 2: Basic info */}
//         {currentStep === 2 && (
//           <div className="mb-8">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your full name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />
//             <button
//               className="w-full py-3 px-4 rounded-lg text-white font-semibold mt-4 bg-indigo-600 hover:bg-indigo-700"
//               type="button"
//               onClick={() => setCurrentStep(3)}
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {/* Step 3: Password creation */}
//         {currentStep === 3 && (
//           <form onSubmit={handleSubmit} className="mb-8">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Create Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter a strong password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {backendError && <p className="text-red-500 text-sm mt-2">{backendError}</p>}
//             <button
//               className="w-full py-3 px-4 rounded-lg text-white font-semibold mt-4 bg-indigo-600 hover:bg-indigo-700"
//               type="submit"
//             >
//               Create Account
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CreateAccount;















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function CreateAccount() {
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [currentStep, setCurrentStep] = useState(1);
//   const navigate = useNavigate();

//   // Simple email validation function
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Handle "Next" button click
//   const handleNext = () => {
//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }
//     setEmailError('');
//     setCurrentStep(2); // Move to step 2
//   };

//   // Handle "Submit" button for creating account
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call your backend API here to create the account
//     console.log('Account creation submitted:', { email });
//     // Redirect to next page or show confirmation
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-10 rounded-lg shadow-lg w-96">
//         <h2 className="text-center text-2xl font-semibold mb-4">Create an account</h2>
//         <p className="text-center text-gray-600 mb-8">
//           Already have an account?{' '}
//           <button onClick={() => navigate('/')} className="text-indigo-600 hover:underline">
//             Log in
//           </button>
//         </p>

//         {/* Step indicators */}
//         <div className="flex justify-between items-center mb-10">
//           <div className="flex items-center">
//             <span className={`rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold mr-2 ${currentStep >= 1 ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}>1</span>
//             <span className={`text-sm ${currentStep >= 1 ? 'text-gray-700' : 'text-gray-500'}`}>Enter your email address</span>
//           </div>
//           <div className="flex-grow mx-3 h-0.5 bg-gray-300"></div>
//           <div className="flex items-center">
//             <span className={`rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold mr-2 ${currentStep >= 2 ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}>2</span>
//             <span className={`text-sm ${currentStep >= 2 ? 'text-gray-700' : 'text-gray-500'}`}>Provide your basic info</span>
//           </div>
//           <div className="flex-grow mx-3 h-0.5 bg-gray-300"></div>
//           <div className="flex items-center">
//             <span className={`rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold ${currentStep >= 3 ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}>3</span>
//             <span className={`text-sm ${currentStep >= 3 ? 'text-gray-700' : 'text-gray-500'}`}>Create your password</span>
//           </div>
//         </div>

//         {/* Step 1: Email input */}
//         {currentStep === 1 && (
//           <div className="mb-8">
//             <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
//               What's your email?
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
//             <button
//               className={`w-full py-3 px-4 rounded-lg text-white font-semibold mt-4 ${email ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300'}`}
//               type="button"
//               onClick={handleNext}
//               disabled={!email}
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {/* Step 2: Basic info (example of additional fields) */}
//         {currentStep === 2 && (
//           <div className="mb-8">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your full name"
//             />
//             <button
//               className="w-full py-3 px-4 rounded-lg text-white font-semibold mt-4 bg-indigo-600 hover:bg-indigo-700"
//               type="button"
//               onClick={() => setCurrentStep(3)}
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {/* Step 3: Password creation */}
//         {currentStep === 3 && (
//           <form onSubmit={handleSubmit} className="mb-8">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Create Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter a strong password"
//             />
//             <button
//               className="w-full py-3 px-4 rounded-lg text-white font-semibold mt-4 bg-indigo-600 hover:bg-indigo-700"
//               type="submit"
//             >
//               Create Account
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CreateAccount;

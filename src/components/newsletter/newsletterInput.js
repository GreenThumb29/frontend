// import React, { useState } from 'react';
// import { useMutation, gql } from "@apollo/client";

// const ADD_USERINFROMATION = gql`
//   mutation addUserInformation(
//     $agreementAccepted: Boolean!,
//     $emailAdress: String!,
//     $username: String!,
//     $userOrganizationName: String!
//   ) {
//     createUserInformation(
//       data: {agreementAccepted: $agreementAccepted, emailAdress: $emailAdress, userName: $username, userOrganizationName: $userOrganizationName}
//     ) {
//       id
//     }
//   }
// `;

// const NewsLetterInput = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [addUserInformation] = useMutation(ADD_USERINFROMATION);
//   const [form, setForm] = useState({
//     username: '',
//     email: '',
//     phoneNumber: '',
//     organizationName: '',
//     agreementAccepted: false, // Added for the checkbox
//   });
//   const [error, setError] = useState('');

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//     setError('');
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Check if any field is empty or null
//     if (!form.username || !form.email || !form.agreementAccepted) {
//       setError('Please fill out all fields & accept the agreement.');
//       return;
//     }

//     try {
//       await addUserInformation({
//         variables: {
//           agreementAccepted: form.agreementAccepted,
//           emailAdress: form.email,
//           username: form.username,
//           userOrganizationName: form.organizationName,
//         },
//       });
//       togglePopup();
//     } catch (error) {
//       console.error('Error submitting form:', error.message);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, type, value, checked } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//     setError('');
//   };

//   return (
//     <div className="mt-6">
//       {showPopup ? (
//           <div className={`popup-form-overlay ${error ? 'error' : ''}`}>
//           <div className={`popup-form bg-app.darkGreen p-8 rounded-md ${error ? 'error' : ''}`}>
//               <h3 className="text-app.yellow text-lg font-medium mb-4">Add Details!</h3>
//             <form onSubmit={handleFormSubmit} className="space-y-4">
//               <div className="flex flex-col">
//               <label className="text-app.yellow">Name:</label>
//                 <input type="text" name="username" onChange={handleChange} className="input-field" />
               
//               </div>
//               <div className="flex flex-col">
//                 <label className="text-app.yellow">Email:</label>
//                 <input type="email" name="email" onChange={handleChange} className="input-field" />
//               </div>
//               <div className="flex flex-col">
//                 <label className="text-app.yellow">Phone Number:</label>
//                 <input type="tel" name="phoneNumber" onChange={handleChange} className="input-field" />
//               </div>
//               <div className="flex flex-col">
//                 <label className="text-app.yellow">Organization Name:</label>
//                 <input type="text" name="organizationName" onChange={handleChange} className="input-field" />
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="agreementAccepted"
//                   onChange={handleChange}
//                   checked={form.agreementAccepted}
//                   className="mr-2"
//                 />
//                 <label className="text-app.yellow">I agree to the terms and conditions</label>
//               </div>
//               {error && <p style={{fontSize : '12px'}} className="text-red-500 mt-4">{error}</p>}
//               <div className="flex justify-end">
//                 <button type="submit" className="btn-submit px-2 py-1 mr-2 border border-app.yellow rounded-full bg-app.yellow text-black">Submit</button>
//                 <button onClick={togglePopup} className="btn-cancel px-2 py-1 border border-app.yellow rounded-full bg-app.yellow text-black ml-auto">Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       ) : (
//         <button className="px-4 py-2 border border-app.yellow rounded-full bg-app.yellow text-black" onClick={togglePopup}>
//           Contact Us
//         </button>
//       )}
//     </div>
//   );
// };

// export default NewsLetterInput;







import React, { useState } from 'react';
import { useMutation, gql } from "@apollo/client";

const ADD_USERINFROMATION = gql`
  mutation addUserInformation(
    $agreementAccepted: Boolean!,
    $emailAdress: String!,
    $username: String!,
    $userOrganizationName: String!
  ) {
    createUserInformation(
      data: {agreementAccepted: $agreementAccepted, emailAdress: $emailAdress, userName: $username, userOrganizationName: $userOrganizationName}
    ) {
      id
    }
  }
`;

const NewsLetterInput = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [addUserInformation] = useMutation(ADD_USERINFROMATION);
  const [form, setForm] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    organizationName: '',
    agreementAccepted: false,
  });
  const [error, setError] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setError(null); // Reset error when toggling the popup
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.agreementAccepted) {
      setError('Please fill out all fields & accept the agreement.');
      return;
    }

    try {
      await addUserInformation({
        variables: {
          agreementAccepted: form.agreementAccepted,
          emailAdress: form.email,
          username: form.username,
          userOrganizationName: form.organizationName,
        },
      });
      togglePopup();
      setSuccessMessage('Form submitted successfully!');
      // Display success message for 2 seconds and then clear it
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="mt-6" >
      {showPopup ? (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            right:'-5%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: '500px',
              background: '#003028',
              padding: '24px',
              borderRadius: '8px',
            }}
          >
            <h3 style={{ color: '#FFE977', fontSize: '1.5rem', marginBottom: '1rem' }}>Let's Connect!</h3>
             {successMessage ? (
              <p style={{ color: 'green', marginBottom: '1rem' }}>{successMessage}</p>
            ) : (
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ color: '#FFE977', marginBottom: '0.5rem', display:'block' }}>Name:</label>
                <div className="flex flex-col w-full lg:w-4/4 text-app.yellow">
                  <input
                    className="bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    //placeholder="Enter..."
                    style={{ width: '100%' }} // Make the input take up the full width
                  />
                  </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ color: '#FFE977', marginBottom: '0.5rem', display:'block' }}>Email:</label>
                <div className="flex flex-col w-full lg:w-4/4 text-app.yellow">
                
                <input className="bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2"
                type="email" name="email" onChange={handleChange} style={{ width:'100%' }} />
              </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ color: '#FFE977',marginBottom: '0.5rem', display:'block'  }}>Phone Number:</label>
                <div className="flex flex-col w-full lg:w-4/4 text-app.yellow">
                
                <input 
                className="bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2"
                type="tel" name="phoneNumber" onChange={handleChange} style={{width:'100%' }} />
              </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ color: '#FFE977', marginBottom: '0.5rem', display:'block'  }}>Organization Name:</label>
                <div className="flex flex-col w-full lg:w-4/4 text-app.yellow">
                <input 
                className="bg-app.darkGreen border-colors-app.yellow border-app.yellow border placeholder:text-app.yellow px-3 py-2"

                type="text" name="organizationName" onChange={handleChange} style={{ width:'100%' }} />
              </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ color: '#FFE977', display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    name="agreementAccepted"
                    onChange={handleChange}
                    checked={form.agreementAccepted}
                    style={{ marginRight: '0.5rem' }}
                  />
                  I agree to the terms and conditions
                </label>
              </div>
              {error && <p style={{ fontSize: '12px', color: '#FF5050', marginTop: '1rem' }}>{error}</p>}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="submit" style={{ padding: '8px', borderRadius: '4px', marginRight: '0.5rem', background: '#FFE977', color: '#2B302B' }}>Submit</button>
                <button onClick={togglePopup} style={{ padding: '8px', borderRadius: '4px', background: '#FFE977', color: '#2B302B' }}>Cancel</button>
              </div>
            </form>
            )}
          </div>
        </div>
      ) : (
        <div>
        <button
          style={{
            padding: '8px',
            borderRadius: '4px',
            background: '#FFE977',
            color: '#2B302B',
          }}
          onClick={togglePopup}
        >
          Contact Us
        </button>
        {successMessage && (
            <p style={{ color: '#FFE977', marginTop: '1rem' }}>{successMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsLetterInput;


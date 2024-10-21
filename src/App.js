// // // src/App.js
// // import React, { useEffect, useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // const App = () => {
// //   const [recipes, setRecipes] = useState([]);

// //   // Fetch recipes from the backend when the component mounts
// //   useEffect(() => {
// //     fetch('http://localhost:5000/recipes')
// //       .then((response) => response.json())
// //       .then((data) => setRecipes(data));
// //   }, []);

// //   return (
// //     <div className="container mt-4"> {/* Fixed className typo */}
// //       <h1>Recipe Showcase</h1> {/* Corrected spelling: "Receipe" to "Recipe" */}
// //       <div className="row">
// //         {recipes.map((recipe) => ( // Removed extra parentheses
// //           <div className="col-md-4" key={recipe.id}> {/* Fixed typo: "receipe.id" to "recipe.id" */}
// //             <div className="card" style={{ width: '18rem' }}> {/* Added card class */}
// //               <img
// //                 src="https://via.placeholder.com/150" // Placeholder image
// //                 className="card-img-top"
// //                 alt={recipe.title}
// //               />
// //               <div className="card-body">
// //                 <h5 className="card-title">{recipe.title}</h5> {/* Added card title class */}
// //                 <h6>Ingredients:</h6>
// //                 <ul className="list-group list-group-flush">
// //                   {recipe.ingredients.map((ingredient, index) => ( // Fixed syntax: removed extra parentheses
// //                     <li className="list-group-item" key={index}>{ingredient}</li> // Added list group item class
// //                   ))}
// //                 </ul>
// //                 <h6>Instructions:</h6>
// //                 <p className="card-text">{recipe.instructions}</p> {/* Added card text class */}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;


// import React, { useState, useEffect } from "react";

// function App() {
//   const [contacts, setContacts] = useState([]);  // State to hold contacts
//   const [name, setName] = useState("");            // State for contact name
//   const [phone, setPhone] = useState("");          // State for contact phone number

//   // Fetch contacts from the backend
//   const fetchContacts = async () => {
//     const response = await fetch("http://localhost:5000/contacts");
//     const data = await response.json();
//     setContacts(data);
//   };

//   useEffect(() => {
//     fetchContacts();  // Fetch contacts when the component mounts
//   }, []);

//   // Handle form submission
//   const addContact = async (e) => {
//     e.preventDefault();  // Prevent page refresh

//     // Send new contact data to the backend
//     await fetch("http://localhost:5000/contacts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, phone }),
//     });

//     // Clear input fields
//     setName("");
//     setPhone("");
//     fetchContacts();  // Refresh the contacts list
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Personal Phone Directory</h1>
//       <form onSubmit={addContact}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ margin: "10px", padding: "5px" }}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           style={{ margin: "10px", padding: "5px" }}
//           required
//         />
//         <button type="submit" style={{ padding: "5px 10px" }}>Add Contact</button>
//       </form>
//       <h2>Contact List:</h2>
//       <ul>
//     {contacts.map((contact) => (
//         <li key = {contact.id}>{contact.phone}:{contact.name}</li>
//     ))}
// </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission to calculate BMI
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send data to backend
    const response = await fetch("http://localhost:5000/bmi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weight: parseFloat(weight), height: parseFloat(height) })
    });

    const data = await response.json();
      setBmiResult(data);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
            required
          />
        </div>
        <div>
          <label>Height (m): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {/* Display the result if BMI is calculated */}
      {bmiResult && (
        <div>
          <h2>Your BMI: {bmiResult.bmi}</h2>
          <p>Health Category: {bmiResult.category}</p>
        </div>
      )}
    </div>
  );
}

export default App;

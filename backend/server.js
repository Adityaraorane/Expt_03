// // // server.js
// // const express = require("express");
// // const cors = require("cors");
// // const app = express();
// // const port = 5000;

// // app.use(cors()); // Enable CORS for all routes

// // // Sample recipe data
// // const recipes = [
// //   {
// //     id: 1,
// //     title: "Spaghetti Carbonara",
// //     ingredients: ["spaghetti", "eggs", "parmesan cheese", "bacon", "black pepper"],
// //     instructions: "Boil pasta. Cook bacon. Mix eggs and cheese. Combine all.",
// //   }
// // ];

// // // GET endpoint to fetch the list of recipes
// // app.get("/recipes", (req, res) => {
// //   res.json(recipes);
// // });

// // // Start the server
// // app.listen(port, () => {
// //   console.log(`Server is running on http://localhost:${port}`);
// // });

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = 5000;

// app.use(cors()); // Enable CORS
// app.use(express.json()); // Parse JSON bodies

// let contacts = []; // In-memory array to hold contacts
// let id = 1; // To give a unique ID to each contact

// // GET endpoint to retrieve contacts
// app.get("/contacts", (req, res) => {
//   res.json(contacts);
// });

// // POST endpoint to add a new contact
// app.post("/contacts", (req, res) => {
//   const { name, phone } = req.body;
//   const newContact = { id, name, phone };
//   contacts.push(newContact);
//   id++; // Increment ID for the next contact
//   res.status(201).json(newContact); // Send the newly created contact back
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/bmi",(req,res) => {
    const {weight, height} = req.body;
    const bmi = weight / (height);
    let category = "";
    if (bmi <20){
        category = "Underweight";
    }
    else{
        category = "obese";
    }
    res.json({ bmi: bmi.toFixed(2), category});
});

app.listen(5000,() => {
    console.log("Server is running");
});


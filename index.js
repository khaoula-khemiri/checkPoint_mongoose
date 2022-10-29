const express = require("express");
const connectDB = require("./config/mongo");
require("dotenv").config();
const Person = require("./models/Person");
const app = express();

connectDB();

const port = 5000;
//Create and Save a Record of a Model

// let person = new Person({
//     name: 'ali',
//     age: 24,
//     favoriteFoods: ["Salad", "Sandwich"]
// })

// person.save(function (err, data) {
//     err ? console.log(err) : console.log(data)
// })

//Create Many Records with model.create()

// Person.create(
//     [
//         { name: "ahmed", age: 25, favoriteFoods: ["Salad", "Sandwich", "burritos"] },
//         { name: "Mary", age: 18, favoriteFoods: ["Salad", "Fish"] },
//         {
//             name: "Mary", age: 27, favoriteFoods: ["Fish", "Sandwich", "burritos"]
//         },
//     ],
//     (err, data) => (err ? console.log(err) : console.log(data))
// );


//Use model.find() to Search Your Database

// const findPerson = async (req, res) => {
//     const person = await Person.find({ name: "Mary" });
//     console.log("person", person);
// };

// findPerson();

//Use model.findOne() to Return a Single Matching Document from Your Database

// const findIdPerson = async (req, res) => {
//     const person = await Person.findOne({ favoriteFoods: "Sandwich" });
//     console.log("person", person);
// };

// findIdPerson();



//Use model.findById() to Search Your Database By _id

// const findPersonById = async (req, res) => {
//     const person = await Person.findById("635d055781cbf0ff12598f6b");
//     console.log("person", person);
// };

// findPersonById();


//Perform Classic Updates by Running Find, Edit, then Save

// const updatePerson = async (req, res) => {
//     const person = await Person.findById("635d055781cbf0ff12598f6b");

//     if (person) {
//         console.log("person", person);
//         person.favoriteFoods.push("hamburger");
//         await person.save();
//     }
// };

// updatePerson();

//Perform New Updates on a Document Using model.findOneAndUpdate()

// const findUpdatePerson = async (req, res) => {
//     const person = await Person.findOneAndUpdate(
//         { name: "ali" },
//         { age: 20 },
//         {
//             new: true,
//             runValidators: true
//         });

//     if (person) {
//         console.log("person", person);

//     }
// };

// findUpdatePerson();

//Delete One Document Using model.findByIdAndRemove

// const findOneRemovePerson = async (req, res) => {
//     await Person.findByIdAndRemove("635d0f9d59b96068afbf808e")
//         .then(response => {
//             console.log(response)
//         })
//         .catch(err => {
//             console.error(err)
//         })
// };

// findOneRemovePerson();



//MongoDB and Mongoose - Delete Many Documents with model.remove()

// const findRemovePerson = async (req, res) => {
//     await Person.remove(
//         { name: "Mary" },
//         {
//             new: true,
//             runValidators: true
//         })
//         .then(response => {
//             console.log(response)
//         })
//         .catch(err => {
//             console.error(err)
//         })

// };

// findRemovePerson();

//Chain Search Query Helpers to Narrow Search Results

// const find = async (req, res) => {
//     await Person.find({ favoriteFoods: "burritos" })
//         .limit(2)
//         .sort({ name: 1 })
//         .select({ age: false })
//         .exec()
//         .then(docs => {
//             console.log(docs)
//         })
//         .catch(err => {
//             console.error(err)
//         })
// }

// find()






app.listen(port, (err) =>
    err ? console.log(err) : console.log(`this server is runnig on port ${port}`)
);
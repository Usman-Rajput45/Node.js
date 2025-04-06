const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 18 },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  // phoneNumber: { type: String, required: true, match: /^[0-9]{10,15}$/ },
  phoneNumber: { type: Number, required: true },
  salary: { type: Number, required: true, min: 0 },
  work: { type: String, required: true, enum: ["chef", "manager", "waiter"] }
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person; // ✅ Export the model correctly

const express = require('express');
const router = express.Router();
const Person = require("./../person");

// Get Method for person
router.get("/", async (req, res) => {
    try {
      const persons = await Person.find(); // 🔍 Fetch all persons
      res.status(200).json(persons);
    } catch (error) {
      console.error("❌ Error Fetching Persons:", error);
      res.status(500).json({ message: "Error fetching persons", error: error.message });
    }
  });

  // Post method for person
router.post("/", async (req, res) => {
    try {
      const data = req.body;
      console.log("Received Data:", data); // Debugging
  
      const newPerson = new Person(data); // ✅ Corrected Model Usage
      const savedPerson = await newPerson.save();
  
      res.status(201).json({ message: "Person saved successfully", person: savedPerson });
    } catch (error) {
      console.error("❌ Error Saving Person:", error);
      res.status(400).json({ message: "Error saving person", error: error.message });
    }
  });

  //Parameters in Express js

router.get('/:worktype',async (req, res) => {
    try{
    const worktype = req.params.worktype;
    if(worktype == "chef" || worktype == "waiter" || worktype == "manager" ) {
    const response =await Person.find({work: worktype});
    console.log("Response fetched");
    res.status(200).json(response);
   
   
    }else{
     res.status(400).json({errro: "Bad request"});
    }
    }catch(error) {
   console.log(error);
   res.status(500).json({error: "Inernal Error"})
    }
   });


router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;        // 📥 ID from URL
    const updatedData = req.body;          // 📦 New data from request body

    const options = { new: true };         // This option returns the updated document

    const result = await Person.findByIdAndUpdate(personId, updatedData, options);

    if (!result) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.status(200).json({ message: "Person updated successfully", data: result });

  } catch (error) {
    console.error("❌ Error updating person:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

router.delete('/:id', async(req, res) => {
try{
  const personId = req.params.id;
  const results = await Person.findByIdAndDelete(personId);
  if(!results){
    return res.status(404).json({error: "Person Not Found"})
  }
  console.log("data deleted");
  res.status(200).json({message: "Person deleted successfully"})
}catch(err){
  console.log(err);
  res.status(500).json({error: "Internal Server Error"})

}
});



   module.exports = router;
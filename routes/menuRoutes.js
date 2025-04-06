const express = require('express');
const router = express.Router();
const Menu = require('./../menu');


// Get Method for menu

router.get("/", async (req, res) => {
    try {
      const menus = await Menu.find(); // 🔍 Fetch all persons
      res.status(200).json(menus);
    } catch (error) {
      console.error("❌ Error Fetching Persons:", error);
      res.status(500).json({ message: "Error fetching persons", error: error.message });
    }
  });
  
  //Post Method for menu
  
  router.post("/", async (req, res) => {
    try {
      const data = req.body;
      console.log("Received Data:", data); // Debugging
  
      const newMenu = new Menu(data); // ✅ Corrected Model Usage
      const savedMenu = await newMenu.save();
  
      res.status(201).json({ message: "Person saved successfully", person: savedMenu });
    } catch (error) {
      console.error("❌ Error Saving Person:", error);
      res.status(400).json({ message: "Error saving person", error: error.message });
    }
  });

  router.get('/:Taste', async(req, res)=> {
 try{
    const Taste = req.params.Taste;
    if( 
        Taste == 'sweet' || Taste == 'savory' || Taste == 'spicy' || Taste == 'bitter' || Taste == 'sour' || Taste == 'umami'){
        console.log("Taste found");
        const response =await Menu.find({taste: Taste});
        console.log("Data Getted")
        res.status(200).json(response);
    }else{
        res.status(404).json({error: "request not found"})
    }
  
 }catch(error){
    console.log(error);
    res.status(500).json({error: "Inernal Error"})
 }

  })

  module.exports = router;
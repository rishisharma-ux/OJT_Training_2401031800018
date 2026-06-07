const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/SleepDiaryDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const SleepEntry = require("./models/SleepEntry");
app.post("/api/sleep", async (req,res)=>{

    try{

        const entry = new SleepEntry(req.body);

        await entry.save();

        res.status(201).json({
            message:"Saved Successfully"
        });

    }
    catch(error){
        res.status(500).json(error);
    }

});

app.get("/api/sleep", async(req,res)=>{

    const data = await SleepEntry.find();

    res.json(data);

});
app.get("/api/sleep/recent", async (req, res) => {
  try {
    const fiveDaysAgo = new Date();
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

    const entries = await SleepEntry.find({
      date: {
        $gte: fiveDaysAgo.toISOString().split("T")[0]
      }
    });

    res.json(entries);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});
app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});
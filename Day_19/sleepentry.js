const mongoose = require("mongoose");

const SleepEntrySchema = new mongoose.Schema({
    userId: Number,
    date: String,
    bed: String,
    wake: String,
    quality: Number,
    mood: String,
    duration: Number,
    woken: Number
});
module.exports = mongoose.model(
    "SleepEntry",
    SleepEntrySchema
);

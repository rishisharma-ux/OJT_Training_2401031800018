import express from "express";
import multer from "multer";

const app = express();

// Storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Upload Route
app.post("/uploads", upload.single("file"), (req, res) => {
    res.send("File uploaded successfully!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

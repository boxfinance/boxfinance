require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static("public"));

// MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);

// Required for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));

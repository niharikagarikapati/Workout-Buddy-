const express = require("express");
const app = express();
const cors = require("cors");
const workouts = require("./routes/workouts");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
// Middleware
app.use(express.json());
app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

app.use("/api/workouts", workouts);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Start the server
    console.log("Server is starting");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
      console.log("Connected to MongoDB");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

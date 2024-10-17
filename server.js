// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const summaryRoutes = require("./routes/summaryRoutes");
const residentsRoutes = require('./routes/resident');
const actionItemRoutes = require('./routes/actionItems'); 
const workOrdersRoutes = require("./routes/workOrder");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://harishmano98:Harish%402024@harish-mongo.uf15eex.mongodb.net/Dashboard", )
.then(() => console.log('MongoDB connected'))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/api/summary", summaryRoutes);
app.use('/api/residents', residentsRoutes);
app.use('/api/action-items', actionItemRoutes);
app.use("/api/work-orders", workOrdersRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

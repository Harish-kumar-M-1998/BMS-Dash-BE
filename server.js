// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const summaryRoutes = require("./routes/summaryRoutes");
const residentsRoutes = require('./routes/resident');
const actionItemRoutes = require('./routes/actionItems'); 
const workOrdersRoutes = require("./routes/workOrder");
const reportsRoute = require("./routes/report");
const activityRoutes = require('./routes/activityRoutes');
const weatherRoutes = require("./routes/weather");
const caseRoutes = require("./routes/cases");




const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://bms-dash.netlify.app', // Allow your Netlify frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  credentials: true, // Allow credentials (if needed)
};
// Middleware
app.use(cors(corsOptions));
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
app.use("/api/reports", reportsRoute);
app.use('/api/activities', activityRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/cases", caseRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

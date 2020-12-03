const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const port = process.env.PORT || 4000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
}

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// middleware - JSON parsing
app.use(express.json());

// middleware - API routes
app.use("/DunderMifflin/employees", routes.employees);
app.use("/DunderMifflin/sales", routes.sales);
app.use("/DunderMifflin/auth", routes.auth);


// Listener
app.listen(port, () => console.log(`Server running on port ${port}`));

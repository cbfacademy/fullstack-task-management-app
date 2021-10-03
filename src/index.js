const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const tasksRoutes = require('./routes/tasks');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(tasksRoutes);

app.get("/", (req, res) => {
  const app = { name: "task management application" };
  res.json(app);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`task management app started on port ${PORT}`)
});
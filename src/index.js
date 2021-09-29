const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const app = { name: "task management application" };
  res.json(app);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`task management app started on port ${PORT}`)
});
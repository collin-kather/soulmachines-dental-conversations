const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

// Endpoint for Soul Machines orchestration
app.post("/webhook/soulmachine", (req, res) => {
  const event = req.body;
  console.log("Event received:", event);

  // Save each event into transcripts.json
  fs.appendFileSync("transcripts.json", JSON.stringify(event) + "\n");

  res.status(200).send("OK");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

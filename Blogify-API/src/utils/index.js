const express = require("express");

const app = express();

const PORT=3000;

app.get("/", (req, res) => {
  res.send("Welcome to Blogify API!");
});


app.post('/api/v1/posts', (req, res) => {
res.send('Fetching all blog posts...');
});


app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
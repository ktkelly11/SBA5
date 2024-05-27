const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

// added form for the requirement
app.get("/users/new", (req, res) => {
  res.sendFile("/views/newUser.html", {
    root: __dirname,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

// routers
const usersRouter = require("./routes/users.js");
const postsRouter = require("./routes/posts.js");
const locationsRouter = require("./routes/locations.js");

// error handling
const error = require("./utilities/error.js");

// added for the form requirement
app.get("/users/new", (req, res) => {
  res.sendFile("/views/newUser.html", {
    root: __dirname,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

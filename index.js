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

// connecting html
app.engine("html", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#location#", `${(options.location, options.country)}`)
      .replace("#user#", `${options.full_name}`)
      .replace("#content#", `${options.content}`);
  });
});

// telling express where templates are
app.set("views", "./views");
// telling express default view engine
app.set("view engine", "index.html");

// added for the form requirement
app.get("/users/new", (req, res) => {
  res.sendFile("/views/newUser.html", {
    root: __dirname,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

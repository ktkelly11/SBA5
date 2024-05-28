const express = require("express");
const app = express();
const PORT = 3000;
// const fs = require("fs");
// routers
const usersRouter = require("./routes/users.js");
const postsRouter = require("./routes/posts.js");
const locationsRouter = require("./routes/locations.js");

// Body-parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// telling express where templates are
// app.set("views", "./views");
// telling express default view engine
app.set("view engine", "ejs");

// error handling
const error = require("./utilities/error.js");

app.get("/", (req, res) => {
  console.log("This is the home page");
  res.render("index");
});

// connecting html
// app.engine("html", (filePath, options, callback) => {
//   fs.readFile(filePath, (err, content) => {
//     if (err) return callback(err);

//     const rendered = content
//       .toString()
//       .replaceAll("#title#", `${options.title}`)
//       .replace("#location#", `${(options.location, options.country)}`)
//       .replace("#user#", `${options.full_name}`)
//       .replace("#content#", `${options.content}`);
//   });
// });

// // added for the form requirement
// app.get("/users/new", (req, res) => {
//   res.sendFile("/views/newUser.html", {
//     root: __dirname,
//   });
// });

// Custom 404 Middleware
app.use((req, res) => {
  next(error(404, "Resource Not Found"));
});

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/locations", locationsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

const express = require("express");
const router = express.Router();
const users = require("../data/users");

// GET route for entire users database
router.get("/", (req, res) => {
  const links = [
    {
      href: "users/:id",
      rel: ":id",
      type: "GET",
    },
  ];

  res.json({ users, links });
});

// GET route for individual users
router.get("/:id", (req, res, next) => {
  const user = users.find((u) => u.id == req.params.id);

  const links = [
    {
      href: `/${req.params.id}`,
      rel: "",
      type: "PATCH",
    },
    {
      href: `/${req.params.id}`,
      rel: "",
      type: "DELETE",
    },
  ];

  if (user) res.json({ user, links });
  else next();
});

module.exports = router;

const express = require("express");
const router = express.Router();
const users = require("../data/users");

// GET route for entire users database
router.get("/", (req, res) => {
  const links = [
    {
      href: "users/:user_id",
      rel: ":user_id",
      type: "GET",
    },
  ];

  res.json({ users, links });
});

// GET route for individual users
router.get("/:user_id", (req, res, next) => {
  const user = users.find((u) => u.user_id == req.body.user_id);

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

// POST request
router.post("/", (req, res) => {
  if (req.body.full_name && req.body.user_id && req.body.email) {
    if (users.find((u) => u.user_id == req.body.user_id)) {
      res.json({ error: "Username Already Taken" });
      return;
    }

    const user = {
      id: users[users.length - 1].id + 1,
      name: req.body.full_namename,
      address: req.body.address,
      email: req.body.email,
    };

    users.push(user);
    res.json(users[users.length - 1]);
  } else next(error(400, "Insufficient Data"));
});

module.exports = router;

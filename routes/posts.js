const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

// GET route for posts
router.get("/", (req, res) => {
  const links = [
    {
      href: "posts/:id",
      rel: ":id",
      type: "GET",
    },
  ];

  res.json({ posts, links });
});

// GET route for individual posts
router.get("/:id", (req, res, next) => {
  const post = posts.find((p) => p.id == req.params.id);

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

  if (post) res.json({ post, links });
  else next();
});

// POST route
router.post("/", (req, res) => {
  if (req.body.user_id && req.body.title && req.body.content) {
    const post = {
      id: posts[posts.length - 1].id + 1,
      user_id: req.body.user_id,
      title: req.body.title,
      content: req.body.content,
    };

    posts.push(post);
    res.json(posts[posts.length - 1]);
  } else next(error(400, "Insufficient Data"));
});

// PATCH route to allow for changes
router.patch("/:id", (req, res) => {
  const post = posts.find((p, i) => {
    if (p.id == req.params.id) {
      return true;
    }
  });

  if (post) res.json(post);
  else next();
});

// DELETE request
router.delete("/:id", (req, res) => {
  const post = posts.find((p, i) => {
    if (p.id == req.params.id) {
      posts.splice(i, 1);
      return true;
    }
  });

  if (post) res.json(post);
  else next();
});

module.exports = router;

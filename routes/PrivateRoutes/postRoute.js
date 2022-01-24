const router = require("express").Router();
const jwtmiddleware = require("../../JWT_Middleware/jwt");
router.get("/", jwtmiddleware, (req, res) => {
  const posts = [
    {
      title: "this is title",
      description: "this is my first post",
    },
  ];
  res.status(200).json({ posts: posts });
});

module.exports = router;

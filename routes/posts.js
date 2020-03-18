const express = require('express');
const router = express.Router();
const { getPosts, createPost } = require('../controllers/posts');
const verifyToken = require('../middleware/verifyToken'); /*MIDDLEWARE */

/* POST ROUTES */
router
  .route('/')
  .get(getPosts)
  .post(verifyToken, createPost);

module.exports = router;

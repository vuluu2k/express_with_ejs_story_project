const express = require("express")
const router =express.Router()
const PostController = require("../controllers/postController")

router.get('/',PostController.getpost)

router.post('/',PostController.createPost)

router.delete('/:id',PostController.deletePost)

// router.get('/:id',PostController.findPost)

router.patch('/:id',PostController.updatePost)

module.exports = router
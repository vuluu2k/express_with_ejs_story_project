const express = require("express")
const router =express.Router()
const PostController = require("../controllers/postController")

router.get('/',PostController.getpost)

router.post('/',PostController.createPost)

router.delete('/:_id',PostController.deletePost)

router.get('/:_id',PostController.findPost)

router.patch('/:_id',PostController.updatePost)

module.exports = router
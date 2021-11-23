const express = require("express")
const router =express.Router()
const PostController = require("../controllers/storyController")

router.get('/',PostController.getStory)
router.get('/admin/story',PostController.getStory)
router.post('/admin/story',PostController.createStory)

router.delete('/:id',PostController.deleteStory)

// router.get('/:id',PostController.findPost)

router.patch('/:id',PostController.updateStory)
module.exports = router
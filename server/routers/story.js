const express = require("express")
const router =express.Router()
const PostController = require("../controllers/storyController")

router.get('/',PostController.getStory)
router.get('/admin/story',PostController.getStory)
router.post('/admin/story',PostController.createStory)

router.delete('/admin/story/:id',PostController.deleteStory)

// router.get('/:id',PostController.findPost)

router.put('/admin/story/:id',PostController.updateStory)
module.exports = router
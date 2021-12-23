const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReply,
  removeReply
} = require('../../controllers/thought-controller');

// /api/Thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/Thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReply)
  .delete(removeThought);

// /api/Thoughts/<userId>/<thoughtId>/<replyId>
router.route('/:userId/:thoughtId/:replyId').delete(removeReply);

module.exports = router;

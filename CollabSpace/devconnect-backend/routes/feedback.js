const express = require('express');
const auth = require('../middleware/authMiddleware');
const Feedback = require('../models/Feedback');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const feedback = await Feedback.create({ ...req.body, userId: req.user });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:projectId', async (req, res) => {
  const feedbacks = await Feedback.find({ projectId: req.params.projectId })
    .populate('userId', 'name');
  res.json(feedbacks);
});

module.exports = router;

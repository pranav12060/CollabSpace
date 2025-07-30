const express = require('express');
const auth = require('../middleware/authMiddleware');
const Project = require('../models/Project');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const project = await Project.create({ ...req.body, userId: req.user });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const projects = await Project.find().populate('userId', 'name');
  res.json(projects);
});

module.exports = router;

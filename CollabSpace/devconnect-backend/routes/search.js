const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Project = require('../models/Project');

// GET /api/search?query=keyword
router.get('/', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.json({ users: [], projects: [] });

    // Case-insensitive search
    const users = await User.find({ name: { $regex: query, $options: 'i' } })
                            .select('name email');
    const projects = await Project.find({ title: { $regex: query, $options: 'i' } })
                                  .populate('userId', 'name');

    res.json({ users, projects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

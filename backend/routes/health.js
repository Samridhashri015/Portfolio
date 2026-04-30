/**
 * Health Check Routes
 * API endpoint to verify server is running
 */

const express = require('express');
const router = express.Router();

/**
 * GET /api/health
 * Health check endpoint
 */
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

module.exports = router;

/**
 * Contact Routes
 * API endpoints for contact form submission
 */

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { validateContact, handleValidationErrors } = require('../middleware/validation');
const { sendConfirmationEmail, sendNotificationEmail } = require('../middleware/email');

/**
 * POST /api/contact
 * Submit a new contact form message
 */
router.post('/', validateContact, handleValidationErrors, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create new contact document
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });

    // Save to database
    await contact.save();
    console.log('Contact saved:', contact._id);

    // Send emails
    await sendConfirmationEmail(name, email);
    await sendNotificationEmail(name, email, subject, message);

    // Send success response
    res.status(201).json({
      success: true,
      message: 'Your message has been received. We will get back to you soon!',
      contactId: contact._id
    });

  } catch (err) {
    console.error('Contact submission error:', err);
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

/**
 * GET /api/contact/status
 * Check if contact form service is working
 */
router.get('/status', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Contact form service is operational',
      timestamp: new Date()
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Contact form service is unavailable'
    });
  }
});

module.exports = router;

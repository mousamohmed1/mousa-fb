const Message = require('../models/Message');
const { body, validationResult } = require('express-validator');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createMessage = [
  body('content').notEmpty().withMessage('Message content cannot be empty'),
  body('sender').notEmpty().withMessage('Sender cannot be empty'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const message = new Message({
      content: req.body.content,
      sender: req.body.sender,
    });

    try {
      const newMessage = await message.save();
      res.status(201).json(newMessage);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
];

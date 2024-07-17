const Member = require("../models/member");

exports.registerMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).send(newMember);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

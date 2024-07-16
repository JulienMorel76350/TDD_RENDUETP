const Member = require("../models/member");
const members = []; // Simulation d'une base de données en mémoire

exports.register = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newMember = new Member(firstName, lastName, email, password);

  if (Member.validateMember(newMember)) {
    members.push(newMember);
    res.redirect("/memberRegistration.html?success=true");
  } else {
    res.redirect("/memberRegistration.html?error=true");
  }
};

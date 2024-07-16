class Member {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  static validateMember(member) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(member.email) && member.password.length >= 6;
  }
}

module.exports = Member;

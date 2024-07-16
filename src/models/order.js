class Order {
  constructor(memberId, items) {
    this.id = Order.generateId();
    this.memberId = memberId;
    this.items = items;
    this.total = this.calculateTotal();
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  static generateId() {
    return Math.floor(Math.random() * 10000);
  }
}

module.exports = Order;

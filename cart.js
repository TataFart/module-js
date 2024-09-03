'use strict';

const cart = {
  items: [],
  _discount: 0,
  count: 0,

  set discount(promocode) {
    this._discount = 0;
    
    if (promocode === "METHED") {
      this._discount = 15;
    };
    if (promocode === "NEWYEAR") {
      this._discount = 21;
    };   
  },

  get totalPrice() {
    return this.calculateItemPrice();
  }, 

  increaseCount(count) {
    this.count += count;
    return this.count;
  },

  add(name, price, count = 1) {
    this.items.push(
        {name, price, count},
    );

    this.count = cart.increaseCount(count);

    return this.items;
  },

  calculateItemPrice() {
    const totalPrice = this.items.reduce((acc, item) =>  acc += item.price * item.count, 0);
    return Math.round(totalPrice - totalPrice * this._discount/100);
  },

  clear() {
    this.items.splice(0, this.items.length);
    this.count = 0;
    this.totalPrice = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Total price :`, this.totalPrice);
  },
};


cart.add('milk', 67, 1);
cart.add('cream', 100, 2);
console.log(cart.totalPrice);
cart.discount = 'METHED';
console.log(cart.totalPrice);
cart.discount = 'hgn';
console.log(cart.totalPrice);


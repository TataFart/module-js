'use strict';

const cart = {
  items: [],
  discount: 0,

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
        this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
        this.discount = 21;
    } else {
        this.discount = 0;
    }
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,


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
    return this.items.reduce((acc, item) => {
      acc += item.price * item.count;
      return Math.round(acc - acc * this.discount/100);
    }, 0);
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


console.log(cart);
cart.setDiscount = 'METHED';
cart.setDiscount = 'hgn';
console.log(cart.discount);

cart.add('milk', 67, 1);
cart.add('cream', 100, 2);

console.log(cart.totalPrice);


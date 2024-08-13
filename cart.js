'use strict';

const cart = {
  items: [],
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
      return acc;
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


//

console.log(cart);
cart.add('milk', 67, 1);
cart.add('cream', 100, 2);

console.log(cart.totalPrice);

cart.add('banana', 149, 2);
cart.print();

cart.add('eggs', 1, 110);
cart.print();

cart.clear();

cart.add('vine', 499, 1);
cart.print();



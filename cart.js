const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice: function() {
        return this.totalPrice;
    },

    increaseCount: function (count) {
        this.count += count;
        return this.count;
    },

    add: function (name, price, count = 1) {
        this.items.push( 
            {name, price, count,}
        );

       this.count = cart.increaseCount(count);
       this.totalPrice = cart.calculateItemPrice();

       return this.items;
   },  

    calculateItemPrice: function() {
        this.totalPrice = this.items.reduce((totalPrice, item) => {
            totalPrice += item.price * item.count;           
            return totalPrice;
        }, 0);  

        return this.totalPrice;
    },

    clear: function() {
        this.items.splice(0, this.items.length);
        this.count = 0;
        this.totalPrice = 0;
    },

    print: function () {
        console.log(JSON.stringify(this.items));
        console.log(`Total price :`, this.totalPrice);
    },
};


cart.add("milk", 67, 1);
cart.add("cream", 100, 2);
cart.add("banana", 149,2);
cart.print()

cart.add("eggs", 1, 110)
cart.print();

cart.clear();

cart.add("vine", 499, 1);
cart.print();






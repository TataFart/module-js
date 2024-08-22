'use strict';



const restagle = {
    width: 5,
    hight: 5,

    set currentwidth(value) {  
        if(Number.isInteger(value)) {
            this.width = value;
        } else {
            console.log('error, enter number');
        }    
        
    },

    set currenthight(value) {
        if(Number.isInteger(value)) {
            this.hight = value;
        } else {
            console.log('error, enter number');
        }    
        
    },

    get square() {
        return `${this.width * this.hight} см2`;
    },

    get perimetr() {
        return `${(this.width + this.hight) * 2} cм`;
    }
}

restagle.currentwidth = "3"
restagle.currenthight = 6
console.log(restagle);
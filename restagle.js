'use strict';



const restagle = {
    _width: 5,
    _hight: 5,

    set width(value) {  
        if(isNaN(value)) {
            console.log('error, enter number');
        } else {
            this._width = value;
        }        
    },

    set hight(value) {
        if(isNaN(value)) {
            console.log('error, enter number');
        } else {
            this._hight = value;
        }
    },

    get square() {
        return `${+this._width * +this._hight} см2`;
    },

    get perimetr() {
        return `${(+this._width + +this._hight) * 2} cм`;
    }
}

restagle.width = "hz";
restagle.hight = 6;
console.log(restagle);
console.log(restagle.square);
console.log(restagle.perimetr);
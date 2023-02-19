const menu = {
    _meal: '',
    _price : 0,
    set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
    }    
    },
    set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
    }
    },
    get todaysSpecial() {
    if (this._meal && this._price) {
        return `Todays Special is Spaghetti for $${this._price}`   
    } else {
        return `${this._meal} or price was not set correctly!`
    }
    }
};

menu.meal = 'string';
menu.price = 9;
console.log(menu.todaysSpecial);
const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}

const Product = function (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.total = function() {
    return this.price * this.quantity;
}

Product.prototype.add = function(amount) {
    this.quantity += amount;
}

Product.prototype.delete = function(amount) {
    this.quantity -= amount;
}

const p2 = new Product("Monitor", 800.0, 10);

console.log(p1)
console.log(p2)


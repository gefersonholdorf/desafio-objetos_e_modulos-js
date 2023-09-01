class Product {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    total() {
        this.price * this.quantity;
    }

    add(amount) {
        this.quantity += amount
    }

    delete(amount) {
        this.quantity -= amount
    }
}

const p1 = new Product("Monitor", 800.0, 10);
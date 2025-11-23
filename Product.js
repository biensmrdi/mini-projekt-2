export class Product {
    #price;

    constructor(name, price, tags = []) {
        this.name = name;
        this.price = price;
        this.tags = tags;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 0) {
            console.warn("Cena nemůže být záporná. Nastavuji na 0.");
            this.#price = 0;
        } else {
            this.#price = value;
        }
    }

    getDescription() {
        return `Produkt: ${this.name}, cena: ${this.price} Kč, tagy: ${this.tags.join(", ")}`;
    }

    addTag(tag) {
        this.tags.push(tag);
    }

    applyDiscount(percent) {
        const discount = this.price * (percent / 100);
        return this.price - discount;
    }
}

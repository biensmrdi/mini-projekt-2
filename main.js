import { Product } from "./Product.js";

const phone = new Product("Telefon", 12000, ["elektronika"]);
const book = new Product("Kniha", 450, ["literatura", "novinka"]);

console.log(phone.getDescription());
phone.addTag("smart");
console.log("Po přidání tagu:", phone.getDescription());
console.log("Cena po slevě 20%:", phone.applyDiscount(20));

console.log("----");

console.log(book.getDescription());
book.price = -50;
console.log("Opravená cena knihy:", book.price);
console.log("Cena po slevě 10%:", book.applyDiscount(10));

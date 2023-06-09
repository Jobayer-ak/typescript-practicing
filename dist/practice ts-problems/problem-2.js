"use strict";
// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Wrie a ts function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
;
function filterProducts(products, criterioin, value) {
    return products.filter(product => product[criterioin] === value);
}
;
const products = [
    { id: 1, name: "Product 1", price: 10, category: "Category A" },
    { id: 2, name: "Product 2", price: 20, category: "Category B" },
    { id: 3, name: "Product 3", price: 30, category: "Category A" },
    { id: 4, name: "Product 4", price: 40, category: "Category C" },
];

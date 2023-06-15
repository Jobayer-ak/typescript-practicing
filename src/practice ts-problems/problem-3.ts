// // Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a typescript function that calculates the toal cost of all the products in the array, using a generic type for the tuple and a type alias for the array.



// type ProductTuple<T extends number | string> = [string, number, T]; // [name, price, quantity]
// type ProductArray<T extends number | string> = ProductTuple<T>[];

// function calculateTotalCost<T extends number | string>(products: ProductArray<T>): number {
//   return products.reduce((totalCost, [name, price, quantity]) => {
//     const productCost: number = price * quantity;

//     console.log(price);
//     return totalCost + productCost;
//   }, 0);
// }

// const allProducts: ProductArray<number> = [
//   ["Product 1", 10, 2], // [name, price, quantity]
//   ["Product 2", 20, 3],
//   ["Product 3", 5, 4],
// ];

// const totalCost = calculateTotalCost(allProducts);
// console.log("Total cost:", totalCost);

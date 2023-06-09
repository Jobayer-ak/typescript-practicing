

// you have an interface for product, containing the product's id, name ,price, and category. You want to filter an array of products based on a specific criterion and value. (write a typscript generic function that takes this array, a criterion, and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety)

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
};

function filterProducts<T, K extends keyof T>(products: T[], criterioin: K, value: T[K]  ): T[] {
    return products.filter(product => product[criterioin] === value)
};

const products: Product[] = [
  { id: 1, name: "Product 1", price: 10, category: "Category A" },
  { id: 2, name: "Product 2", price: 20, category: "Category B" },
  { id: 3, name: "Product 3", price: 30, category: "Category A" },
  { id: 4, name: "Product 4", price: 40, category: "Category C" },
];

const filteredProducts = filterProducts(products, "category", "Category A");

console.log(filteredProducts);

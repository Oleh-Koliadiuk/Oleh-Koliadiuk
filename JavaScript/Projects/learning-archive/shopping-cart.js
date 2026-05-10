// Learning: Array methods (map, filter, find) and functions
 

const MacBook = {
    Name: "MacBook Air 2025",
    Complectation: "16/512 , 15'",
    Ram: 16,
    Developer: "Oleg"
};

const ProductApple = [
    { name: "Iphone 17 pro max", price: 1199 },
    { name: "MacBook Air", price: 1399 },
    { name: "Iphone 13", price: 299 },
    { name: "Iphone 14 pro max", price: 450 }
];

// Apply 10% discount
const SaleProductApple = ProductApple.map(item => ({
    name: item.name,
    price: item.price * 0.9
}));

const CalculateDiscount = (price, percent) => price * (percent / 100);
console.log(`Discount for shoes: ${CalculateDiscount(5000, 10)}$`);

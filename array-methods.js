const products = [
    { name: 'laptop', price: 55555, brand: 'lenovo', color: 'silver' },
    { name: 'laptop', price: 55555, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 55005, brand: 'iphone', color: 'golder' },
    { name: 'watch', price: 555, brand: 'casio', color: 'yellow' },
    { name: 'laptop', price: 55555, brand: 'lenovo', color: 'green' },
    { name: 'laptop', price: 55555, brand: 'lenovo', color: 'white' },
    { name: 'laptop', price: 55555, brand: 'ribon', color: 'silver' },
    { name: 'computer', price: 55555, brand: 'lenovo', color: 'silver' },
    { name: 'camera', price: 55555, brand: 'canon', color: 'silver' },
];


// map just return 
const brand = products.map(product => {
    product.brand;
})

const price = products.map(product => {
    product.price;
})

// for each not anything return
products.forEach(product => (product.price))


// filter return array ;   sorto onujaeee filter koray array return korbay .

const cheap = products.filter(products => products.price <= 5000);
// 
const specificName = products.filter(p => p.name.includes('l'));
console.log(specificName);

// find condition onujae ... first element taky return korbay ..

const special = products.find(p => p.name.includes('l'));
console.log(special);
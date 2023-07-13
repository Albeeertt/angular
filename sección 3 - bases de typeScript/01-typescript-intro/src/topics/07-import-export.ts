import {Product, taxCalculation} from './06-function.destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'Ipad Air',
        price: 300
    }
];


const [total, tax] = taxCalculation({tax: 0.15, products: shoppingCart});

console.log('total', total);
console.log('tax', tax)


export interface Product {
    description: string;
    price: number;
};

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation({tax, products}: TaxCalculationOptions ): [number, number] {


    let total = 0;

    products.forEach(({price}) => {
        
        total += price;
     })

    return [total, total * tax]

}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;
const [total= 'No hay', Totaltax= 'No hay'] = taxCalculation({
    products:shoppingCart,
    tax,
})

console.log(total)
console.log(Totaltax)

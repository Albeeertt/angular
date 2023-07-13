
function classDecorator<T extends {new (...args:any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
class SuperClass {
    constructor(public myProperty: string = 'Abc12') {}
    print() {
        console.log('Hola mundo', `${this.myProperty}`);
    }
}


console.log(SuperClass);

const myCLass = new SuperClass(); 

console.log(myCLass);

export {};



class Person {
    constructor(public name: string, private address: string = 'No address') {}
}

const ironman = new Person('tony stark', 'New York');

class Hero extends Person {
    constructor(public alterEgo: string, public age: number, public realName: string) {super(realName, 'New York')}
}


const iron = new Hero('IronMan', 45, 'Tony Stark');

console.error(iron)

class Hero2 {
    public person: Person;
    constructor(public alterEgo: string, public age: number, public realName: string) {
        this.person = new Person(realName);
    }
}

const heroe = new Hero2('IronMan', 45, 'Tony Stark');

console.log(heroe)

class Hero3 {
    constructor(public alterEgo: string, public age: number, public realName: string, public person: Person) {}
}


const heroe2 = new Hero3('IronMan', 45, 'Tony Stark', ironman);

export {Person, Hero};
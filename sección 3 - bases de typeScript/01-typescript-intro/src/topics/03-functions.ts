
function addNumber(a: number, b: any): number {

    return a+ b;
}


const result: number | string | undefined = addNumber(2,4)

const addNumbersArrow = (a: number, b: any): string =>  {
    return `${a+b}`;
}

const result2: number | string | undefined = addNumbersArrow(2,4)

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

const result3: number = multiply(5);

interface Character {
    name: string;
    hp: number;
    skills?: (string)[];
    showHp: () => void;
};

const strider: Character = {
    name: 'Juan',
    hp: 20,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
};

strider.showHp()


const heal = (character: Character, amount: number): void => {
    character.hp += amount;
}

heal(strider,10);
strider.showHp()


console.log({result2,result,result3})

export {};
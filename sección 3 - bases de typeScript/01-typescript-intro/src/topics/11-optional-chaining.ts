

interface Passenger {
    name: string;
    children: string[] | undefined;
};

const pasenger1: Passenger = {
    name: 'Fernando',
    children: undefined, 
}

const pasenger2: Passenger = {
    name: 'melissa',
    children: ['ya','casi'], 
}


const printChildren = ({children}: Passenger) => {
    console.log(children?.length || 0);
} 


const printChildren2 = ({children}: Passenger): number => {
    return children?.length || 0;
} 

console.log(printChildren2(pasenger1));

export {};
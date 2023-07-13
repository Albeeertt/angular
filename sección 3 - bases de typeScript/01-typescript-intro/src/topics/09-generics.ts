
function whatsMyType<T>(argument: T): T {
    return argument
}


const amIString = whatsMyType<string>('Hola mundo');

export {whatsMyType};
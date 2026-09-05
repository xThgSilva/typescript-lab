// Any value type works
function identity<T>(value: T): T {
    return value;
}

const result = identity(42);   // 42, number

// Generics Constraints
interface Lengthwise {
    length: number;
}

function getLength<T extends Lengthwise>(value: T): number {
    return value.length;
}
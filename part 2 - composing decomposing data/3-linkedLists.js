// Lists with arrays

const cons = ( a, d ) => [ a, d ];
const car = ( [ a, d ] ) => a;
const cdr = ( [ a, d ] ) => d;

const oneToFive = cons( 1, cons( 2, cons( 3, cons( 4, cons( 5, null ) ) ) ) );

console.log( car( oneToFive ) );
console.log( cdr( oneToFive ) );

// Lists with objects

const EMPTY = {};
const OneTwoThree = { first: 1, rest: { first: 2, rest: { first: 3, rest: EMPTY } } };

console.log( OneTwoThree.first );

console.log( OneTwoThree.rest );

console.log( OneTwoThree.rest.rest.first );

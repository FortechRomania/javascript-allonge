const compose = ( a, ...rest ) =>
  rest.length === 0
    ? a
    : ( c ) => a( compose( ...rest )( c ) );

const increment = a => a + 1;

const double = a => a * 2;

const square = a => a * a;

const doubleIncrementAndSquare = compose( square, increment, double );

console.log( doubleIncrementAndSquare( 1 ) );

const composeWithReduce = ( ...fns ) => ( value ) =>
    fns.reverse().reduce( ( acc, fn ) => fn( acc ), value );

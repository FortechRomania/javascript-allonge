const foldWith = ( fn, terminalValue, [ first, ...rest ] ) =>
  first === undefined
    ? terminalValue
    : fn( first, foldWith( fn, terminalValue, rest ) );

const squareAll = ( array ) => foldWith( ( first, rest ) => [ first * first, ...rest ], [ ], array );

squareAll( [ 1, 2, 3, 4, 5 ] );

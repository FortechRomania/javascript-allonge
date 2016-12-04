const func = ( x ) =>( y ) => x;

console.log(func(3)()); //3

console.log( ( x => x ) ( 5 ) ); //5

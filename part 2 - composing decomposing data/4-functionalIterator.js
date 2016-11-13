const numbers = [ 1, 2, 3, 4, 5 ];

const iterator = ( array ) => {
    let index = -1;
    const length = array.length;

    return {
        next( ) {
            if ( index < length ) {
                index++;
            }

            return {
                done: index === length,
                value: array[ index ] || null
            };
        }
    };
};

const mapIteratorWith = ( fn, arrayIterator ) => ( {
    next( ) {
        const { done, value } = arrayIterator.next( );

        return { done, value: done ? null : fn( value ) };
    }
} );

const it = iterator( numbers );
console.log( it.next( ) );
console.log( it.next( ) );
console.log( it.next( ) );
console.log( it.next( ) );
console.log( it.next( ) );
console.log( it.next( ) );

const squares = mapIteratorWith( x => x * x, iterator( numbers ) );
console.log( squares.next( ) );
console.log( squares.next( ) );
console.log( squares.next( ) );

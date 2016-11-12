const mapWith = ( fn, [ first, ...rest ] ) =>
  first === undefined
    ? [ ]
    : [ fn( first ), ...mapWith( fn, rest ) ];

mapWith( ( x ) => x * x, [ 1, 2, 3, 4, 5 ] );
  //=> [1,4,9,16,25]

mapWith( ( x ) => !!x, [ null, true, 25, false, "foo" ] );

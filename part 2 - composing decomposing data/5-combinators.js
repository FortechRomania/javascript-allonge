const K = ( x ) => ( y ) => x;
const I = ( x ) => ( x );
const V = ( x ) => ( y ) => ( z ) => z( x )( y );

K( "primus" )( "secundus" ); //=> "primus"
K( I )( "primus" )( "secundus" ); //=> "secundus"

const first = K;
const second = K( I );
const pair = V;

const latin = pair( "primus" )( "secundus" );

latin( first ); //=> "primus"
latin( second ); //=> "secundus"

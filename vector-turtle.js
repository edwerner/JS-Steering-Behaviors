// // emulate AS3 'super' construct
// // http://jsfiddle.net/missingno/wAHqd/
// var superPairs = [];
// var injectSuper = function( parent, child )
// {
//   superPairs.push( { parent : parent, child : child } );
// };
// 
// function $super( baseClass, object )
// {
//   for ( var i = 0; i < superPairs.length; i++ )
//   {
//     var p = superPairs[ i ];
//     
//     if ( p.child === baseClass )
//     {
//       return p.parent;
//     }
//   }
// }
// 
// // injectSuper( VectorTurtle, SteeringVehicle );


var VectorTurtle = function( )
{
  this.position = undefined;
  this._fwd = undefined;
  this._right = undefined;
  this._radius = undefined;
  this._speed = 10;
  this._velocity = undefined;
  this._manager = undefined;
  this.width = 50;
  this.height = 50;
  
  this.init = function( aMan, anX, aY, aSpeed )
  {
    console.log( 'VectorTurtle.init( )' );
    _manager = aMan;
    x = anX;
    y = aY;
    _radius = Math.sqrt( width * width + height * height ) / 2;
    _position = new Vector2( x, y );
    _speed = aSpeed;
    _fwd = new Vector2( 1, 0 );
    _right = _fwd.perpRight( );
    _velocity = _fwd.multiply( _speed );
  };
  
  this.getPosition = function( )
  {
    console.log( 'VectorTurtle.getPosition( )' );
    return _position;
  };
  
  this.getFwd = function( )
  {
    console.log( 'VectorTurtle.getFwd( )' );
    return _fwd;
  };
  
  this.getRight = function( )
  {
    console.log( 'VectorTurtle.getRight( )' );
    return _right;
  };
  
  this.getSpeed = function( )
  {
    console.log( 'VectorTurtle.getSpeed( )' );
    return _speed;
  };
  
  this.getVelocity = function( )
  {
    console.log( 'VectorTurtle.getVelocity( )' );
    return _velocity;
  };
  
  this.getRadius = function( )
  {
    console.log( 'VectorTurtle.getRadius( )' );
    return _radius;
  };
  
  this.setPosition = function( pos )
  {
    console.log( 'VectorTurtle.setPosition( )' );
    _position.x = pos.x;
    _position.y = pos.y;
    x = pos.x;
    y = pos.y;
  };
  
  this.setFwd = function( vector )
  {
    console.log( 'VectorTurtle.setFwd( )' );
    _fwd.x = vector.x;
    _fwd.y = vector.y;
    _fwd.normalize( );
    _right = _fwd.perpRight( );
    rotation = _fwd.getAngle( );
  };
  
  this.setSpeed = function( amt )
  {
    console.log( 'VectorTurtle.setSpeed( )' );
    _speed = amt;
  };
  
  this.update = function( dt )
  {
    console.log( 'VectorTurtle.update( )' );
    _velocity = _fwd.multiply( _speed );
    this.move( _velocity.multiply ( dt ) );
  };
  
  this.turnRight = function( ang )
  {
    console.log( 'VectorTurtle.turnRight( )' );
    rotation += ang;
    _fwd = Vector2.degToVec( rotation );
  };
  
  this.turnLeft = function( ang )
  {
    console.log( 'VectorTurtle.turnLeft( )' );
    rotation -= ang;
    _fwd = Vector2.degToVec( rotation );
  };
  
  this.turnAbs = function( ang )
  {
    console.log( 'VectorTurtle.turnAbs( )' );
    rotation = ang;
    _fwd = Vector2.degToVec( rotation );
  };
  
  this.move = function( )
  {
    console.log( 'VectorTurtle.move( )' );
    _position = _position.add( motion );
    x = _position.x;
    y = _position.y;
  };
  
};
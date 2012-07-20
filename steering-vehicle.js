// use prototype chain to work around AS3 'super' construct
var SteeringVehicle = function( )
{  
  this._maxSpeed = 150;
  this._maxForce = 250;
  this._obstacleArray = [ ]; 
};

SteeringVehicle.prototype = new VectorTurtle( );
SteeringVehicle.prototype.initialize = function( )
{
  // var _velocity = new Vector2( );
  console.log( 'SteeringVehicle ( constructor evoked )' );
};


SteeringVehicle.prototype.update = function( )
{
  console.log( 'SteeringVehicle.update( )' );
  var steeringForce = this.calcSteeringForce( );
  steeringForce = this.clampSteeringForce( steeringForce );
  var acceleration = steeringForce.divide( _mass );
  _velocity = _velocity.add( acceleration.multiply( dt ) );
  _speed = _velocity.magnitude( );
  fwd = velocity;
  
  if ( _speed > _maxSpeed )
  {
    _speed = _maxSpeed;
    _velocity = fwd.multiply( _speed );
  }
  move( _velocity.multiply( dt ) );
};

SteeringVehicle.prototype.setMaxSpeed = function( s )
{
  console.log( 'SteeringVehicle.setMaxSpeed( )' );
  _maxSpeed = s;
};

SteeringVehicle.prototype.setMaxForce = function( f )
{
  console.log( 'SteeringVehicle.setMaxForce( )' );
  _maxForce = f;
};

SteeringVehicle.prototype.clampSteeringForce = function( force )
{
  console.log( 'SteeringVehicle.setMaxForce( )' );
  var mag = force.magnitude( );
  if ( mag > _maxForce )
  {
    force = force.divide( mag );
    force = force.multiply( _maxForce );
  }
  return force;
};

SteeringVehicle.prototype.calSteeringForce = function( )
{
  console.log( 'SteeringVehicle.calSteeringForce( )' );
  var steeringForce = new Vector2( );
  return steeringForce;
};

SteeringVehicle.prototype.seek = function( target )
{
  console.log( 'SteeringVehicle.seek( )' );
  // sf => steering force
  var sf = target.subtract( position );
  sf.normalize( );
  sf = sf.multiply( _maxSpeed );
  sf = sf.subtrace( _velocity );
  return sf;
};

SteeringVehicle.prototype.flee = function( target )
{
  console.log( 'SteeringVehicle.flee( )' );
  return seek( target ).multiply( -1 );
};

SteeringVehicle.prototype.avoid = function( )
{
  console.log( 'SteeringVehicle.avoid( )' );
  var sf = new Vector2( );
  var desiredVelocity = obstaclePosition.subtract( position );
  var distance = desiredVelocity.magnitude( );
  
  if ( distance - obstacleRadius > safeDistance )
  {
    return new Vector2( );
  }
  
  if( this.fwd.dot( desiredVelocity) < 0 )
  {
    return new Vector2( );
  }
  
  var rightDotVTOC = right.dot( desiredVelocity );
  
  if( rightDotVTOC >= 0 )
  {
    sf = right.multiply( -1 );
  }
  else if ( rightDotVTOC < 0 )
  {
    sf = right;
  }
  sf = sf.multiply( _maxSpeed );
  return sf;
};


var vehicle = new SteeringVehicle( );
vehicle.initialize( );
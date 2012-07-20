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



// use prototype chain to work around AS3 'super' construct
var Wanderer = function( )
{  
  this.tetherWeight = 20;
  this.wanderWeight = 10;
  this.alignmentWeight = 5;
  this.cohesionWeight = 5;
  this.separationWeight = 5;
  this.obsWeight = 40;
  this._wanderRad = 6;
  this._wanderAng = 0;
  this._wanderDist = 3;
  this._wanderMax = 7;
  this._center = undefined;
  this._tether = 20;
  this.inSightDist = 200;
  this.tooCloseDist = 25;
  this.vehicles = 25;
  this.target = null;
};

Wanderer.prototype = new SteeringVehicle( );

Wanderer.prototype.initialize = function( )
{
  // var _velocity = new Vector2( );
  console.log( 'Wanderer ( constructor evoked )' );
  
  // this.aMan.addChild( this );
  this._center = new Vector2( 500, 400 );
  console.log( 'this,_center : ', this._center );
};

Wanderer.prototype.calcSteeringForce = function( )
{
  var forces = new Vector2( );
  
	forces = forces.add( tether( ).multiply( tetherWeight ) );	
	forces = forces.add( alignment( ).multiply( alignmentWeight ) );
	forces = forces.add( cohesion( ).multiply( cohesionWeight ) );
	forces = forces.add( separation( ).multiply( separationWeight ) );
	forces = forces.add( obstacleAvoid( ).multiply( obsWeight ) );
	
	return forces;
};

Wanderer.prototype.tether = function( )
{
  if ( position.distance( _center ) < _tether )
  {
    return new Vector2( );
  }
  else
  {
    return seek( _center );
  }
};

Wanderer.prototype.forwardSum = function( )
{
  var sum = new Vector2( );
  
  for ( var i = 0; i < Manager._turtleArray.length; i++ )
  {
    sum = sum.add( Manager._turtleArray[ i ].fwd );
  }
  return sum;
};

Wanderer.prototype.alignment = function( )
{
  var sum = Manager.flockForward;
  sum.normalize( );
  sum = sum.multiply( _maxSpeed );
  sum = sum.subtract( _fwd.multiply( _speed ) );
  return sum;
};

Wanderer.prototype.separation = function( )
{
  var sum = new Vector2( );
  var minDistance = Number.MAX_VALUE;
  var closeTurtle = new VectorTurtle( );
  
	for( var i = 0; i < Manager._turtleArray.length; i++ )
	{
		if( Manager._turtleArray[ i ] != this )
		{
			if( position.distance( Manager._turtleArray[ i ].position ) < minDistance )
			{
				minDistance = position.distance( Manager._turtleArray[ i ].position );
				closeTurtle = Manager._turtleArray[ i ];
			}
		}
	}
	if ( minDistance < tooCloseDist )
	{
    return flee( closeTurtle.position ).multiply( _maxSpeed );
	}
	return new Vector2( );
};

Wanderer.prototype.obstacleAvoid = function( )
{
	//trace(_manager._obstacleArray.length);
	var steeringForce = new Vector2( );
	var minDist = Number.MAX_VALUE;
	var index;
	for ( var i = 0; i < _manager._obstacleArray.length; i++ ) 
	{
		if( position.subtract( _manager._obstacleArray[ i ].position ).magnitude( ) < minDist )
		{
			minDist = position.subtract( _manager._obstacleArray[ i ].position ).magnitude( );
			index = i;
		}
		
	}
	steeringForce = steeringForce.add( avoid( _manager._obstacleArray[ index ].position, _manager._obstacleArray[ index ].rad, 250 ) );
	return steeringForce;
};

Wanderer.prototype.cohesion = function( )
{
  var sum = new Vector2( );
  var centroid = new Vector2( );
  centroid = Manager.cohesn;
  return seek( centroid );
};
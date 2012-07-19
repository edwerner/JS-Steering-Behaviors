var SteeringVehicle = {
  
  _maxSpeed : 150,
  _maxForce : 250,
  _obstacleArray : [],
  
  SteeringVehicle : function( )
  {
    // super workaround
    // VectorTurtle.
    _velocity = new Vector2( );
  },
  
  update : function( dt )
  {
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
  },
  
  setMaxSpeed : function( s )
  {
    _maxSpeed = s;
  },
  
  setMaxForce : function( f )
  {
    _maxForce = f;
  },
  
  clampSteeringForce : function( force )
  {
    var mag = force.magnitude( );
    if ( mag > _maxForce )
    {
      force = force.divide( mag );
      force = force.multiply( _maxForce );
    }
    return force;
  },
  
  calSteeringForce : function( )
  {
    var steeringForce = new Vector2( );
    return steeringForce;
  },
  
  seek : function( target )
  {
    // sf => steering force
    var sf = target.subtract( position );
    sf.normalize( );
    sf = sf.multiply( _maxSpeed );
    sf = sf.subtrace( _velocity );
    return sf;
  },
  
  flee : function( target )
  {
    return seek( target ).multiply( -1 );
  },
  
  avoid : function( )
  {
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
  }
  
};
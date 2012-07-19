VectorTurtle = {
  
  _position : undefined,
  _fwd : undefined,
  _right : undefined,
  _radius : undefined,
  _speed : 10,
  _velocity : undefined,
  _manager : undefined,
  width : 50, 
  height : 50,
  
  VectorTurtle : function( aMan, anX, aY, aSpeed )
  {
    _manager = aMan;
    x = anX;
    _radius = Math.sqrt( width * width + height * height ) / 2;
    _position = new Vector2( x, y );
    _speed = aSpeed;
    _fwd = new Vector2( 1, 0 );
    _right = _fwd.perpRight( );
    _velocity = _fwd.multiply( _speed );
  },
  
  getPosition : function( )
  {
    return _position;
  },
  
  getFwd : function( )
  {
    return _fwd;
  },
  
  getRight : function( )
  {
    return _right;
  },
  
  getSpeed : function( )
  {
    return _speed;
  },
  
  getVelocity : function( )
  {
    return _velocity;
  },
  
  getRadius : function( )
  {
    return _radius;
  },
  
  setPosition : function( pos )
  {
    _position.x = pos.x;
    _position.y = pos.y;
    x = pos.x;
    y = pos.y;
  },
  
  setFwd : function( vector )
  {
    _fwd.x = vector.x;
    _fwd.y = vector.y;
    _fwd.normalize( );
    _right = _fwd.perpRight( );
    rotation = _fwd.getAngle( );
  },
  
  setSpeed : function( amt )
  {
    _speed = amt;
  },
  
  update : function( dt )
  {
    _velocity = _fwd.multiply( _speed );
    this.move( _velocity.multiply ( dt ) );
  },
  
  turnRight : function( ang )
  {
    rotation += ang;
    _fwd = Vector2.degToVec( rotation );
  },
  
  turnLeft : function( ang )
  {
    rotation -= ang;
    _fwd = Vector2.degToVec( rotation );
  },
  
  turnAbs : function( ang )
  {
    rotation = ang;
    _fwd = Vector2.degToVec( rotation );
  },
  
  move : function( )
  {
    _position = _position.add( motion );
    x = _position.x;
    y = _position.y;
  }
  
};
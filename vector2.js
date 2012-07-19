var Vector2 = {
  
  _x : 0,
  _y : 0,
  DEGRAD : 0, // Math.PI / 180 
  
  Vector2 : function( x, y )
  {
    _x = x;
    _y = y;
  },
  
  getX : function( )
  {
    return _x;
  },
  
  setX : function( x )
  {
    _x = x;
  },
  
  getY : function( )
  {
    return _y;
  },
  
  setY : function( y )
  {
    _y = y;
  },
  
  // ------------------- public methods ------------------- //
  
  add : function( vector )
  {
    return new Vector2( _x + vector.x, _y + vector.y );
  },
  
  subtract : function( vector )
  {
    return new Vector2( _x - vector.x, _y - vector.y );
  }, 
  
  multiply : function( vector )
  {
    return new Vector2( _x * vector.x, _y * vector.y );
  },
  
  divide : function( vector )
  {
    return new Vector2( _x / vector.x, _y / vector.y );
  },
  
  distance : function( vector )
  {
    var deltaX = _x - vector.x;
    var deltaY = _y - vector.y;
    return Math.sqrt( deltaX * deltaX + deltaY * deltaY );
  },
  
  distanceSqr : function( vector )
  {
    var deltaX = _x - vector.x;
    var deltaY = _y - vector.y;
    return ( deltaX * deltaX + deltaY * deltaY );
  },
  
  magnitude : function( )
  {
    return Math.sqrt( _x * _x + _y * _y );
  },
  
  normalize : function( )
  {
    var mag = Math.sqrt( _x * _x + _y * _y );
    
    if ( mag === 0 )
    {
      _x = 0;
      _y = 0;
    }
    else
    {
      _x = _x / mag;
      _y = _y / mag;
    }
  },
  
  getNormalized : function( )
  {
    var mag = Matn.sqrt( _x * _x + _y * _y );
    return new Vector2( _x / mag, _y / mag );
  },
  
  getAngle : function( )
  {
    return Math.atan2( _y, _x ) * 180 / Math.PI;
  },
  
  degToVec : function( deg )
  {
    var rad = deg * DEGRAD;
    return new Vector2( Math.cos( rad ), Math.sin( rad ) );
  }, 
  
  radToVec : function( )
  {
    return new Vector2( Math.sin( rad ), Math.cos( rad ) );
  },
  
  // ---------------- additional vector methods ---------------- //
    
  dot : function( vector )
  {
    return ( _x * vector.x + _y * vector.y );
  },
  
  rotate : function( deg )
  {
    var rad = deg * DEGRAD;
    var cos = Math.cos( rad );
    var sin = Math.sin( rad );
    _x = _x * cos - _y * sin;
    _y = _y * cos + _x * sin;
  },
  
  perpRight : function( )
  {
    return new Vector2( -_y, _x );
  },
  
  toString : function( )
  {
    return ( "x : " + int( _x * 100 ) / 100 + ", \ty : " + int( _y * 100 ) / 100 );
  }
  
};
var Vector2 = function( )
{
  this._x = 0;
  this._y = 0;
  this.DEGRAD = 0;
};

Vector2.prototype.initialize = function( x, y )
{
  _x = x;
  _y = y;
};

Vector2.prototype.getX = function( )
{
  return _x;
};

Vector2.prototype.setX = function( x )
{
  _x = x;
};

Vector2.prototypegetY = function( )
{
  return _y;
};

Vector2.prototype.setY = function( y )
{
  _y = y;
};

// ------------------- public methods ------------------- //

Vector2.prototype.add = function( vector )
{
  return new Vector2( _x + vector.x, _y + vector.y );
};

Vector2.prototype.subtract = function( vector )
{
  return new Vector2( _x - vector.x, _y - vector.y );
};

Vector2.prototype.multiply = function( vector )
{
  return new Vector2( _x * vector.x, _y * vector.y );
};

Vector2.prototype.divide = function( vector )
{
  return new Vector2( _x / vector.x, _y / vector.y );
};

Vector2.prototype.distance = function( vector )
{
  var deltaX = _x - vector.x;
  var deltaY = _y - vector.y;
  return Math.sqrt( deltaX * deltaX + deltaY * deltaY );
};

Vector2.prototype.distanceSqr = function( vector )
{
  var deltaX = _x - vector.x;
  var deltaY = _y - vector.y;
  return ( deltaX * deltaX + deltaY * deltaY );
};

Vector2.prototype.magnitude = function( )
{
  return Math.sqrt( _x * _x + _y * _y );
};

Vector2.prototype.normalize = function( )
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
};

Vector2.prototype.getNormalized = function( )
{
  var mag = Matn.sqrt( _x * _x + _y * _y );
  return new Vector2( _x / mag, _y / mag );
};

Vector2.prototype.getAngle = function( )
{
  return Math.atan2( _y, _x ) * 180 / Math.PI;
};

Vector2.prototype.degToVec = function( deg )
{
  var rad = deg * DEGRAD;
  return new Vector2( Math.cos( rad ), Math.sin( rad ) );
};

Vector2.prototype.radToVec = function( )
{
  return new Vector2( Math.sin( rad ), Math.cos( rad ) );
};

// ---------------- additional vector methods ---------------- //
  
Vector2.prototype.dot = function( vector )
{
  return ( _x * vector.x + _y * vector.y );
};

Vector2.prototype.rotate = function( deg )
{
  var rad = deg * DEGRAD;
  var cos = Math.cos( rad );
  var sin = Math.sin( rad );
  _x = _x * cos - _y * sin;
  _y = _y * cos + _x * sin;
};

Vector2.prototype.perpRight = function( )
{
  return new Vector2( -_y, _x );
};

Vector2.prototype.toString = function( )
{
  return ( "x : " + int( _x * 100 ) / 100 + ", \ty : " + int( _y * 100 ) / 100 );
};
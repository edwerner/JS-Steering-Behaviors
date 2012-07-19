var Obstacle = {
  
  rad : 0,
  col : undefined,
  
  Obstacle : function( radius, color )
  {
    rad = radius;
    col = color;
  },
  
  getRadius : function( )
  {
    return rad;
  },
  
  getPosition : function( )
  {
    return new Vector2( x, y );
  }
  
};
var Manager = {
  
  _obstacleArray : undefined,
  _turtleArray : undefined,
  _lastTime : 0,
  _curTime : 0,
  _dt : 0,
  _howMany : 25,
  flockForward : undefined,
  cohesn : undefined, //new Vector2( )
  obs : undefined, // new Obstacle( )
  
  Manager : function( )
  {
    _obstacleArray = [];
    _turtleArray = [];
    
    this.buildWorld( );
    
    //event listener for to drive frame loop
    /* addEventListener(Event.ENTER_FRAME, frameLoop);
    cohesion.addEventListener(SliderEvent.CHANGE, cohesionChange);
    tether.addEventListener(SliderEvent.CHANGE, tetherChange);
    pace.addEventListener(SliderEvent.CHANGE, paceChange);
    alignment.addEventListener(SliderEvent.CHANGE, alignmentChange);
    separation.addEventListener(SliderEvent.CHANGE, separationChange);
    avoid.addEventListener(SliderEvent.CHANGE, avoidanceChange); */

  },
  
  buildWorld : function( )
  {
    for ( var i = 0; i < 10; i ++ )
    {
      // add obstacles to screen
      var circle = new Obstacle( );
    }
    
    for ( var j = 0; j < 50; j++ )
    {
      // add wanderers to screen
      var wanderer = new Wanderer( );
    }
    // start timer
    _lastTime = getTimer( );
  },
  
  frameLoop : function( e )
  {
    _curTime = getTimer( );
    _dt = ( _curTime -_lastTime ) / 1000;
    _lastTime = _curTime;
    
    flockForward = Wanderer.forwardSum( );
    
    cohesn = new Vector2( );
    
    for ( var i = 0; i < _turtleArray.length; i++ )
    {
      cohesn = cohesn.add( _turtleArray[ i ].position );
    }
    
    cohesn = cohesn.divide( _turtleArray.length );
    
    for ( var j = 0; j < _turtleArray.length; j ++ )
    {
      _turtleArray[ j ].update( _dt );
    }
  }
  /*paceChange : function( e )
	{
		SteeringVehicle._maxSpeed = e.target.value;
	}
  cohesionChange : function( e )
	{
		Wanderer.cohesionWeight = e.target.value;
	}
  alignmentChange : function( e )
	{
		Wanderer.alignmentWeight = e.target.value;
	}
	
  tetherChange : function( e )
	{
		Wanderer.tetherWeight = e.target.value;
	}
		
  wanderChange : function( e )
	{
		Wanderer.wanderWeight = e.target.value;
	}
  separationChange : function( e )
	{
		Wanderer.separationWeight = e.target.value;
	}
  avoidanceChange : function( e )
	{
		Wanderer.obsWeight = e.target.value;
	}*/
  
};
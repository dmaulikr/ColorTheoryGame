#pragma strict
     private var mousePosition: Vector3;
    public var moveSpeed:double;
 	public var delay:int;
 	public var delayCount:int;
 	public var accelRate:double;
 	public var maxSpeed:int;
 	public var myPosition;
 	
 	
    // Use this for initialization
    function Start () {
    moveSpeed=0.05;
    delay=4; 
    delayCount=0;
    accelRate=.01;
    maxSpeed=1;
    
    }
   
    // Update is called once per frame
    function Update () {
        if (delayCount==delay) {
        	delayCount=0;
            mousePosition = Input.mousePosition;
            mousePosition = Camera.main.ScreenToWorldPoint(mousePosition);
            transform.position = Vector2.Lerp(transform.position, mousePosition, moveSpeed);   
        }else {delayCount++;}
 
    }
    function OnMouseOver(){
    	moveSpeed=0.05;
    }

 
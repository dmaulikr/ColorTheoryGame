#pragma strict

    private var mousePosition: Vector3;
    public var moveSpeed:double;
 	public var delay:int;
 	public var delayCount:int;
 	
 	
    // Use this for initialization
    function Start () {
    moveSpeed=5;
    Cursor.visible=false;
    
    }
   
    // Update is called once per frame
    function Update () {
        
            mousePosition = Input.mousePosition;
            mousePosition = Camera.main.ScreenToWorldPoint(mousePosition);
            transform.position = Vector2.Lerp(transform.position, mousePosition, moveSpeed);
   
 
    }
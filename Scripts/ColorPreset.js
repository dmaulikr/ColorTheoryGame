#pragma strict
//presets the color of the ColorCircles. Used for designing individual levels
public var isBlue: int;
public var isRed:int;
public var isYellow:int;
var colorer:SpriteRenderer;//drag the sprite/colorcircles into this.
function Start () {
	
}

function Update () {
	if(isBlue==1){
	colorer.color=new Color(0,0,1,1);
	gameObject.tag="Blue Dot";
	}
	else if(isRed==1){colorer.color=new Color(1,0,0,1);
	gameObject.tag="Red Dot";
	}
	else if(isYellow==1){colorer.color=new Color(1,1,0,1);
	gameObject.tag="Yellow Dot";
	}
}
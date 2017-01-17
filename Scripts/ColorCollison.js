#pragma strict
//determines what should happen when the player collides with a specific color. What color mixes to what etc.
	var currentColor:Color;
	var startingColor:Color;
	var colorGoal:Color;
	var goalColorNum:int;//for the switch statement
	//var presetColor:int;//this will help decide what the starting color is (not implemented)
	var colorer:SpriteRenderer;
	var blue:Color; var red:Color; var yellow:Color; var green:Color; var orange:Color;
	var purple:Color; var yellowOrange: Color; var redOrange:Color; var redPurple:Color;
	var bluePurple:Color; var blueGreen:Color; var yellowGreen:Color; var white:Color;
	var black:Color; var grey:Color; 
	
	var blue2:boolean; var red2:boolean; var yellow2:boolean;//temporary fix for tertiary colors
	
	var nextLevel:String="Menu";
	var successGUI:GameObject;
	
function Start () {
	//init the color values
	white=new Color(1,1,1,1);
	black=new Color(0,0,0,1);
	grey=new Color (0.5, 0.5, 0.5, 1);
	blue=new Color (0,0,1,1);
	red=new Color (1,0,0,1);
	yellow=new Color (1,1,0,1);
	green=new Color(0,1,0,1);
	orange=new Color(1,0.35,0,1);
	purple=new Color(0.6,0,1,1);
	yellowOrange=new Color(0.95,0.8,0,1);
	redOrange=new Color(1,0.25,0,1);
	redPurple=new Color(1,0,1,1);
	bluePurple=new Color(0.35,0,1,1);
	blueGreen=new Color(0,1,1,1);
	yellowGreen=new Color(0.5,1,0,1);
	
	blue2=false;
	red2=false;
	yellow2=false;
	
	if(goalColorNum>=0)
	{
		switch(goalColorNum){
		case 0: colorGoal=black;
			break;
		case 1: colorGoal= orange;//Yellow + Red = ORANGE
			break;
		case 2: colorGoal= purple;//Red + Blue = VIOLET or PURPLE
			break;
		case 3: colorGoal= green;//Blue + Yellow = GREEN
			break;
		case 4: colorGoal= yellowOrange;//Yellow + Orange = YELLOW-ORANGE
			break;
		case 5: colorGoal= redOrange;//Red + Orange = RED-ORANGE
			break;
		case 6: colorGoal= redPurple;//Red + Violet = RED-VIOLET
			break;
		case 7: colorGoal= bluePurple;//Blue + Violet = BLUE-VIOLET
			break;
		case 8: colorGoal= blueGreen;//Blue + Green = BLUE-GREEN
			break;
		case 9: colorGoal= yellowGreen;//Yellow + Green = YELLOW-GREEN
			break;
		case 10: colorGoal=red;
			break;
		case 11:colorGoal=blue;
			break;
		case 12:colorGoal=yellow;
			break;
			}
		
	}
	startingColor=white;//always starts as white for now
	colorer.color=startingColor;
	currentColor=startingColor;//helps with determining what the collision result will be in line 31
}
function Update(){
	if (Input.GetKeyDown ("escape"))
			Application.LoadLevel("Menu");
}
function OnCollisionEnter2D (coll:Collision2D)
{
	
   //There are three kinds of colors, primary, secondary, and tertiary
    	if(coll.gameObject.tag=="Blue Dot")//if the object collided with was blue
    	{
    		if(currentColor==yellow){
    			colorer.color=green;//visually updates the rendering of the new color
    			currentColor=green;//updates the color reference
    			if(yellow2==true){
    			colorer.color=yellowGreen;
    			currentColor=yellowGreen;
    			}
    			Destroy(coll.gameObject);//mix result is green
    		}else if(currentColor.Equals(red)){
    			colorer.color=purple;
    			currentColor=purple;
    			if(red2==true)
    			{
    			colorer.color=redPurple;
    			currentColor=redPurple;
    			}
    			Destroy(coll.gameObject);//mix result is purple
    		}else if(currentColor.Equals(blue)){
    			colorer.color=blue;
    			currentColor=blue;
    			blue2=true;
    			transform.localScale += Vector2(0.05,0.05);
    			Destroy(coll.gameObject);//mix result is still blue
    		}else if(currentColor.Equals(white)){
    			colorer.color=blue;
    			currentColor=blue;
    			Destroy(coll.gameObject);
    		}else if(currentColor==orange){
    			colorer.color=grey;
    			currentColor=grey;
    			Destroy(coll.gameObject);
    		}else if(currentColor==purple){
    			colorer.color=bluePurple;
    			currentColor=bluePurple;
    			Destroy(coll.gameObject);
    		}else if(currentColor==green){
    			colorer.color=blueGreen;
    			currentColor=blueGreen;
    			Destroy(coll.gameObject);
    		}else if(currentColor==yellowOrange){
    			colorer.color=grey;//value not set
    			currentColor=grey;//blue+yellowOrange=mustard grey
    			Destroy(coll.gameObject);
    		}else if(currentColor==redPurple){
    			colorer.color=purple;
    			currentColor=purple;
    			Destroy(coll.gameObject);
    		}else if(currentColor==bluePurple){
    			colorer.color=blue;//no value set
    			currentColor=blue;//blue+bluePurple=darkbluepurple
    			Destroy(coll.gameObject);
    		}else if(currentColor==blueGreen){
    			colorer.color=blue;//no value set
    			currentColor=blue; //blue+bluegreen=nice skyblue
    			Destroy(coll.gameObject);
    		}else if(currentColor==yellowGreen){
    			colorer.color=green;
    			currentColor=green;
    			Destroy(coll.gameObject);
    		}
    	}
        else if(coll.gameObject.tag=="Red Dot")//if the object collided with was red
    	{
    		if(currentColor.Equals(yellow)){
    			colorer.color=orange;
    			currentColor=orange;
    			Destroy(coll.gameObject);//mix result is orange
    		}else if(currentColor==red){
    			colorer.color=red;
    			currentColor=red;
    			red2=true;
    			transform.localScale += Vector2(0.05,0.05);
    			Destroy(coll.gameObject);//mix result is red
    		}else if(currentColor==blue){
    			colorer.color=purple;
    			currentColor=purple;
    			Destroy(coll.gameObject);//mix result is purple
    		}else if(currentColor==white){
    			colorer.color=red;
    			currentColor=red;
    			Destroy(coll.gameObject);
    		}else if(currentColor==orange){
    			colorer.color=redOrange;
    			currentColor=redOrange;
    			Destroy(coll.gameObject);
    		}else if(currentColor==purple){
    			colorer.color=redPurple;
    			currentColor=redPurple;
    			Destroy(coll.gameObject);
    		}else if(currentColor==green){
    			colorer.color=blueGreen;//no value set
    			currentColor=blueGreen;//red+green=brown
    			Destroy(coll.gameObject);
    		}else if(currentColor==yellowOrange){
    			colorer.color=orange;
    			currentColor=orange;
    			Destroy(coll.gameObject);
    		}else if(currentColor==redPurple){
    			colorer.color=purple;//no value set
    			currentColor=purple;//red+redpurple=wine-ish red-purple
    			Destroy(coll.gameObject);
    		}else if(currentColor==bluePurple){
    			colorer.color=purple;
    			currentColor=purple;
    			Destroy(coll.gameObject);
    		}else if(currentColor==blueGreen){
    			colorer.color=grey;
    			currentColor=grey;//blueGreen+ red=grey
    			Destroy(coll.gameObject);
    		}else if(currentColor==yellowGreen){
    			colorer.color=blue;//no value set
    			currentColor=blue;//red+yellowgreen=mustard orange
    			Destroy(coll.gameObject);
    		}
    	}
        else if(coll.gameObject.tag=="Yellow Dot")//if the object collided with was yellow
    	{
    		if(currentColor.Equals(yellow)){
    			colorer.color=yellow;
    			currentColor=yellow;
    			yellow2=true;
    			transform.localScale += Vector2(0.05,0.05);
    			Destroy(coll.gameObject);//mix result is green
    		}else if(currentColor==red){
    			colorer.color=orange;
    			currentColor=orange;
    			Destroy(coll.gameObject);//mix result is purple
    		}else if(currentColor==blue){
    			colorer.color=green;
    			currentColor=green;
    			if(blue2==true)
    			{
    			colorer.color=blueGreen;
    			currentColor=blueGreen;
    			}
    			Destroy(coll.gameObject);//mix result is still blue
    		}else if(currentColor==white){
    			colorer.color=yellow;
    			currentColor=yellow;
    			Destroy(coll.gameObject);
    		}else if(currentColor==orange){
    			colorer.color=yellowOrange;
    			currentColor=yellowOrange;
    			Destroy(coll.gameObject);
    		}else if(currentColor==purple){
    			colorer.color=grey;
    			currentColor=grey;
    			Destroy(coll.gameObject);
    		}else if(currentColor==green){
    			colorer.color=yellowGreen;
    			currentColor=yellowGreen;
    			Destroy(coll.gameObject);
    		}else if(currentColor==yellowOrange){
    			colorer.color=grey;//value not set
    			currentColor=grey;//gold color
    			Destroy(coll.gameObject);
    		}else if(currentColor==redPurple){
    			colorer.color=purple;//value not set
    			currentColor=purple;//tangerine
    			Destroy(coll.gameObject);
    		}else if(currentColor==bluePurple){
    			colorer.color=grey;
    			currentColor=grey;
    			Destroy(coll.gameObject);
    		}else if(currentColor==blueGreen){
    			colorer.color=green;
    			currentColor=green;
    			Destroy(coll.gameObject);
    		}else if(currentColor==yellowGreen){
    			colorer.color=blue;//value not set
    			currentColor=blue;//lime green
    			Destroy(coll.gameObject);
    		}
    	}
        if(colorGoal==currentColor)
        	{
        		successGUI.active = true;
        		yield WaitForSeconds(3);
        		
        		Application.LoadLevel(nextLevel);
        		
        	}
    
}


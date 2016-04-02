#pragma strict
//Creates the goal color for the level randomly or specifically.
//Additionally checks if the player has reached the goal
import System.Collections; 
import UnityEngine.UI;
import UnityEngine;  

	var colorStart : Color= Color.white;
	var colorEnd : Color;
	var colorRandomizer: Color;
	//var duration : float = 1.0;
	var simpleVersion: int;//if 0 then game is harder, if 1 then game only does simple colors
	var PDMode:int;//must be values 0-9, 0 meaning off and 1-9 means a specific color
 	var blue:Color; var red:Color; var yellow:Color; var green:Color; var orange:Color;
	var purple:Color; var yellowOrange: Color; var redOrange:Color; var redPurple:Color;
	var bluePurple:Color; var blueGreen:Color; var yellowGreen:Color; var white:Color;
	var black:Color; var grey:Color;
 
 var imgObj : GameObject;  //drag your Canvas here
 var img : Image ; //drag your image here
	
function Start () {
	//predetermined mode lets the level creator decide. If the var PDMode>0 then predetermined mode is on
	//The number that PDMode is set to (ranging 1-9 [Secondary and Tertiary colors only]) 
	//determines what the goal color will be.
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
	
	if(PDMode>0){
		switch(PDMode){
		case 1: colorEnd= orange;//Yellow + Red = ORANGE
			break;
		case 2: colorEnd= purple;//Red + Blue = VIOLET or PURPLE
			break;
		case 3: colorEnd= green;//Blue + Yellow = GREEN
			break;
		case 4: colorEnd= yellowOrange;//Yellow + Orange = YELLOW-ORANGE
			break;
		case 5: colorEnd=redOrange;//Red + Orange = RED-ORANGE
			break;
		case 6: colorEnd= redPurple;//Red + Violet = RED-VIOLET
			break;
		case 7: colorEnd= bluePurple;//Blue + Violet = BLUE-VIOLET
			break;
		case 8: colorEnd= blueGreen;//Blue + Green = BLUE-GREEN
			break;
		case 9: colorEnd= yellowGreen;//Yellow + Green = YELLOW-GREEN
			break;
		case 10: colorEnd=red;
			break;
		case 11:colorEnd=blue;
			break;
		case 12:colorEnd=yellow;
			break;
			}
	}else if (PDMode==0){
		colorEnd=RandomColor();}
	//rend = GetComponent.<Renderer>();
	//rend.material.color=colorEnd;
	
}

function Update(){
	img.color =colorEnd;
}

function RandomColor() {
	// A different random value is used for each color component (if
	// the same is used for R, G and B, a shade of grey is produced).
	//simpleversion determines whether the color goal is basic primary color combinations or not
	if(simpleVersion==0){
		return new Color(Random.value, Random.value, Random.value);}
	else if(simpleVersion==1){ 
		var randomNum=Random.Range(0,6);
		switch(randomNum){
		case 0: return new Color(0,0,1,1);
			
		case 1: return new Color(0,1,0,1);
			
		case 2: return new Color(0,1,1,1);
			
		case 3: return new Color(1,0,0,1);
			
		case 4: return new Color(1,0,1,1);
			
		case 5: return new Color(1,1,0,1);
			
		case 6: return new Color(1,1,1,1);
			
		}
		
	}
}
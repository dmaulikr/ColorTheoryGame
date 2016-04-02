#pragma strict
var loadTime:int;

var nextLevel:String="Menu";
function Start () {

yield WaitForSeconds(loadTime);
		if(Application.loadedLevelName=="EndSplash"){
			Application.LoadLevel("Menu");
		}else if(Application.loadedLevelName=="LoadingSplash" || Application.loadedLevelName=="InstructionsPage"){
			Application.LoadLevel(nextLevel);	
		} 
		
}

function Update () {
	
	
}
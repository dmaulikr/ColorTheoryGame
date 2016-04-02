#pragma strict
var spinSpeed:int;
function Start () {

}

function Update () {
	transform.Rotate (0,0,-spinSpeed*Time.deltaTime);
}
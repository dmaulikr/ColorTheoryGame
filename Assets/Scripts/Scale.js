#pragma strict
public class Scale extends MonoBehaviour{

	var s:float;

	var num:float;	//numerator the closer this num is to 255 the larger it gets
	var object:GameObject;	//This must take in the object it is assigned to
	function Start () {
		//scalar values must be from 0-1 using x/255 as scale
		//default values set
		//s=0f;	//This updates based on value of num
		//num=1f;
		s=(num/255f);
		object.transform.localScale=new Vector3(s,s,s);

	}

	function Update () {

	}
	function getScale(){
		return s;
		
	}
}
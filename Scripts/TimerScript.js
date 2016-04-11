﻿#pragma strict


public var minutes : float = 5;
public var seconds : float = 0;
public var textObj : GameObject;
public var timerActive : boolean = false;

private var miliseconds : float = 0;
private var timerText : Text;

function Start() {

	timerText = textObj.GetComponent.<Text>();

	timerActive = false;
}
         
function Update(){

	if(timerActive == true){
		if(miliseconds <= 0){
			if(seconds <= 0){
				minutes--;
				seconds = 59;
			}
			else if(seconds >= 0){
				seconds--;
			}
		 
			miliseconds = 100;
		}

		miliseconds -= Time.deltaTime * 100;
	}
             
	

	//Debug.Log(String.Format("{0:00}:{1:00}", minutes, seconds));
	timerText.text = String.Format("{0:00}:{1:00}", minutes, seconds);
}

function StartTimer (){
	timerActive = true;
}

function PauseTimer () {
	timerActive = false;
}
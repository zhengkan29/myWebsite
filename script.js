// JavaScript Document
window.onload = function() {
    //your code here
		var oH1 =document.getElementById("greeting");
		var greeting = getGreeting();
		oH1.innerHTML= greeting;
};
function getGreeting(){
	var now=new Date();
	if (now.getHours() < 12){
		return "Good Morning";
	}
	else if(now.getHours() <18){
		return "Good Afternoon";
	}
	else{
		return "Good Evening";
	}
}
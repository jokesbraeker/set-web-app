// alert("Welcome to Javascript!!!!!!!!!");
// if (1+1===2) {
// 	console.log("Hello");
// }
// function multiplay(a,b){
// 	if (a>b) {return a-b;}
// 	else{b-a;}
// }
// alert(multiplay(10,9));
// var w=prompt("Enter Value");


//var myList=["dog","cat","monkey","elephant"];

/*var user=[{name:"A", 
		age:23,
		total: function(){console.log("Hiii")},
		list :["dog","cat","monkey","elephant"]},
		{name:"B", 
		age:21,
		total:function(){console.log("Hiii")},
		list :["dog","cat","monkey","elephant"]}]
*/

/*var database=[{username:"admin",
			  password:"admin"}]
function newsFeed(){
	alert("Hello how r u? I am boring")
}

var user=prompt("Enter username");
var pass=prompt("Enter password")

function signIn(user,pass){
	if (user===database[0].username && pass===database[0].password) {
		newsFeed();
	}
	else{
		alert("Incorrect username or password");
	}
}*/

////////////////////////////for loop/////////////////////////////////////////////////////////////////////
var myList=["dog","cat","monkey","elephant"];
/*for (var i = 0; i < myList.length; i++) {
	
	console.log(myList[i])

}*/

/////////////////////////////Do while loop///////////////////////////////////////////////////////////////
/*var count=0;
var i=0;
do{
		count++;
		console.log(count)

} while(count<=10);

while(i<=10){
	i++;
	console.log(count);
}*/


/////////////////////////////Foreach Loop//////////////////////////////////////////////////////////////
/*function todo(i){
	console.log(i);
}
myList.forEach(todo);*/
/*myList.forEach(function(i){
	console.log(i)
})*/

///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////Example/////////////////////////////////////////////////////////////////

var user=[{username:"admin",
			password:"admin"},
			{username:"user",
			 password:"pass"},
			 {username:"qwer",
				password:"12345"}];
var user1=prompt("Enter username");
var pwd=prompt("Enter password");

function newsFeed(){
	alert("Hello!!!!!! How are you?")
}

function check1(use,pss){
	for (var i = 0; i < user.length; i++) {
		if (user[i].username===use && user[i].password===pss) {
			alert(newsFeed());
			return true;
		}
			else{return false;}
	}
		
}

function signIn(){
	if (check1(user1,pwd)===true) {alert(newsFeed);}
	else{alert("Incorrect username or password")}
}
signIn();	
	

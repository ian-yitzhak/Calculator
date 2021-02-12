function reset(){

    document.getElementById('calculator').reset(); 
}


function show(value){

	document.getElementById('display').value = value; 
	}
	
function del(){

	document.getElementById('display').value =  document.getElementById('display').value.slice(0 , -1)




		
	}



// variables to be declared later


var firstnumber; //first number

var secondnumber; //second number

var result; //results

var operations; //operators 




//addition function

function plus(){

operation = "+";

firstnumber = parseInt(document.getElementById('display').value);

document.getElementById('display').value = "0";

document.getElementById('display').value = firstnumber + operation;



}


//addition multiply

function mult(){

operation = "*";

firstnumber = parseInt(document.getElementById('display').value);

document.getElementById('display').value = "0";

document.getElementById('display').value = firstnumber + operation;

}



//function minus

function minus(){

operation = "-";

firstnumber = parseInt(document.getElementById('display').value);

document.getElementById('display').value = "0";
document.getElementById('display').value= firstnumber + operation;

}



//function divide

function divide(){

operation = "/";

firstnumber = parseInt(document.getElementById('display').value);

document.getElementById('display').value = "0";

document.getElementById('display').value= firstnumber + operation;

}

//function equal to calculate the values



function equal(){

secondnumber =parseInt(document.getElementById('display').value);

if (operation == "+")

{

result = firstnumber + secondnumber;

}

else if (operation == "*"){

result = firstnumber * secondnumber;

}

else if (operation == "-"){

result = firstnumber - secondnumber;

}

else if (operation == "/"){

result = firstnumber / secondnumber;

}





document.getElementById('display').value ="";

document.getElementById('display').value =  result.toString();

document.getElementById('display').value = firstnumber + operation + secondnumber + " = " + result.toString(); // display value



return;

}

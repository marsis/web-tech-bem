var data = [
    {account: '11970',
     name: 'Galax',
     multiplier: 1.265,
     perYear: 2.7},
    {account: '7348', name: 'Veronica', multiplier: 1.12, perYear: 2.0},
    {account: '10555', name: 'Dragonfly', multiplier: 1.023, perYear: 1.796},
    {account: '10504', name: 'Condor', multiplier: 1.04, perYear: 1.81},
    {account: '10469', name: 'Shark_007', multiplier: 1.17, perYear: 2.13},
]

//var val = document.getElementById('myRange');
//console.log(val);
var monthCoefficient = data[0].multiplier;
console.log(monthCoefficient);

var yearCoefficient = data[0].perYear;
var rezult;
var elem = document.getElementById('account1');
//var income = elem.onclick = function(){

  //  return rezult = val * monthCoefficient;
    
//};
//myRange.onclick
//function renderAccounts(data){


//})


//renderAccounts(data);

//console.log(income);

function onChangeTrackBar() {
var depozit = document.getElementById('myRange').value * monthCoefficient ;
var income = document.getElementById('myRange').value * yearCoefficient;
 document.getElementById('depozit').innerHTML = depozit; 
 document.getElementById('income').innerHTML = income;
	console.log(depozit);
	}

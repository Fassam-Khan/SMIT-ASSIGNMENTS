let a;
a = +prompt("Enter a number ");

document.getElementsByClassName("a")[0].innerText = a;
document.getElementsByClassName("++a")[0].innerText = ++a;
document.getElementsByClassName("after")[0].innerText = a;

document.getElementsByClassName("a++")[0].innerText = a++;
document.getElementsByClassName("after2")[0].innerText = a;
document.getElementsByClassName("--a")[0].innerText = --a;
document.getElementsByClassName("after3")[0].innerText = a;
document.getElementsByClassName("a--")[0].innerText = a--;
document.getElementsByClassName("after4")[0].innerText = a;

var d = 2;
var e = 1;
var result = --d - --e + ++d + e--;

document.getElementsByClassName("d")[0].innerText = d;
document.getElementsByClassName("e")[0].innerText = e;
document.getElementsByClassName("result")[0].innerText = result;

let name = prompt("Enter your name ");
document.getElementsByClassName("name")[0].innerText = "Welcome "
 + name;

 var tableNum = +prompt("Enter your number for table ")
 document.getElementsByClassName("tableNum")[0].innerText = tableNum ? tableNum : 5;
 if(tableNum == ""){
    tableNum =5;
 }
 for (let i = 1; i <= 10; i++) {
    document.getElementsByClassName("table")[0].innerHTML += 
    tableNum + " x " + i + " = " + (tableNum * i) + "<br>" ;

    
 }


var subject1 = prompt("Enter first subject name");
var subject2 = prompt("Enter second subject name");
var subject3 = prompt("Enter third subject name");
var mark1 = +prompt("Enter obatined marks of 1 subject");
var mark2 = +prompt("Enter obatined marks of 2 subject");
var mark3 = +prompt("Enter obatined marks of 3 subject");



document.getElementsByClassName("subject1")[0].innerText = subject1;
document.getElementsByClassName("subject2")[0].innerText = subject2;
document.getElementsByClassName("subject3")[0].innerText = subject3;
document.getElementsByClassName("mark1")[0].innerText = mark1;
document.getElementsByClassName("mark2")[0].innerText = mark2;
document.getElementsByClassName("mark3")[0].innerText = mark3;

var percent1 =  (mark1 / 100)*100;
var percent2 =  (mark2 / 100)*100;
var percent3 =  (mark3 / 100)*100;
var totalObtainMarks = mark1 + mark2 + mark3;
var percent = (totalObtainMarks / 300)*100;
 
document.getElementsByClassName("percent1")[0].innerText = percent1 + "%";
document.getElementsByClassName("percent2")[0].innerText = percent2 + "%";
document.getElementsByClassName("percent3")[0].innerText = percent3 + "%";

document.getElementsByClassName("obtainedMarks")[0].innerText = totalObtainMarks;
document.getElementsByClassName("percentage")[0].innerText = percent + "%";











totalMarks = 100;
















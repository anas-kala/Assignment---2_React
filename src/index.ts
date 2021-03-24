import square from './square';
import sum from './sum';
document.writeln('the sum of 5 and 6 is: ', sum(5, 6).toString(), '<br/>');
document.writeln('the sum of 7 and 2 is: ', sum(7, 2).toString(), '<br/>');
document.writeln('the square of 5 and 6 is: ', square(5, 6).toString(), '<br/>');
document.writeln('the square of 7 and 4 is: ', square(7, 4).toString(), '<br/>');

let a=5;
if(a=6){
    console.log("hallo");
}


// uncomment the following line failure and run "npm lint"
// conso.log("typing failure");

// uncomment the following type failure and run "npm checktype"
// document.writeln(5);
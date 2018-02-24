Chapter 1

// Tast 1
alert("Welcome");
// Tast 2
alert("Error! Please enter a valid password");
// Task 3
alert("Welcome to JS Land \n Happy Coding!");
// Task 4
alert("Welcome to JS Land");
alert("Happy Coding!");

Chapter 2

// Task 1
var username;
// Task 2
var myName = "Ali Khan";
// Task 3
var message = "Hello World!";
alert(message);
// Task 4
var name = "Ali Khan";
var age = 17;
var institute= "SSUT";
var course = "Mobile and Cloud Computing - Module A";
alert(name);
alert(age);
alert(institute);
alert(course);
// Task 5
alert("PIZZA \n PIZZ \n PIZ \n PI \n P");
// Task 6
var children = 2;
var partnerName = "ABC";
var location = "America";
var job = "Software Developer";
alert("You will be a " + job + "in " + location + ", and married to " + partnerName + "with " + children + "kids");
// Task 7
var email = "abc@xyz.com";
alert("My email address is " + email);
// Task 8
var book = "A smarter way to learn JavaScript";
alert(book);
// Task 9
alert("My name is " + name + "I study in " + institute + "I take" + course);
// Task 10
document.write("Yay! I can write HTML content through JavaScript");

CHAPTER 3

//task 1
//var age = "I am 20 years old";
//alert (age);

//task 2
//var a = 20;
//alert("You have visited this site " + a + " times")

//task 3
//var birthYear = 20;
//document.write("My birth year is " + birthYear + "<br>" ); 
//document.write (typeof birthYear);

//task 4
//var name = "owais";
//var title = "T-Shirts";
//var quantity = 5;
//document.write (name + " ordered " + quantity + title + " on Shazy Clothing store");
// complete 

CHAPTER 4

// task 1 declare 3 variables in one statement
//var abc , xyz , owaisUsman ;

//task 2 declare 5 legal & 5 illegal variable
// 5 legal variable
//var abc , _$9 , xyz_123 , firstName , _$abc123;
// 5 illegal variable
//var 123 , %abc , &Owais , 1_$ , #xyz;

// task 3
// document.write ("Rulling for nameing JS variables" + "<br>");
// document.write ("ariable names can only contain  $ , characters , underscore , numbers" + "<br>");
// document.write ("variables must begin with a $ , characters , _ " + "<br>");
// document.write ("variable name are case sensitive" + "<br>");
// document.write ("variable names should not be JS KEYWORDS");


CHAPTER 5-7 Math Expressions

// Task 1. Write a program that take two numbers & add them in a new
//         variable. Show the result in your browser.

var a = +prompt("Enter 1st Number");
var b = +prompt("Enter 2nd Number");
var c = a + b;
alert("Sum of " + a +" and " + b + " is " + c);


// Task 2. Repeat task1 for subtraction, multiplication, division & modulus. E.g.

var a = +prompt("Enter 1st Number");
var b = +prompt("Enter 2nd Number");
var c = a - b;
alert("Result of Subtracting " + a +" and " + b + " is " + c);

var a = +prompt("Enter 1st Number");
var b = +prompt("Enter 2nd Number");
var c = a * b;
alert("Result of Multiplying " + a +" and " + b + " is " + c);

var a = +prompt("Enter 1st Number");
var b = +prompt("Enter 2nd Number");
var c = a / b;
alert("Result of Dividing " + a +" and " + b + " is " + c);

var a = +prompt("Enter 1st Number");
var b = +prompt("Enter 2nd Number");
var c = a % b;
alert("Rminder of Dividing " + a +" and " + b + " is " + c);


// Task 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.
// var a;
// b. Show the value of variable in your browser like �Value after variable declaration is: ??�.
// alert("Value after variable declaration is:")
// c. Initialize the variable with some number.
// a = 10;
// d. Show the value of variable in your browser like �Initialvalue: 3�.
// alert("Initial Value: "+a);
// e. Increment the variable.
// a++;
// f. Show the value of variable in your browser like �Value after increment is: 4�.
// alert("Value after increment is: "+a);
// g. Add 7 to the variable.
// a = a + 7;
// h. Show the value of variable in your browser like �Value after addition is: 11�.
// alert("Value after addition is: "+a);
// i. Decrement the variable.
// a--;
// j. Show the value of variable in your browser like �Value after decrement is: 10�.
// alert("Value after decrement is: "+a);
// k. Show the remainder after dividing the variable�s value by3. Output : �The remainder is : 1�
// a = a % 3;
// alert("The remainder is : " +a);


// Task 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price
//  in a variable & calculate the cost of buying 5 tickets to a movie.

var a = 600;
var b = +prompt("Number of tickets");
var c = a * b;
alert("Total Cost To Buy " +b +" Tickets to a Movie is: " + c);


// Task 5. Write a script to display multiplication table of any number in your browser.

var a = +prompt("Enter Table Number to Print");
for (var i = 1; i <=10; i++) {
    alert( a +" * " +i +" = " + a*i);
}


// Task 6. The Temperature Converter: It�s hot out! Let�s make a converter based on the steps here.
//  a. Store a Celsius temperature into a variable.
var a = +prompt("Enter Temperature In Celcius");
//  b. Convert it to Fahrenheit & output �NNoC is NNoF�.
var b = ((a * 9)/5) + 32;
alert("Temperature In Ferenheit is: " +b); 
//  c. Now store a Fahrenheit temperature into a variable.
var c = +prompt("Enter Temperature In Ferenheit");
//  d. Convert it to Celsius & output �NNoF is NNoC�.
var d = ((c - 32)*5) / 9;
// alert("Temperature In Celcius is: " +d); 


// Task 7. Write a program to implement checkout process of a shoppingcart system for an e-commerce website.
//  Store the following in variables
// a. Price of item 1
var a = +prompt("Price of item 1");
// b. Price of item 2
var b = +prompt("Price of item 2");
// c. Ordered quantity of item 1
var c = +prompt("Ordered quantity of item 1");
// d. Ordered Quantity of item 2
var d = +prompt("Ordered quantity of item 2");
// e. Shipping charges
var e = 200;
var f = (a * c) + (b * d) + e;

alert("Price of Item 1 is: "+a +"\n"+"Quantity of Item 1 is: "+c);
alert("Price of Item 2 is: "+b +"\n"+"Quantity of Item 2 is: "+d);
alert("Shipping Charges: "+e);
alert("Total Cost Of Your Order is " +f +" PKR");


// Task 8.Write a script to take total marks & marks obtained by astudent.
//  Compute the percentage & show the result in your browser.

var a = +prompt("Total Marks");
var b = +prompt("Obtained Marks");
var c = (b/a) * 100;
alert("Total Marks: "+a +"\n"+"Obtained Marks: "+b +"\n"+"\n"+"Percentage: " +c +" %");


// Task 9.Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency
//  to Pakistani Rupees. Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and1 Saudi Riyal = 28 Pakistani Rupee)

var a = 10 * 104;
var b = 25 * 28;
var c = a + b;
alert("Total Currency In PKR: " +c);


// Task 10.Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.

var a = +prompt("Enter Any Number");
a = a + 5;
a = a * 10;
a = a / 2;
alert(a);


// Task 11.The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: �They are either NN or NN
// years old�.

var a = +prompt("Enter Current Year","2018");
var b = +prompt("Enter Birth Year","1997");
var c = a - b;
var d = c - 1;

alert("Current Year : "+a +"\n" +"Birth Year : "+b);
alert("They are Either "+d +" Or "+c +" years Old" );



// Task 12.The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output �The circumference is NN�.
// (Hint : Circumference of a circle = 2 p r , p = 3.142)
// Calculate the area based on the radius, and output �The area is NN�.
//  (Hint : Area of a circle = p r2, p = 3.142)

var x = +prompt("Enter Radius of Circle","4");
var y = 2 * (3.142 * a);
var z =  3.142 * (a * a);

alert("Radius of a Circle is "+x+"\n"+"\n" +"CircumFerence of a Circle is "+y+"\n"+"\n" +"Area of a Circle is "+z);

// Task 13.Write a program to take a number in a variable, do the required arithmetic
//  to display the following result in your browser

var a = +prompt("Enter Any Number");
alert("The Value of a is: "+a +"\n" + "__________________________" +"\n"+"\n"
    +"The Value of ++a is: "+ ++a +"\n" +"Now The Value of a is: "+a+"\n"+"\n"
    +"The Value of a++ is: "+a +"\n" +"Now The Value of a is: "+a++ +"\n"+"\n"
    +"The Value of --a is: "+--a +"\n" +"Now The Value of a is: "+a+"\n"+"\n"
    +"The Value of a-- is: "+a-- +"\n" +"Now The Value of a is: "+a);


// Task 14.What will be the output in variables a, b & result after execution of the following script:

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
alert("result is "+result);


// Task 15.The Lifetime Supply Calculator: Ever wonder how much a 
// �lifetime supply� of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: �You will need NNNN to
// last you until the ripe old age of NN�.

var a = prompt("Enter your favourite Snacks");
var b = +prompt("Enter your age");
var c = +prompt("Maximum Age");
var d = +prompt("Estimated Amount per Day");
var e = ((c - b) * 365) * d;
alert("Favourite Snacks "+a+"\n"+"Current Age "+b+"\n"+"Maximum Age "+c+"\n"+"Estiated Amount Per Day "+d+"\n");
alert("You Will Need "+e +" "+a +" to Last you until the rip old age of "+c );




CHAP 8,9,10,11


//1. Write a program that takes input a name from user & greet the user:
/*var a = prompt("Enter your name");
alert("Welcome " +a);*/

/*2. Write a program to take input a number from user & display
it�s multiplication table on your browser. If user does not enter
a new number, multiplication table of 5 should be displayed by
default.*/
/*var a = prompt("Enter number for Table");
for(var i=1;i<=10;i++)
{
console.log(a +"*" +i +"=" +(a*i));
}
if(a=== "")
{ 
    for(var j=1;j<=10;j++)
    {
        console.log(5 +"*" +j +"=" +(5*j));
    }
}*/

/*3. Write a program to take �city� name as input from user. If user
enters �Karachi�, welcome the user like this: �Welcome to city
of lights�*/
/*var a = prompt("Enter your City name");
if(a === "Karachi")
{
  console.log("Welcome to City of lights");
}
else
{
    console.log("Welcome in " +a);
}*/

/*4. Write a program to take �gender� as input from user. If the
user is male, give the message: Good Morning Sir. If the user is
female, give the message: Good Morning Ma�am.*/
/*var a = prompt("Gender?");
if(a === "Male")
{
  console.log("Good Morning Sir!");

}
else if (a=== "Female")
{
    console.log("Good Morning Ma'am");
}*/


/* 6. Write a program to take input max age & current age from
user. If the current age is less than or equal to max age, show
the message �You are welcome�*/ 
/*var maxAge=prompt("Max age");
var currentAge=prompt("Current age");
if(currentAge<=maxAge)
{
    console.log("You are Welcome ");
}*/


/*7. Write a program to take input remaining fuel in car (in litres)
from user. If the current fuel is less than 0.25litres, show the
message �Please refill the fuel in your car� */
/*var fuel=+prompt("Fuel in Car");
if(fuel<0.25)
{
    console.log("Please refill the fuel in your car");
}*/


/*10. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Take input
from users, the following:
a. Name of item1
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser. */
/*var itme1=+prompt("Name of item1");
var itme2=+prompt("Name of itme2");
var pitem1=+prompt("Price of item 1");
var pitem2=+prompt("Price of item 2");
var oitem1=+prompt("Oreder quantity of item1");
var oitem2=+prompt("Order quantity of item2");
var shipping=+prompt("Shipping charges");
var totalp=(itme1+itme2+pitem1+pitem2+oitem1+oitem2+shipping);
if(totalp===2000)
{
    console.log("Your total amount after 10% discount" +(2000 - (2000*0.1) ));

}
else
{
    console.log("Your total amount");
}*/


/*11. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show �Bingo! Correct
answer�.
b. If the guessed number +1 is the secret number, show
�Close enough to the correct answer�. */
/*var a=+prompt("Guess the number b/w 1 to 10");
if(a=== 5)
{
    console.log("Bingo!Correct answer");
}
else if(a=== 1 || a=== -1)
{
console.log("Close enough to the correct answer");
}*/



/*12. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number is
divisible by 3.*/
/*var a=+prompt("Enter Number");
if(a%3==0)
{
    console.log("The given number is the multiple of 3");
}*/



/*13. Names & Total scores of two teams are taken as input. Write
a program that shows which team has won the game or show if
there is a tie. (Team A or Team B) */
/*var teamA=+prompt("Enter Team A Score");
var teamb=+prompt("Enter Team B Score");
if(teamA < teamb)
{
    console.log("Team B won the match");
}
else if(teamb < teamA)
{
    console.log("Team A won the match");
}
else if(teamA === teamb)
{
    console.log("the match is tie!");
}*/



/*14. Take a string, a number and a Boolean in three variables.
Write a program that checks the type of variables & responds
accordingly. */
/*var str=prompt();
var num=+prompt();
var boo=true;
if(str===str)
{
    console.log(str +" is String");
}
if(num===num)
{
    console.log(num +" is Number");
}
if(boo==true)
{
    console.log(boo +" is boolean");
}*/



/*15. Write a program that checks whether the given input is an
even number or an odd number. */
/*var a=+prompt("Enter Number");
if(a%2==0)
{
    console.log("Even number");
}
else{
    console.log("Odd number");
}*/



/*16. Weather in Karachi nowadays is too cool, write a program
that takes temperature as input and shows a message based on
following criteria
a. T > 40 then �It is too hot outside.�
b. T > 30 then �The Weather today is Normal.�
c. T > 20 then �Today�s Weather is cool.�
d. T > 10 then �OMG! Today�s weather is so Cool.� */
/*var temp=+prompt("Enter Temperature in Karachi in celsius");
if(temp >40 )
{
    console.log("It is too hot outside.");
}

if(temp>30 && temp <40)
{ 
    console.log("The Weather today is Normal.");
}
if(temp>20 && temp < 30)
{
    console.log("Today�s Weather is cool.");
}
if(temp>10 && temp<20)
{
    console.log("OMG! Today�s weather is so Cool.");
}*/




/*17. Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user. */
/*var a=+prompt("Enter first number");
var b=+prompt("Enter second number");
var c=prompt("What you want to perform? +,-,*,/,%");
if(c==="+")
{
    console.log(a+b);
}
if(c==="-")
{
    console.log(a-b);
}
if(c==="*")
{
    console.log(a*b);
}
if(c==="/")
{
    console.log(a/b);
}
if(c=== "%")
{
    console.log(a%b);
}*/


/*18. Write a program that takes user input day name. If the day is
Monday, Tuesday, Wednesday, Thursday or Friday, then show
�It�s a week day�. If the day is Saturday then show �It�s
weekend�. If the day is Sunday then show �Yay! It�s a holiday�. */
/*var a=prompt("Enter Day Name");
if(a==="Monday")
{
    console.log("It is weekday");
}
else if(a==="Tuesday")
{
    console.log("It is weekday");

}
else if(a==="Wednesday")
{
    console.log("It is weekday");

}
else if(a==="Thursday")
{
    console.log("It is weekday");
}
else if(a==="Friday")
{
    console.log("It is weekday");   
}
else if(a==="Saturday")
{
    console.log("It is week end");
}
else if(a==="Sunday")
{
    console.log("Yay! It's a holiday");
}
else
{
    console.log("It is not a day name");
}*/

/*19. Write a program that takes input user�s score, if it�s greater
than 50, say �You are passed�. Otherwise, show �Try again!� */
/*var a=+prompt("Enter your Score");
if(a>50)
{
    console.log("You are Passed");
}
else
{
    console.log("You are fail");
}*/



/*20. Write a program that:
a. takes 2 numbers.
b. tells whichever number is the greater (higher) number.
c. tells if they are equal*/
/*var a=+prompt("Enter first number");
var b=+prompt("Enter second number");
if(a>b)
{
    console.log("first number is greater");
}
else if(b>a)
{
    console.log("Second number is greater");
}
else if(a==b)
{
    console.log("Both are equal");
}*/

/*Write a program that:
a. takes 1 input, a language code (e.g. "es", "de", "en")
b. tells "Hello, World" for the given language, for atleast 3
languages. It should default to returning English.*/
/*var a=prompt("Enter your Language from the given (en,urdu,hindi)");
if(a==="es")
{
    console.log("Hello World");
}
else if(a==="urdu")
{
    console.log("???? ????");
}
else if(a==="hindi")
{
    console.log("?????? ??????");
}
else{
    console.log("Your given language is not in list");
}*/



/*23. The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1
dog".*/
var a=+prompt("Enter number");
var b=prompt("Enter Noun");
console.log(a +" " +b);

CHAPTER 12

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>


<script>
    var a,b,c;
   /*a=prompt("Enter no");
    if(a%3==0)
    {
        alert("divisible");
    }
    else
    {
        alert(" �Number is not divisible by 3�.");
    }
    */
  /* a =prompt("Enter no");
    if(a%2==0)
    {
        alert("Even No");
    }
    else
    {
        alert(" odd number");
    }*/
   /* a=prompt("Enter age");
    if(a>18)
    {
        alert("old enough");
    }
    else
    {
        alert(" too young.");
    }*/
  /*  a=prompt("Enter your name");
    if(a=="Imad")
    {
        alert("special greeting");
    }
    else
    {
        alert("no special greeting");
    }
    */
    /*a=prompt("Enter any one alphabate");
     a=a.charCodeAt();
     
     if(a>=65 && a<=90)
     {
        alert("its upper");

     }
     else if (a=>97 && a<=122)
     {
         alert("its small");
     }
     else{
        alert("its not alphabates");
     }
     */
     /*a=1800;
     if(a>=0000 && a<=1200)
     {
         alert("Good Morning");
     }
     else if(a>=1200 && a<=1700)
     {
         alert("Good after noon");
     }
     else if(a>=1700 && a<=2100)
     {
         alert("Good Evening");
     }
     
     else if(a>=2100 && a<=2359)
     {
         alert("Good night");
     }

     */
  /*  var year =prompt("Enter year");
     if(year%4 == 0)
    {
        if( year%100 == 0)
        {
            // year is divisible by 400, hence the year is a leap year
            if ( year%400 == 0)
                alert(" is a leap year."+ year);
            else
            alert("it is not a leap year."+ year);
        }
        else
        alert("it is a leap year."+ year );
    }
    else
    alert("it is not a leap year."+ year);
*/
/*var a=prompt("Enter Your passwrd");
if(a="123")
{
    alert("correct");
}
else{
    alert("incorrect");
}*/
/*var firstName = "Ali"; 
if (firstName === "Ahmed") {     
       document.write("Hello Ahmed!");
        } 
        else
        {
            alert("you are not Ahmed");
        }

*/
/*var greeting;      
   var hour = 13;      
   if (hour < 18) 
{            
     greeting = "Have a Good day";      
}else
        {
  greeting = "Have a Good evening";         }  
  */

/*x =prompt("Enter no");

y =prompt("Enter no");
    if(x>y )
    {
        alert("first  no is large");
    }
    else if(x<y)
    {
        alert(" odd number");
    }
    else
    {
        alert("equal");
    }

*/
/*
x=prompt("Enter no");
    if(x==0)
    {
        alert("zero");
    }
    else if(x>=0)
    {
        alert("positive");
    }
    else if(x<=0)
    {
        alert("negative");
    }

*/
a=+prompt("Enter value")
if(typeof a === 'number') {
   alert("value is number");
}

else if(typeof a === 'string') {
   alert("value is string");
}
else if(typeof a === 'boolean');
{
    alert("value is boolean");
} 
</script>

<body>
    
</body>
</html>
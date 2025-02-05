There are several conditional statements in JavaScript that you can use to make decisions:

The if statement
The if...else statement
The if...else if....else statement
Ternary Operator
The switch...case statemen

==============================

=> IF Else COndition
The if...else statement allows you to execute one block of code if the specified condition is evaluates to true and another block of code if it is evaluates to false.

You can enhance the decision making capabilities of your JavaScript program by providing an alternative choice through adding an else statement to the if statement.  It can be written, like this:

if(condition) {
    // Code to be executed if condition is true
} else {
    // Code to be executed if condition is false
}

=================================
 => The if...else if...else Statement

The if...else if...else a special statement that is used to combine multiple if...else statements.

if(condition1) {
    // Code to be executed if condition1 is true
} else if(condition2) {
    // Code to be executed if the condition1 is false and condition2 is true
} else {
    // Code to be executed if both condition1 and condition2 are false
}

================================
=> Ternary Operator

The ternary operator provides a shorthand way of writing the if...else statements. The ternary operator is represented by the question mark (?) symbol and it takes three operands: a condition to check, a result for ture, and a result for false. Its basic syntax is:

var result = (condition) ? value1 : value2

==============================================
==> Switch Case Statement

The switch..case statement is an alternative to the if...else if...else statement, which does almost the same thing. The switch...case statement tests a variable or expression against a series of values until it finds a match, and then executes the block of code corresponding to that match. It's syntax is:

switch(x){
    case value1:
        // Code to be executed if x === value1
        break;
    case value2:
        // Code to be executed if x === value2
        break;
    ...
    default:
        // Code to be executed if x is different from all values
}
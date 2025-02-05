==> The while Loop
The while loop will loops through a block of code until the specified condition evaluates to true. As soon as the condition fails, the loop is stopped. The generic syntax of the while loop is:
Example: -- 
        var i = 1;
        while(i <= 5) {    
            document.write("<p>The number is " + i + "</p>");
            i++;
        }
=============================================

==> DO While Loop
The do-while loop is a variant of the while loop, which evaluates the condition at the end of each loop iteration. With a do-while loop the block of code executed once, and then the condition is evaluated, if the condition is true, the statement is repeated as long as the specified condition evaluated to is true. The generic syntax of the do-while loop is:
-> Example:- 
        var i = 1;
            do {
                document.write("<p>The number is " + i + "</p>");
                i++;
            }
            while(i <= 5);

==============================================================
==> For Loop
The for loop repeats a block of code until a certain condition is met. It is typically used to execute a block of code for certain number of times. Its syntax is:
Example:-- 
        for(var i=1; i<=5; i++) {
            document.write("<p>The number is " + i + "</p>");
        }
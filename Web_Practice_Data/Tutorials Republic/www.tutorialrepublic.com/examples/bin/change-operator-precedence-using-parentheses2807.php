<!DOCTYPE html>
<html lang="en">
<head>
    <title>PHP Change Operator Precedence Using Parentheses</title>
</head>
<body>

<?php
echo 5 + 4 * 10 . "<br>";         // 0utputs: 45
echo (5 + 4) * 10 . "<br>";       // 0utputs: 90
echo 5 + 4 * 10 / 2 . "<br>";     // 0utputs: 25
echo 8 * 10 / 4 - 2 . "<br>";     // 0utputs: 18
echo 8 * 10 / (4 - 2) . "<br>";   // 0utputs: 40
echo 8 + 10 / 4 - 2 . "<br>";     // 0utputs: 8.5
echo (8 + 10) / (4 - 2) . "<br>"; // 0utputs: 9
?>

</body>
</html>
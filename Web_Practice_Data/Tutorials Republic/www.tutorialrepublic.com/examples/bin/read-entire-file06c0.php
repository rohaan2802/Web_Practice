<!DOCTYPE html>
<html lang="en">
<head>
    <title>Reading Whole Contents of File in PHP</title>
</head>
<body>

<?php
$file = "data.txt";
 
// Check the existence of file
if(file_exists($file)){
    // Open the file for reading
    $handle = fopen($file, "r") or die("ERROR: Cannot open the file.");
        
    // Reading the entire file
    $content = fread($handle, filesize($file));
        
    // Closing the file handle
    fclose($handle);
        
    // Display the file content
    echo $content;
} else{
    echo "ERROR: File does not exist.";
}
?>

</body>
</html>
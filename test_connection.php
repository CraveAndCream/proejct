<?php
$servername = "sql205.infinityfree.com"; // Updated hostname
$username = "if0_38635403"; // Updated username
$password = "drcVzxbZMAq"; // Updated password
$dbname = "if0_38635403_databasebaru"; // Updated database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully to databasebaru!";
$conn->close();
?>

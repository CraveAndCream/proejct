<?php
$servername = "sql205.infinityfree.com"; // Updated hostname
$username = "if0_38635403"; // Updated username
$password = "your_database_password"; // Replace with your database password
$dbname = "if0_38635403_databasebaru"; // Updated database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM orders"; // Replace 'orders' with your table name
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "Order ID: " . $row["id"] . " - Name: " . $row["name"] . " - Payment Method: " . $row["payment_method"] . "<br>";
    }
} else {
    echo "No records found.";
}

$conn->close();
?>

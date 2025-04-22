<?php
header("Content-Type: application/json");

// Online database connection
$servername = "sql205.infinityfree.com"; // Updated hostname
$username = "if0_38635403"; // Updated username
$password = "drcVzxbZMAq"; // Updated password
$dbname = "if0_38635403_databasebaru"; // Updated database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit();
}

// Get the JSON data from the request
$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data)) {
    foreach ($data as $item) {
        if (!isset($item["name"], $item["price"], $item["quantity"])) {
            echo json_encode(["success" => false, "message" => "Invalid data format"]);
            exit();
        }

        $name = $conn->real_escape_string($item["name"]);
        $price = $conn->real_escape_string($item["price"]);
        $quantity = $conn->real_escape_string($item["quantity"]);

        // Insert the data into the orders table
        $sql = "INSERT INTO orders (product_name, price, quantity) VALUES ('$name', '$price', '$quantity')";

        if (!$conn->query($sql)) {
            echo json_encode(["success" => false, "message" => "Failed to save order"]);
            exit();
        }
    }

    echo json_encode(["success" => true, "message" => "Order saved successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "No data received"]);
}

$conn->close();
?>

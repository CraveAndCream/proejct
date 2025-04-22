<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Retrieve form data
$name = $_POST['name'];
$whatsapp = $_POST['whatsapp'];
$payment_method = $_POST['payment_method'];
$notes = $_POST['notes'];
$cart_data = json_decode($_POST['cart_data'], true);

// Prepare data to send to Google Sheets
$data = [
    "name" => $name,
    "whatsapp" => $whatsapp,
    "payment_method" => $payment_method,
    "notes" => $notes,
    "cart_data" => $cart_data
];

// Google Apps Script Web App URL
$webAppUrl = "YOUR_WEB_APP_URL"; // Replace with your Web App URL

// Send data to Google Sheets
$options = [
    "http" => [
        "header" => "Content-Type: application/json\r\n",
        "method" => "POST",
        "content" => json_encode($data)
    ]
];
$context = stream_context_create($options);
$response = file_get_contents($webAppUrl, false, $context);

if ($response === FALSE) {
    error_log("Error sending data to Google Sheets."); // Debugging log
    die("Error sending data to Google Sheets.");
}

$responseData = json_decode($response, true);
if ($responseData['result'] !== 'success') {
    error_log("Error from Google Sheets: " . $responseData['error']); // Debugging log
    die("Error from Google Sheets: " . $responseData['error']);
}

// Redirect to a success page
header("Location: success.html");
exit();
?>

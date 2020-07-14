<?php
$username = "root";
$password = "passwordtest";

try {
    $conn = new PDO("mysql:host=localhost;dbname=res_kor_db1", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    die("ERROR: Could not connect. Something weird happened" . $e->getMessage());
}
?>

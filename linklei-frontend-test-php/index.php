<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
date_default_timezone_set('America/Sao_Paulo');

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
  case "POST";
    $payload = json_decode(file_get_contents('php://input'));
    $sql = "INSERT INTO posts (id,	user, type,	text,	created_at,	updated_at) VALUES (null, :name, :type, :text,	:created_at,	:updated_at)";
    $stmt = $conn->prepare($sql);
    $created_at = date('Y-m-d H:i:s');
    $stmt->bindParam(':name', $payload->name);
    $stmt->bindParam(':type', $payload->type);
    $stmt->bindParam(':text', $payload->text);
    $stmt->bindParam(':created_at', $created_at);
    $stmt->bindParam(':updated_at', $created_at);
    if($stmt->execute()) {
      $response = ['status' => 201, 'message' => 'Post criado com sucesso.'];
    } else {
      $response = ['status' => 0, 'message' => 'Falha ao criar o Post.'];
    }
    echo json_encode($response);
    break;
}
?>
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
date_default_timezone_set('America/Sao_Paulo');

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
  case "GET":
    $sql = "SELECT * FROM posts ORDER BY updated_at DESC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($posts);
    break;
  case "POST":
    $payload = json_decode(file_get_contents('php://input'));
    $sql = "INSERT INTO posts (id, name, type, text,	created_at,	updated_at) VALUES (null, :name, :type, :text,	:created_at,	:updated_at)";
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
  case "PUT":
    $payload = json_decode(file_get_contents('php://input'));
    $sql = "UPDATE posts SET name = :name, type = :type,	text = :text,	updated_at = :updated_at WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $updated_at = date('Y-m-d H:i:s');
    $stmt->bindParam(':id', $payload->id);
    $stmt->bindParam(':name', $payload->name);
    $stmt->bindParam(':type', $payload->type);
    $stmt->bindParam(':text', $payload->text);
    $stmt->bindParam(':updated_at', $updated_at);
    if($stmt->execute()) {
      $response = ['status' => 204, 'message' => 'Post editado com sucesso.'];
    } else {
      $response = ['status' => 0, 'message' => 'Falha ao editar o Post.'];
    }
    echo json_encode($response);
    break;
  case "DELETE":
    $sql = "DELETE FROM posts WHERE id = :id";
    $path = explode('/', $_SERVER['REQUEST_URI']);
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $path[4]);
    if($stmt->execute()) {
      $response = ['status' => 204, 'message' => 'Post excluido com sucesso.'];
    } else {
      $response = ['status' => 0, 'message' => 'Falha ao excluir o Post.'];
    }
    echo json_encode($response);
    break;
}
?>
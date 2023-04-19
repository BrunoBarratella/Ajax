<?php
require_once __DIR__ . "/conexao_class.php";

class Comentarios{
public $names;
public $comments;

  public function set()
  {
    $conexao = new Conexao();

    try{
      $sql = "INSERT INTO comentarios SET names='" . $this->names . "', comments='" . $this->comments . "'";

      $qr = $conexao->conn->prepare($sql);
      $qr->execute();
    }catch(PDOException $e){
      echo "Whoops, ocorreu um erro ao inserir dados no banco de dados" . $e;
    }
  }

  public function get(){
    $conexao = new Conexao();

    try{
      $sql = "SELECT * FROM comentarios";

      $qr = $conexao->conn->prepare($sql);
      $qr->execute();
      return $qr->fetchAll();
    }catch(PDOException $e){
      echo "Whoops, ocorreu um erro ao trazer os dados do banco de dados" . $e;
    }
  }
}
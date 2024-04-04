
<?php
// echo $db;exit;
define("MYSQL_SERVER", "localhost");
define("MYSQL_USER", "root");
define("MYSQL_PASS", "");
define("MYSQL_DBNAME", "datatable");
define("MYSQL_DBPORT", "3306");
//$con = @new mysqli(MYSQL_SERVER,MYSQL_USER,MYSQL_PASS,MYSQL_DBNAME);

$connection = mysqli_connect(MYSQL_SERVER, MYSQL_USER, MYSQL_PASS, MYSQL_DBNAME);
$con =  @new mysqli(MYSQL_SERVER, MYSQL_USER, MYSQL_PASS, MYSQL_DBNAME) or die("GAGAL TERKONEKSI");

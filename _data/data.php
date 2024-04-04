<?php
require 'database.php';
$rowdata = $_GET['start'];
$value = $_GET['search']['value'];
$order = $_GET['order'][0]['column'];
$limit = $_GET['order'][0]['dir'];
$start = $_GET['start'];
$length = $_GET['length'];

// echo $value;

$tablemap  = [  
  0 => "id",
  1 => "username",
  2 => "email",
  3 => "age",
  4 => "gender"
];
$condition = "";
if (!empty($value)) {
  foreach($tablemap as $key => $val){
    // echo $tablemap[$key]."<br>";
    if ($tablemap[$key] == 'id') {
      $condition .= "WHERE ".$val." LIKE '%".$value."%'";
    } else {
      $condition .= " OR ".$val." LIKE '%".$value."%'";
    }
    
  }
}




$sqlcount = "SELECT COUNT(id) AS total FROM users ";
$sqldata = "SELECT * FROM users ";
$sqlcount = $sqlcount.$condition;
$sqldata = $sqldata.$condition;

$sqldata .= " ORDER BY ".$tablemap[$order]." ".$limit." LIMIT ".$start.",".$length."";
// echo $sqldata;
// echo $sqlcount;
 $mysqlcount = mysqli_query($connection,$sqlcount);
 $datacont = mysqli_fetch_array($mysqlcount);
//  echo $datacont['total'];
// $getData = "SELECT * FROM users ";
$sql = mysqli_query($connection,$sqldata);
$response         = array();

while ($rowdata = mysqli_fetch_array($sql)) {

  $response[] = $rowdata;
}
$json_data = [
  'draw' => intval($_GET['draw']),
   'recordsTotal' => $datacont['total'],
   'recordsFiltered' => $datacont['total'],
    'aaData' => $response,
    'query' => $sqldata
];

echo json_encode($json_data);


?>
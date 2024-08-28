<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "airtime";
  
  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $dbname);
  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }
  
  $res = mysqli_query($conn, "SELECT * FROM `airtime` WHERE id = 1");
  while ($row = mysqli_fetch_array($res)) {
    echo $row['airtimez'];
  }

  $res2 = mysqli_query($conn, "DELETE FROM `airtime` WHERE id = 1");

  $updateQuery = "SET @new_id := 0;
                 UPDATE `airtime` SET id = (@new_id := @new_id + 1);
                 ALTER TABLE `airtime` AUTO_INCREMENT = 1;";
  $res3 = mysqli_multi_query($conn, $updateQuery);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EmmaBoy</title>
</head>
<body>
    
<script>
    alert("Do not Refresh the Page");
</script>
</body>
</html>

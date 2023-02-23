<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$data = "$name, $email, $message\n"; // create a string with the data

	$file = fopen('data.txt', 'a'); // open the file for appending
	fwrite($file, $data); // write the data to the file
	fclose($file); // close the file

	echo "Data saved to file!";
?>
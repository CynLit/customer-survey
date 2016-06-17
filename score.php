<?php
	//MS SQL Server DB credentials
	$hostname = "AIZAT-HP-WIN.local\SQLEXPRESS";
    $dbname = "customer-score";
    $username = "sa";
    $pw = "imovin";
    $tablename = "LOGS";

	if (!isset($_POST['rating']) || !isset($_POST['store'])) {
		exit;
	}
	
	$store = (int)$_POST['store'];
	$rating = (int)$_POST['rating'];
    
	mssql_connect($hostname, $username, $pw);
	mssql_select_db($dbname);
	mssql_query("IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = '$tablename' AND xtype = 'U') CREATE TABLE $tablename (id INT NOT NULL IDENTITY(1, 1) PRiMARY KEY, date_time VARCHAR(200), log INT, store_location VARCHAR(50))");
	mssql_query("INSERT INTO LOGS (date_time, log, store_location) VALUES (SYSDATETIME(), $rating, $store)");
	
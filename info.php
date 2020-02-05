<?php
	require_once('db_manager.php');
	
	if (isset($_GET["vote"])) {
		$character_name =$_GET["vote"]; 
		vote_cutie($character_name);
		get_votes();
	}
	if (isset($_GET["refresh"])) {
		get_votes();
	}
?>
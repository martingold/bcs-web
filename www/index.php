<?php

	$query = basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

	if($query == ""){
		$query = "index";
	}

	$layout = file_get_contents("template.html");

	if(file_exists('templates/'.$query.'.html')){
		$template = file_get_contents('templates/'.$query.'.html');
	}else{
		$template = file_get_contents('templates/404.html');
	}

	$layout = str_replace("{template}", $template, $layout);

	echo $layout;


?>
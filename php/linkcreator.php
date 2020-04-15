<?php 

require 'sa-functions.php';

$anzahl = $_POST['anzahl']; 
$bezeichnung = $_POST['bezeichnung']; 


$links = generate_links($anzahl, $bezeichnung);
$filename = "../tmp/" . $bezeichnung . ".html";
$ip = $_SERVER["SERVER_ADDR"];
$link = $_SERVER['HTTP_REFERER'] . "tmp/" . $bezeichnung . ".html";


// Datei schreiben, die die einzelnen Links für die PCs enthält
$handle = fopen($filename, 'w');
fwrite($handle, $links);
fclose($handle);


// Link zu der Datei uch auf aktueller Seite ausgeben
echo "Rufen Sie nun an den einzelnen PCs folgende Seite auf: <a href=" . $link . ">". $link . "</a>";

?>
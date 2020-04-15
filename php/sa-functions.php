<?php

function generate_links($anzahl, $url) {
	$animation_file = "../html/animation.html";
	$offset = $anzahl*2;   //Offset für gemeinsamen Start
	$links='';
	for ($i = 1; $i <= $anzahl; $i++) {
		$links = $links.'<a href="'.$animation_file.'?/offset='.$offset.'&delay='.($i*2).'">Link fuer den PC Nr. '.$i.'</a><br>';
	}
	return $links;

}

?>
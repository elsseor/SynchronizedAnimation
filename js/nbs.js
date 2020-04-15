/*  
 * 	Zeitsynchronisation
 *	über dieses Javascript soll der einzelne Client seine Zeit mit dem Server synchronisieren
 *  funktioniert erst grundsätzlich, es kommt zu einzelnen Ausreisern
 * 	diese sollten über mehrere Synchronisationsaktionen eliminiert werden
 */ 


function myTime() {
	var delay = getURLParameter('delay');    //Delayzeit für die individuelle Animation
	var offset = getURLParameter('offset');  //OffsetZeit für einen gemeinsamen Start
	
	//var xTime = new Date().getTime()/ 1000 | 0;
	var xTime = new Date().getTime() + serverOffset;
	xTime = xTime /1000 |0;
	document.getElementById("displayTime").innerText = xTime;
	document.getElementById("displayTime").textContent = xTime;

	var elementVisual = false;

	var element = document.getElementById('circle');
	if ((xTime-delay)%offset == 0){
		element.classList.add('animation');
		elementVisual = true;
	}

	if (xTime%2 == 0 && elementVisual == false){
		element.classList.remove('animation');
	}
}


function getURLParameter(name) {
  var value = decodeURIComponent((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, ""])[1]);
  return (value !== 'null') ? value : false;
}



function srvTime() {
	var xmlHttp;
	try {
		//FF, Opera, Safari, Chrome
		xmlHttp = new XMLHttpRequest();
	} catch (err1) {
		//IE
		try {
			xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
		} catch (err2) {
			try {
				xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
			} catch (eerr3) {
				//AJAX not supported, use CPU time.
				alert("AJAX not supported");
			}
		}
	}
	xmlHttp.open('HEAD', window.location.href.toString(), false);
	xmlHttp.setRequestHeader("Content-Type", "text/html");
	xmlHttp.send('');
	return xmlHttp.getResponseHeader("Date");
}





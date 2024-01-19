var csInterface = new CSInterface();

var clearButtonElm = document.getElementById("executeBtn");
clearButtonElm.addEventListener("click", executeCallback);

function executeCallback(){

	var hostCall = "saveAsPSDWithDialog();";
	csInterface.evalScript(hostCall,function(output){

		alert(output);

	});

}


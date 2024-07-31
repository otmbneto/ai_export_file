/*#############################################################################
#                                                                  _    _     #
#  index.jsx                                                      , `._) '>   #
#                                                                 '//,,,  |   #
#                                                                     )_/     #
#    by: ~Ottoni Bastos             '||                     ||`       /_|     #
#    e-mail: otmbneto@protonmail.com ||      ''             ||                #
#                                    ||''|,  ||  '||''| .|''||  .|''|,        #
#    created: 18/01/2024             ||  ||  ||   ||    ||  ||  ||  ||        #
#    modified: 18/01/2024           .||..|' .||. .||.   `|..||. `|..|'        #
#                                                                             #
#############################################################################*/

// Function to save the current document as PSD with a destination folder dialog
function saveAsPSDWithDialog() {
	// Check if there is an active document
	if (app.activeDocument) {
	  var originalDoc = app.activeDocument;
	  
	  // Prompt user for the destination folder
	  var destFolder = Folder.selectDialog("Select a destination folder");
	  
	  if (destFolder) {
		var docName = originalDoc.name.replace(/\.[^\.]+$/, ''); // Remove extension
  
        // Create the export options
        var exportOptions = new ExportOptionsPhotoshop();
        exportOptions.alphaChannels = true;
        exportOptions.layers = true;
        exportOptions.writeLayers = true;
        exportOptions.annotations = true;
        exportOptions.spotColors = true;
        exportOptions.saveMultipleArtboards = true;		
        exportOptions.imageCompression = true;
        exportOptions.maximizeCompatibility = true;
  
		// Save the document as PSD to the chosen folder
		var psdFile = new File(destFolder + "/" + docName + ".psd");
        
		originalDoc.exportFile(psdFile, ExportType.PHOTOSHOP, exportOptions);
		alert("File saved as PSD: " + psdFile.fsName);
	  } else {
		alert("No destination folder selected.");
	  }
	} else {
	  alert("No active document found.");
	}
  }
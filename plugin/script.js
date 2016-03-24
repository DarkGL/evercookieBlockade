function loadFunction(){
	var allScripts = document.getElementsByTagName( 'script' );
	
	for( var currentPosition = 0; currentPosition < allScripts.length; currentPosition++ ) {
		if( allScripts[currentPosition].src.indexOf( 'evercookie' ) > -1 ){
			allScripts[currentPosition].parentNode.removeChild(allScripts[currentPosition]);
		}
	}
	
	var swfObject = document.getElementById( 'swfcontainer' );
	
	if( swfObject ){
		swfObject.parentNode.removeChild(swfObject);
	}
	
	window.Evercookie = function( options ){
		
	}
}

if(window.attachEvent) {
    window.attachEvent('onload', loadFunction);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function() {
            curronload();
            loadFunction();
        };
        window.onload = newonload;
    } else {
        window.onload = loadFunction;
    }
}

function Evercookie(options) {
}
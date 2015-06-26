function loadFunction(){
	var allScripts = document.getElementsByTagName( 'script' );
	
	for( currentPosition = 0; currentPosition < allScripts.length; currentPosition++ ) {
		if( allScripts[currentPosition].src.indexOf( "evercookie" ) > -1 ){
			console.log( allScripts[currentPosition].src )
			allScripts[currentPosition].parentNode.removeChild(allScripts[currentPosition]);
		}
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
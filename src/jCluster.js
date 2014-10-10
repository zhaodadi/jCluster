(function( $ ) {
	"use strict";
	
    $.fn.jCluster = function( action ) {
		this.children("div").css({'border'		:	'2px solid',
								  'width'		:	'100px',
								  'height'		: 	'100px',
								  'position'	:	'relative',
								  'float'		:	'left'
								 });
		
		return this;
    };
 
    // Private function for debugging.
    function log( obj , msg) {
        if ( window.console && window.console.log ) {
            window.console.log( obj + ":" + msg);
        }
    };
 
}( jQuery ));

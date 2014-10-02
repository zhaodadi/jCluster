(function( $ ) {
 
    $.fn.jCluster = function( action ) {
		this.children("div").css({'border'		:	'2px solid',
								  'width'		:	'100px',
								  'height'		: 	'100px',
								  'position'	:	'relative',
								  'float'		:	'left'
								 });
		
		return this;
    };
 
}( jQuery ));

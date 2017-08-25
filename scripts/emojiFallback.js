(function(){

IfDoesNotSupportEmoji(function(){

	// Add this new style
	var style = document.createElement("style");
	style.innerHTML = ''+
	'#emoji_warning {'+
		'display: block;'+
	'}';
	document.body.appendChild(style);

});

})();

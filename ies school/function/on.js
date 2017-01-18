$(document).ready(function(){
	$('p').on({
			mouseenter: function(){
				$(this).css("background-color", "yellow");
			},

			mouseleave: function(){
				$(this).css("background-color", "lightgreen");
			},

			click: function(){
				$(this).css("background-color", "orange");
			}
		});
});
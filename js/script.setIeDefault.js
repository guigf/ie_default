$(document).ready(function() {
	var tempo = 2000;
	
	dialogo();

	function dialogo(){

		tempo += escrever($('#titleHeader'),"OH MY GOD I CAN'T BELIEVE THIS THANK YOU VERY MUCH",tempo) + 1000;

		tempo += escrever($('#titleHeader'),"I mean...",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"Congratualtions!",tempo) + 3000;

		tempo += escrever($('#titleHeader'),"Now I'm going to set everything up for you ^^",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"Just wait a minute...",tempo) + 10000;

		tempo += escrever($('#titleHeader'),"A few more time...",tempo) + 6000;

		tempo += escrever($('#titleHeader'),"Relax, I've got this",tempo) + 4000;

		tempo += escrever($('#titleHeader'),"Aahn...",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"Well...",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"This is a little embarasing...",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"I don't know how to say this...",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"I've never got this far...",tempo) + 2000;

		setTimeout(function(){
				$("#imgIe").fadeOut(400, function() {
		            $("#imgIe").attr('src','../img/sad_ie.png');
		        }).fadeIn(400);
			}, tempo);

		tempo += escrever($('#titleHeader'),"And I kind don't know how to proceed",tempo) + 2000;

		setTimeout(function(){
			$("#imgIe").fadeOut(400, function() {
				$("#imgIe").attr('src','../img/immersiveLogo.png');
			}).fadeIn(400);
		}, tempo);

		tempo += escrever($('#titleHeader'),"Aahn...",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"Oh well, fuck it off...",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"Just install chrome already and get the hell out of here ¬¬",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"What, do you want me to redirect you?",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"Really? .... You sick bastard ...",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"Well all right then... do you want chrome that badly? Here it goes...",tempo) + 3000;

		setTimeout(function(){
			location.href = "https://www.google.com/chrome/browser/desktop/index.html";
		},tempo);
	};
});
$(document).ready(function() {
	var tempo = 2000;
	
	dialogo();

	function dialogo(){

		tempo += escrever($('#titleHeader'),"If you are reading this...",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"Then you are a cheater (:",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"You are not suposed to be here yet",tempo) + 2000;

		tempo += escrever($('#titleHeader'),"So get the hell out",tempo) + 2000;

		setTimeout(function(){
			location.href = "../index.html";
		},2000);
	};
});

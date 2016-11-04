$(document).ready(function() {
	var $btnOk = $('#changeDefaultButton');
	var $btnNo = $('#noThanksButton');

	var posIniBtnOk = $btnOk.offset();
	var posIniBtnNo = $btnNo.offset();

	var botaoSimSeguir = false;

	var prevPosX = null;
	var prevPosY = null;

	var ativaDialogo = true;
	var ativaDialogo2 = false;

	var tempo = 8000;
	
	$btnOk.on('mouseenter',function(){
		botaoSimSeguir = true;
	});

	$btnNo.on('mouseover',function(mouse){
		moveBotaoNao(mouse);
		/*
		if(posX < prevPosX){
		$('#btnNao').offset({top: posBtnY, left: posBtnX -20});
		} else if(posX > prevPosX){
		$('#btnNao').offset({top: posBtnY, left: posBtnX +20});
		}

		posBtnX = $('#btnNao').offset().left;
		posBtnY = $('#btnNao').offset().top;

		if(posY < prevPosY){
		$('#btnNao').offset({top: posBtnY -20, left: posBtnX});
		} else if(posY > prevPosY){
			$('#btnNao').offset({top: posBtnY +20, left: posBtnX});}*/
		});

	function moveBotaoNao(mouse){
		//var $btnNao = $('#btnNao');
		var velocidade = 25;
		var x = 0;
		var y = 0;

		var posX = mouse.pageX;
		var posY = mouse.pageY;

		var posBtnX = $btnNo.offset().left;
		var posBtnY = $btnNo.offset().top;

		x = posX < prevPosX ? velocidade * -1 : velocidade;
		y = posY < prevPosY ? velocidade * -1 : velocidade;

		$btnNo.offset({top: posBtnY + y, left: posBtnX + x});

		dialogo();
		ativaDialogo = false;
	};

	$("html").mousemove(function(mouse){
		var mousex = mouse.pageX;
		var mousey = mouse.pageY;

		if(botaoSimSeguir){
			moveBotaoSim(mouse);
		};

		prevPosX = mousex;
		prevPosY = mousey;
	});

	function moveBotaoSim(mouse){
		//var $btnSim = $('#btnSim');

		var velocidade = 1;
		var x = 0;
		var y = 0;

		var posBtnX = $btnOk.offset().left;
		var posBtnY = $btnOk.offset().top;

		var distSimX = posBtnX - mouse.pageX + ($btnOk.width()/2);
		var distSimY = posBtnY - mouse.pageY + ($btnOk.height()/2);

		x = distSimX == 0 ? x : (distSimX < 0 ? velocidade : velocidade * -1);
		y = distSimY == 0 ? y : (distSimY < 0 ? velocidade : velocidade * -1);

		$btnOk.offset({top: posBtnY + y, left: posBtnX + x});

		dialogo();
		ativaDialogo = false;

		//$('#btnSim').offset({top: mousey - ($('#btnSim').height() / 2), left: mousex - ($('#btnSim').width() / 2)});
	};

	function dialogo(){
		if(ativaDialogo){
			setTimeout(function(){
				$("#imgIe").fadeOut(400, function() {
		            $("#imgIe").attr('src','img/ie_troll.jpg');
		        }).fadeIn(400);
			}, tempo);

			tempo += escrever($('#titleHeader'),"U mad?",tempo) + 2000;

			setTimeout(function(){
				ativaDialogo2 = true;
			},tempo);
			/*
			tempo += escrever($('#titleHeader'),"Thought it would be that easy?",tempo) + 2000;

			tempo += escrever($('#titleHeader'),"Now it's time for my little revenge...",tempo) + 2000;

			tempo += escrever($('#titleHeader'),"Do you know what does it fells like to be rejected over and over again?",tempo) + 2000;
			
			tempo += escrever($('#titleHeader'),'"IE only purpose is to install chrome, mimimimi"',tempo) + 2000;

			tempo += escrever($('#titleHeader'),"If you think this way, Wel...",tempo) + 2000;

			tempo += escrever($('#titleHeader'),"FUCK YOU THEN",tempo) + 2000;

			tempo += escrever($('#titleHeader'),"Do you want chrome? Here is some chrome for you...",tempo) + 2000;

			for(var i = 0;i < 50;i++){
				tempo += 500;
				setTimeout(function(){
					var width = Math.floor((Math.random() * $('body').width()) + 1);
					var height = Math.floor((Math.random() * $('body').height()) + 1);

					//$('<img></img>').attr('src','chrome.png').appendTo('body').offset({top: height, left: width}).height(50).width(50);
					$('<img></img>').attr('src','img/chrome.ai_.png').appendTo('body').offset({top: height, left: width}).height(50).width(50);
				},tempo);
			}
			*/
		}

		if(ativaDialogo2 && !ativaDialogo){
			tempo = 5000;

			tempo += escrever($('#titleHeader'),"Still trying?",tempo) + 2000;

			setTimeout(function(){
				$("#imgIe").fadeOut(400, function() {
		            $("#imgIe").attr('src','img/sad_ie.png');
		        }).fadeIn(400);
			}, tempo);

			tempo += escrever($('#titleHeader'),"Don't you really want me to be your default browser?",tempo) + 2000;

			tempo += escrever($('#titleHeader'),"All right then...",tempo) + 2000;

			tempo += escrever($('#titleHeader'),"I'm gonna redirect you to the chrome download page :(",tempo) + 4000;

			setTimeout(function(){
				location.href = "fases/fase1.html";
			},tempo);

			ativaDialogo2 = false;
		}
	};

	
	/*var tempo = escrever($('#lbltexto'),"Texto de teste.");
	setTimeout(function(){
		tempo = escrever($('#lbltexto'),"Testando o texto.");
		setTimeout(function(){
			tempo = escrever($('#lbltexto'),"Testando o texto do teste do texto.");
			setTimeout(function(){
				tempo = escrever($('#lbltexto'),"Teste.");
			}, tempo + 2000);
		}, tempo + 2000);
	}, tempo + 2000);*/
});
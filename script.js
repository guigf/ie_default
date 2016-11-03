$(document).ready(function() {
	var $btnOk = $('#changeDefaultButton');
	var $btnNo = $('#noThanksButton');

	var botaoSimSeguir = false;

	var prevPosX = null;
	var prevPosY = null;

	var ativaDialogo = true;

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
			var tempo = 0;

			setTimeout(function(){
				tempo = escrever($('#titleHeader'),"U mad?");

				$("#imgIe").fadeOut(400, function() {
		            $("#imgIe").attr('src','ie_troll.jpg');
		        }).fadeIn(400);

				//$("#imgIe").attr("src","ie_troll.jpg");
			}, tempo + 8000);
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

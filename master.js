function escrever(elemento,texto,timer){
	var tam = texto.length;
	var tempoTotal = 1000 + (tam*100);

	setTimeout(function(){
		$(elemento).text("");
		for(var i = 0;i < tam; i++){
			setTempoEscrita(elemento,texto[i],i*100);
		}
	},timer);

	return tempoTotal;
};

function setTempoEscrita(elemento,letra,tempo){
	setTimeout(function(){
		$(elemento).text($(elemento).text() + letra);
	}, 1000 + tempo);
};

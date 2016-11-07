var direccion = 'right', velocidad = 100, ticker = null, comida = [], puntos = 0, tamanio = 35;
var casillaSerp = [
	[ 10, 14 ],
	[ 10, 13 ],
	[ 10, 12 ],
	[ 10, 11 ],
	[ 10, 10 ],
	[ 10, 9 ],
	[ 10, 8 ],
	[ 10, 7 ]
];
var cabezaSerp = [ 10, 14 ];

//crear serpiente
function dibujarSerp (){
	$('td').removeClass('casillaSerp cabezaSerp');

	for (var casilla in casillaSerp ){
		$('tr').eq( casillaSerp[casilla][0] ).find('td').eq(casillaSerp[casilla][1]).addClass('casillaSerp');
	}

	$('tr').eq( cabezaSerp[0] ).find('td').eq(cabezaSerp[1]).addClass('cabezaSerp');
}

//función de comer la comida
function comerComida() {
	comida = [ getRandomNumber( $( 'tr' ).length ), getRandomNumber( $( 'tr:eq(0)>td' ).length ) ];
}

//final juego
function fin() {
	$('div.fin').show('fast', function() {
		$( this ).animate({top:250}, 'slow');
	});

	clearInterval( ticker );
}

//actualizar tamaño serpiente
function updateCasillasSerp(){
	var nuevaCabezaSerp = [];
	switch(direccion){
		case 'right':
			nuevaCabezaSerp = [ cabezaSerp[0], cabezaSerp[1]+1 ];
			break;
		case 'left':
			nuevaCabezaSerp = [ cabezaSerp[0], cabezaSerp[1]-1 ];
			break;
		case 'up':
			nuevaCabezaSerp = [ cabezaSerp[0]-1, cabezaSerp[1] ];
			break;
		case 'down':
			nuevaCabezaSerp = [ cabezaSerp[0]+1, cabezaSerp[1] ];
			break;
	}
	var nuevaCasilla = {length:0}
	if( nuevaCabezaSerp[0] < 0 || nuevaCabezaSerp[1] < 0 ) {
		fin();
		return;
	} else if( nuevaCabezaSerp[0] >= tamanio || nuevaCabezaSerp[1] >= tamanio ) {
		fin();
		return;
	}
	var nuevaCasilla = $('tr').eq( nuevaCabezaSerp[0] ).find('td').eq(nuevaCabezaSerp[1]);
	if( nuevaCasilla.length == 0 ) {
		fin();
	} else {
		if ( nuevaCasilla.hasClass('casillaSerp') ) {
			fin();
		} else {
			if( nuevaCasilla.hasClass( 'comida' ) ) {
				casillaSerp.push( [] );
				comerComida();
				dibujarComida();
				puntos += 100;
				$( '#tablaPuntos' ).html( 'Puntos : ' + puntos );
				velocidad = velocidad - 10 > 5 ? velocidad - 10 : velocidad;
				clearInterval( ticker );
				empezarJuego();
			}
			for( var i = ( casillaSerp.length - 1 ); i > 0 ; i-- ) {
				casillaSerp[ i ] = casillaSerp[ i - 1 ];
			}
			casillaSerp[ 0 ] = cabezaSerp = nuevaCabezaSerp;
			dibujarSerp();
		}
	}
}

function getRandomNumber( limit ) {
	return parseInt( Math.random() * limit % limit );
}

function obtenerNuevaDirecc( keyCode ) {
	var codigos = {
		37 : 'left',
		38 : 'up',
		39 : 'right',
		40 : 'down'
	};

	if( typeof codigos[ keyCode ] != 'undefined' ) {
		var nuevaDirecc = codigos[ keyCode ], cambiarDirecc = true;
		switch( direccion ) {
			case 'up' :
				cambiarDirecc = nuevaDirecc != 'down';
				break;
			case 'down' :
				cambiarDirecc = nuevaDirecc != 'up';
				break;
			case 'right' :
				cambiarDirecc = nuevaDirecc != 'left';
				break;
			case 'left' :
				cambiarDirecc = nuevaDirecc != 'right';
				break;
		}
		direccion = cambiarDirecc ? nuevaDirecc : direccion;
	}
}

function dibujarTablero() {
	var filasHtml = '';
	for( var i = 0; i < tamanio; i++ ) {
		filasHtml +='<td cellpadding="0" cellspacing="0"></td>'
	}
	html = [];
	for( var i = 0; i < tamanio; i++ ) {
		html.push( '<tr cellpadding="0" cellspacing="0">' + filasHtml + '</tr>' );
	}
	$( document.body ).append( '<table>' + html.join( '\n' ) + '</table>' );
	comerComida();
}

function dibujarComida() {
	$( 'td' ).removeClass( 'comida' );
	$('tr').eq( comida[0] ).find('td').eq(comida[1]).addClass( 'comida' );
}

function empezarJuego() {
	ticker = setInterval( updateCasillasSerp, velocidad );
}

$( document ).ready(function(){
	dibujarTablero();
	dibujarComida();
	$( document ).bind('keydown', function( e ) {
		obtenerNuevaDirecc( e.keyCode );
	});
	empezarJuego();
});
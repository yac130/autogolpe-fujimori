$(document).ready(function(){

// play video fujimori
$('.video-fujimori').click(function() {
	$('.main-popup').fadeIn('slow');
	$('#videoFujimori').fadeIn('slow');
});

$('.video-fujimori').on('click', function(ev) {
    $("#videoFujimori")[0].src += "&autoplay=1";
    ev.preventDefault();
});

// cerrar video fujimori
$('#btn-cerrar').on('click', function() {
	$('.main-popup').fadeOut('slow');
	$('#videoFujimori').fadeOut('slow');
    //$('#videoFujimori').stopVideo();
	$('#videoFujimori')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
});

// play video cateriano
$('.entrevista-1').click(function() {
	$('.main-popup').fadeIn('slow');
	$('#videoCateriano').fadeIn('slow');
});

$('.entrevista-1').on('click', function(ev) {
    $("#videoCateriano")[0].src += "&autoplay=1";
    ev.preventDefault();
});

// cerrar video cateriano
$('#btn-cerrar').on('click', function() {
	$('.main-popup').fadeOut('slow');
	$('#videoCateriano').fadeOut('slow');
    //$('#videoFujimori').stopVideo();
	$('#videoCateriano')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
});

// play video maximo
$('.entrevista-2').click(function() {
	$('.main-popup').fadeIn('slow');
	$('#videoMaximo').fadeIn('slow');
});

$('.entrevista-2').on('click', function(ev) {
    $("#videoMaximo")[0].src += "&autoplay=1";
    ev.preventDefault();
});

// cerrar video maximo
$('#btn-cerrar').on('click', function() {
	$('.main-popup').fadeOut('slow');
	$('#videoMaximo').fadeOut('slow');
    //$('#videoFujimori').stopVideo();
	$('#videoMaximo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
});

// play video martha
$('.entrevista-3').click(function() {
	$('.main-popup').fadeIn('slow');
	$('#videoMartha').fadeIn('slow');
});

$('.entrevista-3').on('click', function(ev) {
    $("#videoMartha")[0].src += "&autoplay=1";
    ev.preventDefault();
});

// cerrar video martha
$('#btn-cerrar').on('click', function() {
	$('.main-popup').fadeOut('slow');
	$('#videoMartha').fadeOut('slow');
    //$('#videoFujimori').stopVideo();
	$('#videoMartha')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
});

// play video epilogo
$('.video-epilogo').click(function() {
	$('.main-popup').fadeIn('slow');
	$('#videoEpilogo').fadeIn('slow');
});

$('.video-epilogo').on('click', function(ev) {
    $("#videoEpilogo")[0].src += "&autoplay=1";
    ev.preventDefault();
});

// cerrar video epilogo
$('#btn-cerrar').on('click', function() {
	$('.main-popup').fadeOut('slow');
	$('#videoEpilogo').fadeOut('slow');
    //$('#videoFujimori').stopVideo();
	$('#videoEpilogo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
});



});


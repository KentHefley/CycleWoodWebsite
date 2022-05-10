// JavaScript Document

document.querySelector(".hamburger").addEventListener('click', function(e){
	e.preventDefault();
	document.querySelector('.navigation').classList.toggle('open');

});
$(document).ready(function(){		

	$('#addGreen').on('click', function(){
		$('.testBox').addClass('greenBg')
	})

	$('#removeGreen').on('click', function(){
		$('.testBox').removeClass('greenBg')
	})

	$('#toggleGreen').on('click', function(){
		$('.testBox').toggleClass('greenBg')
	})

	$('#customCSS').on('click', function(){
		$('.testBox').css('border', '10px solid #ab321a')		//изменяем напрямую css свойства элемента. Первый аргумент - название свойства, второй аргумент - значение свойства. В кавычках
	})



})
$(document).ready(function(){		

//.animate() - основной  метод для изменения CSS свойств с анимацией
//.animate({CSS props}, duration in ms)

	//***Width
	$('#customWidth').on('click', function(){
		$('#testBox').animate({'width': '200px'}, 3000)
	});

	$('#customOpacity').on('click', function(){
		$('#testBox').animate({'opacity': '0'}, 2500)
	});


	//***Hide and Show

	$('#hide').on('click', function(){
		$('#testBox').hide(2000)
	});

	$('#show').on('click', function(){
		$('#testBox').show(2000)
	});

	$('#hideAndShow').on('click', function(){
		$('#testBox').hide(1000).delay(1000).show(1000)		//после клика скрывается за секунду, ждём секунду (.delay() - задержка) и показываем через секунду
	});

	//***Fade - fading out and fading in
	$('#fadeOut').on('click', function(){
		$('#testBox').fadeOut(2000)		// скрывает элемент. Работает с opacity элемента 
	});

	$('#fadeIn').on('click', function(){
		$('#testBox').fadeIn(2000)		// показывает элемент. Работает с opacity элемента 
	});

	$('#fadeToggle').on('click', function(){
		$('#testBox').fadeToggle(2000)		// показывает\скрывает элемент. Работает с opacity элемента. Так же, как и .toggleClass()
	});

	//***Slide - just another animation effect

	$('#slideUp').on('click', function(){
		$('#testBox').slideUp(2000)		// скрывает элемент вверх
	});

	$('#slideDown').on('click', function(){
		$('#testBox').slideDown(2000)		// показывает элемент вниз. 
	});

	$('#slideToggle').on('click', function(){
		$('#testBox').slideToggle(2000)		// переключает элемент. 
	});
});
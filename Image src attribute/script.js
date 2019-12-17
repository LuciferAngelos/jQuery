$(document).ready(function(){		


	//1. получим значение атрибута src у картинки

	let srcValue = $('#imageHolder img').attr('src')		//ищем сначала родителя, а в родителе ищем картинку img и получаем атрибут src у картинки

	//2. Меняем значение атрибута src у картинки

	$('#imageHolder img').on('click', function(){
		$(this).attr('src', 'images/blue.jpg')		//когда передаётся второй параметр, передаётся значение, на которое нужно поменять
	})

	// //3. Отдельное действие для каждого цвета. Бред

	// $('#colorsSelector .colorBlue').on('click', function(){
	// 	$('#imageHolder img').attr('src', 'images/blue.jpg')
	// })

	// $('#colorsSelector .colorWhite').on('click', function(){
	// 	$('#imageHolder img').attr('src', 'images/white.jpg')
	// })

	//4.Общее действие для всех

	$('#colorsSelector .colorItem').on('click', function(){
		let imgPath = $(this).attr('data-img-path')		//в данном случае контекст this принимает именно тот контекст, который мы получаем при клике по кружочку

		$('#imageHolder img').fadeOut(250, function(){
			$('#imageHolder img').attr('src', imgPath).fadeIn(250)
		})
		
	})

	//5. Анимация




});
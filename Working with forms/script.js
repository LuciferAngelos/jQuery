$(document).ready(function(){		


	$('#forSum').on('submit', function(e){		//данное событие будет срабатывать при клике на кнопку Сумма. Т.к., у этой формы тип submit, то она выступает сабмитом для всей формы и по этому мы выбираем не кнопку в селекторе, а саму форму и при клике на кнопку срабатывает форма
		e.preventDefault();

		let numberOne,
			numberTwo,
			sum;

		numberOne = +$('#numberOne').val();
		numberTwo = +$('#numberTwo').val();

		if(isNaN(numberOne)){		//проверяем, заполнена ли строка инпута. Если строка пустая\не число, то присваиваем значению 0
			numberOne = 0;
		}

		if(isNaN(numberTwo)){		//проверяем, заполнена ли строка инпута. Если строка пустая\не число, то присваиваем значению 0
			numberTwo = 0;
		}

		sum = numberOne + numberTwo;

		$('#sumResult').text(sum)

	})




});
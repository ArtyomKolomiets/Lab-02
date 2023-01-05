document.querySelector('button').onclick = () => {
	let text = document.querySelector('#one');
	let result = document.querySelector('.result')
    console.log(text.value);
   if((text.value) != 'Коза'){
    result.innerText = 'На жаль, ви не праві, спробуйте ще раз :('
   	console.log('WROOOONG!!!');
   	
   }
   else if ((text.value) = 'Коза'){

    console.log('RIGHT!!!')
   result.innerText = 'Вірно, ви праві!🤘';
   }
}

// Переменные для первого поп-апа
const openPopUp = document.getElementById('open_pop_add');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
// Переменные для второго поп-апа
const openPopUpMin = document.getElementById('open_pop_min');
const closePopUpMin = document.getElementById('pop_up_close_min');
const popUpMin = document.getElementById('pop_up_min');
// Переменные для третьего поп-апа
const openPopUpTran = document.getElementById('open_pop_tran');
const closePopUpTran = document.getElementById('pop_up_close_tran');
const popUpTran = document.getElementById('pop_up_tran');

// Открытие и закрытие первого поп-апа
openPopUp.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.add('active');
})

closePopUp.addEventListener('click', () =>{
	popUp.classList.remove('active');
})

// Открытие и закрытие второго поп-апа
openPopUpMin.addEventListener('click', function(e){
	e.preventDefault();
	popUpMin.classList.add('active');
})

closePopUpMin.addEventListener('click', () =>{
	popUpMin.classList.remove('active');
})

// Открытие и закрытие третьего поп-апа
openPopUpTran.addEventListener('click', function(e){
	e.preventDefault();
	popUpTran.classList.add('active');
})
closePopUpTran.addEventListener('click', ()=>{
	popUpTran.classList.remove('active');
})
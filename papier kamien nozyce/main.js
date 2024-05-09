const kamien = document.querySelector('#kamien');
const papier = document.querySelector('#papier');
const nozyce = document.querySelector('#nozyce');
const start = document.querySelector('.start');
const Twybor = document.querySelector('.twojWybor');
const Cwybor = document.querySelector('.wyborKomputera');
const potyczki = document.querySelector('.potyczki');
const wygrane = document.querySelector('.wygrane');
const przegrane = document.querySelector('.przegrane');
const remis = document.querySelector('.remis');
const Wynik = document.querySelector('.Wynik');
const end_screen = document.querySelector('.wynikk');
const wrapper = document.querySelector('.wrapper');
const score = document.querySelector('.score');
const playA = document.querySelector('.playA');
let liczba_potyczek = 0;
let liczba_wygranych = 0;
let liczba_przegranych = 0;
let liczba_remisow = 0;
var global_user_pick = '';
function computerChoice() {
	choices = ['papier','kamien','nozyce'];
	ComputerIndex = Math.floor(Math.random()* choices.length)
	computer = choices[ComputerIndex]
	Cwybor.textContent = `wybór komputera: ${computer}`
	return computer
}
function game(userPick,computerPick) {
	if(liczba_wygranych == 10){
		end_screen.style.display='flex'
		wrapper.style.display='none'
		score.textContent ='Wygrales';

	}
	else if(liczba_przegranych == 10){
		end_screen.style.display='flex'
		wrapper.style.display='none'
		score.textContent ='Przegrales';
	}
	else if (userPick == computerPick) {
		liczba_potyczek++
		potyczki.textContent = `liczba potyczek:${liczba_potyczek}`
		liczba_remisow++;
		remis.textContent=`liczba remisów: ${liczba_remisow}`
		Wynik.textContent ="wynik: remis"
		console.log('remisy: ' +liczba_remisow)
	}
	else if(userPick == 'nozyce' && computerPick == 'papier'){
		liczba_potyczek++
		potyczki.textContent = `liczba potyczek:${liczba_potyczek}`
		liczba_wygranych++
		wygrane.textContent=`liczba wygranych:${liczba_wygranych}`
		Wynik.textContent ="wynik: wygrana"
		console.log('wygrane: ' +liczba_wygranych)
	}
	else if(userPick == 'kamien' && computerPick == 'nozyce'){
		liczba_potyczek++
		potyczki.textContent = `liczba potyczek:${liczba_potyczek}`
		liczba_wygranych++
		wygrane.textContent=`liczba wygranych:${liczba_wygranych}`
		Wynik.textContent ="wynik: wygrana"
		console.log('wygrane: ' +liczba_wygranych)
	}
	else if(userPick == 'papier' && computerPick == 'kamien'){
		liczba_potyczek++
		potyczki.textContent = `liczba potyczek:${liczba_potyczek}`
		liczba_wygranych++
		wygrane.textContent=`liczba wygranych:${liczba_wygranych}`
		Wynik.textContent ="wynik: wygrana"
		console.log('wygrane: ' +liczba_wygranych)
	}
	
	else{
		liczba_potyczek++
		potyczki.textContent = `liczba potyczek:${liczba_potyczek}`
		liczba_przegranych++
		przegrane.textContent = `Liczba przegranych:${liczba_przegranych}`
		Wynik.textContent ="wynik: przegrana"
		console.log('przegrane: ' + liczba_przegranych)
	}
}
playA.addEventListener('click',()=>{
	location.reload()
})
//===========WERSJA BEZ PRZYCISKU START==============//
kamien.addEventListener('click',()=>{
	kamien.classList.add("kamien-on")	
	kamien.classList.remove("off")
	papier.classList.add("off")
	nozyce.classList.add("off")
	Twybor.textContent = `twój wybór: ${kamien.id}`;
	computerChoice();
	game('kamien',computerChoice())
})
papier.addEventListener('click',()=>{
	papier.classList.add("papier-on")	
	papier.classList.remove("off")
	kamien.classList.add("off")
	nozyce.classList.add("off")
	Twybor.textContent = `twój wybór: ${papier.id}`;
	computerChoice();
	game('papier',computerChoice())
	
})
nozyce.addEventListener('click',()=>{
	nozyce.classList.add("nozyce-on")	
	nozyce.classList.remove("off")
	papier.classList.add("off")
	kamien.classList.add("off")
	Twybor.textContent = `twój wybór: ${nozyce.id}`;
	computerChoice();
	game('nozyce',computerChoice())
})
//===========WERSJA Z PRZYCISKIEM START(średnio działa)==============//
	// kamien.addEventListener('click',()=>{
	// 	kamien.classList.add("kamien-on")	
	// 	kamien.classList.remove("off")
	// 	papier.classList.remove("papier-on")
	// 	papier.classList.add("off")
	// 	nozyce.classList.remove("nozyce-on");
	// 	nozyce.classList.add("off")
	// 	Twybor.textContent = `twój wybór: ${kamien.id}`;
	// 	computerChoice();
	// 	start.addEventListener('click', () => {
	// 	if (kamien.classList.contains('kamien-on')) {
	// 		global_user_pick = 'kamien';
	// 		game(global_user_pick,computerChoice())
	// 	 }}
	// 	)
	// })
	// papier.addEventListener('click',()=>{
	// 	papier.classList.add("papier-on");
	// 	papier.classList.remove("off")
	// 	kamien.classList.remove("kamien-on");
	// 	kamien.classList.add("off");
	// 	nozyce.classList.remove("nozyce-on");
	// 	nozyce.classList.add("off");
	// 	Twybor.textContent = `twój wybór: ${papier.id}`;
	// 	computerChoice();
	// 	start.addEventListener('click', () => {
	// 	if (papier.classList.contains('papier-on')) {
	// 		global_user_pick = 'papier';
	// 		game(global_user_pick,computerChoice())
	// 	 }}
	// 	)
	// })
	// nozyce.addEventListener('click',()=>{
	// 	nozyce.classList.add("nozyce-on");
	// 	nozyce.classList.remove("off")
	// 	papier.classList.remove("papier-on")
	// 	papier.classList.add("off");
	// 	kamien.classList.remove("kamien-on");
	// 	kamien.classList.add("off");
	// 	Twybor.textContent = `twój wybór: ${nozyce.id}`;
	// 	computerChoice();
	// 	start.addEventListener('click', () => {
	// 	if (nozyce.classList.contains('nozyce-on')) {
	// 		global_user_pick = 'nozyce';
	// 		game(global_user_pick,computerChoice())
	// 	 }}
	// 	)
	// })
	
	





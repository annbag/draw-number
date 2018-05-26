const result = []; //tablica, w której przechwujemy wyniki
const draw = function() {
	if(result.length === 6) return; // jeśli osiągnie 6 wyników w talicy to dalje nie działa
	
	//Math.random --> zwraca liczby od 0 do 1
	//jeśli pomożymy przez 49 to mamy od 0 do 48.9999..., jeśli dodamy 1 do 49.9999..
	//Math floor --> usuwa to co poprzecinku czyli mamy liczby całkwite od 1 do 49
	const resultDraw = Math.floor(Math.random() * 49 + 1); 
	//pętla sprawdza czy taka liczba nie została już wylosowana tzn czy nie znajduzje się juz w tablicy result 
	for (let i  = 0; i < result.length; i++) {
	//instrukcja warunkowa--> sprawdza nowo wylosowana liczbę z tmi, któe są już w tablicy
		if (resultDraw === result[i] ) {			
			return draw() // jeśli wylosowana liczba jest juz w tablicy to kończymy tą funckcję (losowania) i jeszzce raz ją wykonujemy (ponowanie losujemy)
		}
	}
	//torzenie elementu div, który jest dodawany do index.html
	const div = document.createElement('div');
	//do stworzonego diva dodajemy, między znaczniki treść w postaci wylosowanej liczby (znajdującej się w zmiennej resultDraw)
	div.textContent = resultDraw;
	//dodawanie div do elementu body
	document.body.appendChild(div);
	//do tablicy result dodajemy to co wylosowaliśmy
	result.push(resultDraw) 
}

//pobranie przycisku do zmiennej, dzięki temu na nim pracujemy
const button = document.querySelector('button');
//nasłuchiwanie na zdarzenie kliknięcie, po kiknięciu ma się wywołać funkcja losowania po każdym kliknięciu
button.addEventListener('click', draw)


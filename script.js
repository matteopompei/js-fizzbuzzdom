let container = document.getElementById("container"); // Definisco la variabile container associandola al corrispettivo elemento HTML

for (let i = 1; i <= 100; i++) { // Genera numeri da 1 a 100
  
  if((i%3 == 0) && (i%5 == 0)){ // Stampa FizzBuzz se multiplo di 3 e 5
    console.log ("FizzBuzz");
    container.innerHTML += '<div class="box fizzbuzz">FizzBuzz</div>';
  } else if((i%3 == 0)) { // Stampa Fizz se multipplo di 3
    console.log ("Fizz");
    container.innerHTML += '<div class="box fizz">Fizz</div>';
  } else if ((i%5 == 0)) { // Stampa Buzz se multipplo di 5
    console.log ("Buzz");
    container.innerHTML += '<div class="box buzz">Buzz</div>';
  } else {
    console.log (i); // Scrive i numeri in console
    container.innerHTML += '<div class="box">' + i + '</div>';
}

}
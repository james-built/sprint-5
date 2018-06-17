//Looping a Triangle

function triangle(){
  let result = "";
  for (let i = 0; i < 7; i++){
    result += "#";
    console.log(result);
  }
}
triangle();

//FizzBuzz

function fizzBuzz(){

  for(let i = 0; i < 100; i++){
    let num = i + 1;
    if (num % 3 !== 0 && num % 5 !== 0){
      console.log(num);
    } else if (num % 3 !== 0 && num % 5 == 0){
      console.log("Buzz");
    } else if (num % 3 == 0 && num % 5 !== 0){
      console.log("Fizz");
    } else if (num % 3 == 0 && num % 5 == 0){
      console.log("FizzBuzz");
    }
  }
}
fizzBuzz();

//Chessboard

function chessBoard(){
  let gridsize = 8;

  for(let i = 0; i < gridsize; i++){
    let line = "";
    if((i + 1) % 2 !== 0){
      for(let j = 0; j < gridsize; j++){
        if((j + 1) % 2 !== 0){line += " ";}
        else{line += "#";}
      }
      console.log(line);
    } else {
      for(let j = 0; j < gridsize; j++){
        if((j + 1) % 2 == 0){line += " ";}
        else{line += "#";}
      }
      console.log(line);
    }
  }
}
chessBoard();
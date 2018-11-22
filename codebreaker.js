var realNumber = "5612";

 const guess = function(number) {
  let result = "";
  let real = (realNumber.split(""));
  let actual = number.split("");

  //Error más de 4 números
  if(number.length > 4){
    result = result + "Debes escribir solo 4 números";
    return result;
  }else if(number.length < 4){
    result = result + "Debes escribir 4 números"
    return result;
  }

  for (var i=0; i<realNumber.length; i++){
    for (var y=0; y<number.length; y++){
      if(realNumber[i] === number[y]){
        if(i == y){
          result = result + "x";
        }else{
        result = result + "o";
        }
      }
    }
  }
  return result;
 /*actual.forEach(element => {
  //Si element esta en real so add una o ó una x a result
 });*/

  
}

/*const setNumber = function (number1){
  realNumber = number1;
}*/

module.exports = guess;
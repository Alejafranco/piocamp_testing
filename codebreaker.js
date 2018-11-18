var realNumber = "5612";

 const guess = function(number1) {
  // TODO: Logic Here
  let result = "";

  let real = (realNumber.split(""));
  let actual = number1.split("");

  for (var i=0; i<realNumber.length; i++){
    for (var y=0; y<number1.length; y++){
      if(realNumber[i] === number1[y]){
        if(i == y){
          result = result + "x";
        }else{
        result = result + "o";
        }
      }
    }
  }

 /*actual.forEach(element => {
  //Si element esta en real so add una o ó una x a result
 });*/

  return result;
}

/*const setNumber = function (number1){
  realNumber = number1;
}*/

module.exports = guess;
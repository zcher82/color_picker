var z = randomNumber();
var color = "";

console.log(z);

equateNumToColor();

console.log(color);

function equateNumToColor () {
    switch (z) {
      case 1:
        color = "RED";
        break;
      case 2:
        color = "BLUE";
        break;
      case 3:
        color = "GREEN";
        break;
      case 4:
        color = "YELLOW";
        break;
      case 5:
        color = "PURPLE";
        break;
      case 6:
        color = "ORANGE";
    }

}

function randomNumber(){
  return Math.floor(Math.random() * (1 + 6 - 1) + 1);
}

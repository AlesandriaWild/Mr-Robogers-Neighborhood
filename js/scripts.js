function mrRobo(input) {
  let inputVal = []
  const inputNumber = parseInt(input);
    for(let i = 0; i <= inputNumber; i+=1) {
        inputVal.push(i.toString());
    }
    return inputVal;
  }

function mrRoboNeigh(inputVal) {
  const newArray = inputVal.map((element) => {
    if (element.includes("3")) {
      return "Won't you be my neighbor?";
  } else if (element.includes("2")) {
      return "Boop";
  } else if (element.includes("1")) {
      return "Beep";
  } else {
    return element;
  }
});
  return newArray;
};

function mrRobogersNeighborhood(e) {
  e.preventDefault();
  const magicNumber = document.getElementById("input-number").value;
  const newVal = mrRoboNeigh(mrRobo(magicNumber));
  const magNumOutput = document.getElementById("magNum");
  magNumOutput.innerText = newVal;
  magNumOutput.removeAttribute("class");
}

window.addEventListener("load", function() {
  const form = document.getElementById("num-input");
  form.addEventListener("submit", mrRobogersNeighborhood)
});
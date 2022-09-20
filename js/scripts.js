function mrRobo(input) {
  let inputVal = []
  const inputNumber = parseInt(input);
    for(let i = 0; i <= inputNumber; i+=1) {
        inputVal.push(i.toString());
    }
    return inputVal;
  }

function mrRoboNeigh(inputVal) {
  let newVal;
  inputVal.forEach(function(Element){
    if (Element.includes("1")) {
      newVal.push("Bippity");
  } else if (Element.includes("2")) {
    newVal.push("Boopity!");
  } else if (Element.includes("3")) {
    newVal.push("Beep");
  } else  {
    newVal.push("Boo!");
  }
});
  return newVal;
};

function mrRobogersNeighborhood(e) {
  e.preventDefault();
  const magicNumber = document.getElementById("input-number").value;
  const newVal = mrRoboNeigh(createArray(magicNumber));
  const magNumOutput = document.getElementById("magNum");
  magNumOutput.innerText = newVal;
  magNumOutput.removeAttribute("class");
}

window.addEventListener("load", function() {
  const form = document.getElementById("num-input");
  form.addEventListener("submit", mrRobogersNeighborhood)
});
function mrRobo(word) {
  let inputVal;
  let wordToArray = word.split('');
    for(let i = 0; i <=1; i+=1) {
      if(wordToArray[0] === beep[i]) {
        inputVal = word + "Beep!"
      }
    }
    let inputValToString = inputVal.toString();
    return inputValToString;
};

function mrRoboNeigh(word) {
  let inputVal;
  let wordToArray = word.split('');
    for(let i = 0; i <=1; i+=1) {
      if(wordToArray[0] === boop[i]) {
        inputVal = word + "Boop!"
      }
    }
    let inputValToString = inputVal.toString();
    return inputValToString;
};

function mrRobogersNeighborhood(word) {
  let inputVal;
  let wordToArray = word.split('');
    for(let i = 0; i <=1; i+=1); {
      if(wordToArray[0] === neighbor[i]) {
        inputVal = word + "Won't you be my neighbor?"
      }
    }
    let inputValToString = inputVal.toString();
    return inputValToString;
};
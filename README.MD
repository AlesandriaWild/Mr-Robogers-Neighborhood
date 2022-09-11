Describe: mrRobo
Test: "It should ask for an input from the user. Then replace any number with a one in it, with the word Beep!
Code:
function mrRobo(word) {
  let inputVal;
  let wordtoArray = word.split('');
    for(let i = 0; i <=1, i+=1); {
      if(wordtoArray[0] === beep[i]) {
        inputVal = word + "Beep!"
      }
    }
    let inputValToString = inputVal.toString();
    return inputValToString;
};
Expected Output: Beep!
Output: None, error in code.

Describe: mrRobo
Test: "It should ask for an input from the user. Then replace any number with a one in it, with the word Beep!
Code:
function mrRobo(word) {
  let inputVal;
  let wordtoArray = word.split('');
    for(let i = 0; i <=1, i+=1;) {
      if(wordtoArray[0] === beep[i]) {
        inputVal = word + "Beep!"
      }
    }
    let inputValToString = inputVal.toString();
    return inputValToString;
};
Expected Output: Beep!
Output: Beep!

Describe: mrRoboNeigh
Test: "It should ask for an input from the user. Then replace any number with a one in it, with the word Beep!
Code:
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
Expected Output: Boop!
Output: Boop!
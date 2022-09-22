# _Mr.Robogers Neighborhood_

#### By Alesandria Wild

## This webpage show cases loops and array's by asking a user to enter a number, and changing the output depending on the paramator's of the array.

## To access the working page please [click here](https://alesandriawild.github.io/Mr-Robogers-Neighborhood/)

## Technologies Used

* HTML
* CSS
* BootStrapCSS
* Dillinger.io
* VSCode
* GitHub Pages
* JavaScript
* MDN 

## Description

Mr.Roboger's neighborhood, welcomes users to the neighborhood. After welcoming the users, it asks for a number input from the user, then changes some of the numbers. 
* 1's become "Beep"
* 2's become "Boop"
* 3's become "Won't you be my neighbor?"

The page offers the user to restart the process if they wish by simply putting in a new number. Once the user puts in a new number and presses the button that says, "Press for MAGIC!" a new output will appear.

## Setup/Installation Requirements

For GitHub page direct link [click here](https://github.com/AlesandriaWild/Mr-Robogers-Neighborhood.git)

To access the code in a text editor:

* Open your terminal or your gitBash
* Choose where you would like the code, and enter the directory/ folder with the cd function.
* (Optional) if you aren't sure where to put it you can make a directory to put it in temporarily by typing in mkdir putting a space, and then putting what you wish to call it. EXM:"mkdir clone" then hit enter to create the directory. Once the directory is made, use the command "cd clone" and press enter.
* Once you are in the directory/ folder you wish to clone the webpage too, type on a new line. "git clone https://github.com/AlesandriaWild/Mr-Robogers-Neighborhood.git" and hit enter.
* Now type in "code ." and press enter again.
* Your text editior should now open so you can access the code.

## Tests: 

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

## Known Bugs

No known bugs at this current time.

## License
 MIT License
Copyright (c) _2022_ _Alesandria Wild_
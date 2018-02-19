

var winCount = 0;
var loseCount = 0;        
       
document.getElementById("pick_word").addEventListener("click", play);

function play() {


    
    var Animals= ["toucan", "coati", "sloth", "tarantula", "tamandua", "chinchilla", "jaguar"]
    var triesLeftCount = 9;
    var wordAnswer = [];
    var  Keylist = [];
    var LetterGuess = [];
 
    var triesLeft = document.getElementById("TriesLeft");
    triesLeft.innerHTML = 10;

    var rightAnswer = document.getElementById("rightanswer");
        rightAnswer.innerHTML = "";
  
    var winMessage = document.getElementById("winmessage");
      winMessage.innerHTML = "";

      
    //makes a random word.
    var RandomAnimal = Animals[Math.floor(Math.random() * Animals.length)];

    // Makes each letter _.
    for (var i = 0; i < RandomAnimal.length; i++) {
        wordAnswer[i] = "_";
    }
    //creates a variable and gets the element where the animal word will be put.
    var chosenword = document.getElementById ("RandomWord");
    chosenword.innerHTML = wordAnswer;
    var userLetter = document.getElementById("LettersChosen");
    userLetter.innerHTML = "";
  
    document.onkeyup = function(event) {
        
    if (( wordAnswer.indexOf('_') == -1) || (triesLeftCount === -1)) {
        return;
    }
    
    LetterGuess = event.key;
      Keylist.push(LetterGuess); 
      userLetter.innerHTML = Keylist;
      triesLeft.innerHTML = triesLeftCount--;

         for (var j = 0; j < RandomAnimal.length; j++) {
             
                
            if (RandomAnimal[j] === LetterGuess) {
                RandomAnimal[j] === LetterGuess;
                wordAnswer[j]= LetterGuess;
                chosenword.innerHTML = wordAnswer;  
            }
   
        } 

        if (triesLeftCount >= -1 && ( wordAnswer.indexOf('_') == -1)) {
            winCount++;
            var winCounted = document.getElementById("WinCount");
            winCounted.innerHTML = winCount;
            var winMessage = document.getElementById("winmessage");
            winMessage.innerHTML =  "YOU WIN";
            
       }
    
        if (( triesLeftCount === -1) && ( wordAnswer.indexOf('_') !== -1)) {
        loseCount++;
        console.log (loseCount);
       var loseCounted = document.getElementById("LoseCount");
       loseCounted.innerHTML = loseCount;
       var rightAnswer = document.getElementById("rightanswer");
       rightAnswer.innerHTML = "YOU LOST. THE WORD WAS: " + RandomAnimal;
       
        

       }
       
        
    } 
    
}
  

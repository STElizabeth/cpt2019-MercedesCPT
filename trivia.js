var percentage = 0
var score = 0
var i = 1
var ans = 1
var correctSound = new Audio('correct.wav');
var incorrectSound = new Audio('incorrect.wav');



function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();


if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("text").innerHTML="Correct"
        document.getElementById("optionc").style.color= "#20e66a";
        document.mainImage.src = "images/1-Correct.png"
        correctSound.play();
        score++

    }
    else if (yy=="A"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiona").style.color= "#de1544";
        document.getElementById("optionc").style.color= "#20e66a";
        document.mainImage.src = "images/1-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="B"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionc").style.color= "#20e66a";
        document.getElementById("optionb").style.color= "#de1544";
        document.mainImage.src = "images/1-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="D"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionc").style.color= "#20e66a";
        document.getElementById("optiond").style.color= "#de1544";
        document.mainImage.src = "images/1-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===2){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("text").innerHTML="Correct"
        document.getElementById("optiond").style.color= "#20e66a";
        document.mainImage.src = "images/2-Correct.png"
        correctSound.play();
         score++
    }
    else if (yy=="A"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiond").style.color= "#20e66a";
        document.getElementById("optiona").style.color= "#de1544";
        document.mainImage.src = "images/2-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="B"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiond").style.color= "#20e66a";
        document.getElementById("optionb").style.color= "#de1544";
        document.mainImage.src = "images/2-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="C"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiond").style.color= "#20e66a";
        document.getElementById("optionc").style.color= "#de1544";
        document.mainImage.src = "images/2-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}

else if (ans===3){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("text").innerHTML="Correct"
        document.getElementById("optionb").style.color= "#20e66a";
        document.mainImage.src = "images/3-Correct.png"
        correctSound.play();
         score++
    }
    else if (yy=="A"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionb").style.color= "#20e66a";
        document.getElementById("optiona").style.color= "#de1544";
        document.mainImage.src = "images/3-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="C"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionb").style.color= "#20e66a";
        document.getElementById("optionc").style.color= "#de1544";
        document.mainImage.src = "images/3-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="D"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionb").style.color= "#20e66a";
        document.getElementById("optiond").style.color= "#de1544";
        document.mainImage.src = "images/3-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===4){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("text").innerHTML="Correct"
        document.getElementById("optionb").style.color= "#20e66a";
        document.mainImage.src = "images/4-Correct.png"
        correctSound.play();
         score++
    }
    else if (yy=="A"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionb").style.color= "#20e66a";
        document.getElementById("optiona").style.color= "#de1544";
        document.mainImage.src = "images/4-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="C"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionb").style.color= "#20e66a";
        document.getElementById("optionc").style.color= "#de1544";
        document.mainImage.src = "images/4-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="D"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionb").style.color= "#20e66a";
        document.getElementById("optiond").style.color= "#de1544";
        document.mainImage.src = "images/4-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===5){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Correct"
        document.getElementById("optiona").style.color= "#20e66a";
        document.mainImage.src = "images/5-Correct.png"
        correctSound.play();
         score++
    }
    else if (yy=="D"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiona").style.color= "#20e66a";
        document.getElementById("optiond").style.color= "#de1544";
        document.mainImage.src = "images/5-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="B"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiona").style.color= "#20e66a";
        document.getElementById("optionb").style.color= "#de1544";
        document.mainImage.src = "images/5-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="C"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiona").style.color= "#20e66a";
        document.getElementById("optionc").style.color= "#de1544";
        document.mainImage.src = "images/5-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===6){
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("text").innerHTML="Correct"
        document.getElementById("optionc").style.color= "#20e66a";
        document.mainImage.src = "images/6-Correct.png"
        correctSound.play();
         score++
    }
    else if (yy=="A"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionc").style.color= "#20e66a";
        document.getElementById("optiona").style.color= "#de1544";
        document.mainImage.src = "images/6-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="B"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionc").style.color= "#20e66a";
        document.getElementById("optionb").style.color= "#de1544";
        document.mainImage.src = "images/6-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="D"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionc").style.color= "#20e66a";
        document.getElementById("optiond").style.color= "#de1544";
        document.mainImage.src = "images/6-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===7){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("text").innerHTML="Correct"
        document.getElementById("optiond").style.color= "#20e66a";
        document.mainImage.src = "images/7-Correct.png"
        correctSound.play();
         score++
    }
    else if (yy=="A"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiond").style.color= "#20e66a";
        document.getElementById("optiona").style.color= "#de1544";
        document.mainImage.src = "images/7-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="B"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiond").style.color= "#20e66a";
        document.getElementById("optionb").style.color= "#de1544";
        document.mainImage.src = "images/7-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="C"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiond").style.color= "#20e66a";
        document.getElementById("optionc").style.color= "#de1544";
        document.mainImage.src = "images/7-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===8){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("text").innerHTML="Correct"
        document.getElementById("optionb").style.color= "#20e66a";
        document.mainImage.src = "images/8-Correct.png"
        correctSound.play();
         score++
    }
    else if (yy=="A"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionb").style.color= "#20e66a";
        document.getElementById("optiona").style.color= "#de1544";
        document.mainImage.src = "images/8-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="C"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionb").style.color= "#20e66a";
        document.getElementById("optionc").style.color= "#de1544";
        document.mainImage.src = "images/8-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="D"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optionb").style.color= "#20e66a";
        document.getElementById("optiond").style.color= "#de1544";
        document.mainImage.src = "images/8-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===9){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Correct"
        document.getElementById("optiona").style.color= "#20e66a";
        document.mainImage.src = "images/9-Correct.png"
        correctSound.play();
         score++
    }
    else if (yy=="C"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiona").style.color= "#20e66a";
        document.getElementById("optionc").style.color= "#de1544";
        document.mainImage.src = "images/9-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="B"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiona").style.color= "#20e66a";
        document.getElementById("optionb").style.color= "#de1544";
        document.mainImage.src = "images/9-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="D"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiona").style.color= "#20e66a";
        document.getElementById("optiond").style.color= "#de1544";
        document.mainImage.src = "images/9-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===10){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Correct"
        document.getElementById("optiona").style.color= "#20e66a";
        document.mainImage.src = "images/10-Correct.png"
        correctSound.play();
         score++
    }
    else if (yy=="C"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiona").style.color= "#20e66a";
        document.getElementById("optionc").style.color= "#de1544";
        document.mainImage.src = "images/10-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="B"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiona").style.color= "#20e66a";
        document.getElementById("optionb").style.color= "#de1544";
        document.mainImage.src = "images/10-Wrong.png"
        incorrectSound.play();
    }
    else if (yy=="D"){
        document.getElementById("text").innerHTML="Incorrect"
        document.getElementById("optiona").style.color= "#20e66a";
        document.getElementById("optiond").style.color= "#de1544";
        document.mainImage.src = "images/10-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===11){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Continue To Next Question"
        document.getElementById("optiona").innerHTML =""
        document.mainImage.src = "images/restarting.png"
         score = 0
         i = 1
         ans = 0
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
	ans++;
}





function main(){
if (i===1){
	document.getElementById("qnum").innerHTML="Question: "+i;
   	document.getElementById("text").innerHTML= "Which ability score modifier <br>affects the Sleight of Hand <br>skill?"
    document.getElementById("optiona").innerHTML="A)Charisma"
    document.getElementById("optionb").innerHTML="B)Strength"
    document.getElementById("optionc").innerHTML="C)Dexterity"
    document.getElementById("optiond").innerHTML="D)Intelligence"
    document.view.qans.value=""
    document.mainImage.src = "images/1.png"
}

else if (i===2){
  document.getElementById("optiona").style.color= "white";
    document.getElementById("optionb").style.color= "white";
    document.getElementById("optionc").style.color= "white";
    document.getElementById("optiond").style.color= "white";
    document.getElementById("qnum").innerHTML="Question: "+i;
   	document.getElementById("text").innerHTML= "What is the name of the creature <br>that resembles a floating cyclops <br>head?"
    document.getElementById("optiona").innerHTML="A)Floating Cyclops Head"
    document.getElementById("optionb").innerHTML="B)Tarrasque"
    document.getElementById("optionc").innerHTML="C)Gob Bob"
    document.getElementById("optiond").innerHTML="D)Beholder"
    document.view.qans.value=""
    document.mainImage.src = "images/2.png"
}
else if (i===3){
  document.getElementById("optiona").style.color= "white";
    document.getElementById("optionb").style.color= "white";
    document.getElementById("optionc").style.color= "white";
    document.getElementById("optiond").style.color= "white";
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML= "In the popular podcast The <br>Adventure Zone, how is the name <br>of this Wizard from TV spelt?"
    document.getElementById("optiona").innerHTML="A)Taco"
    document.getElementById("optionb").innerHTML="B)Taako"
    document.getElementById("optionc").innerHTML="C)Taaco"
    document.getElementById("optiond").innerHTML="D)Tako"
    document.view.qans.value=""
    document.mainImage.src = "images/3.png"
}
else if (i===4){
  document.getElementById("optiona").style.color= "white";
    document.getElementById("optionb").style.color= "white";
    document.getElementById("optionc").style.color= "white";
    document.getElementById("optiond").style.color= "white";
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML= "What is the full name of the tomb <br>from the Tomb of Annihilation <br>module?"
    document.getElementById("optiona").innerHTML="A)Den of the Forgotten"
    document.getElementById("optionb").innerHTML="B)Tomb of the Nine Gods"
    document.getElementById("optionc").innerHTML="C)Acereraks Tomb"
    document.getElementById("optiond").innerHTML="D)Azakas Caverns"
    document.view.qans.value=""
    document.mainImage.src = "images/4.png"
}
else if (i===5){
  document.getElementById("optiona").style.color= "white";
    document.getElementById("optionb").style.color= "white";
    document.getElementById("optionc").style.color= "white";
    document.getElementById("optiond").style.color= "white";
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="What does DM stand for?"
  document.getElementById("optiona").innerHTML="A)Dungeon Master"
  document.getElementById("optionb").innerHTML="B)Donut Moose"
  document.getElementById("optionc").innerHTML="C)Deal Maker"
  document.getElementById("optiond").innerHTML="D)Death Monger"
    document.view.qans.value=""
    document.mainImage.src = "images/5.png"
}
else if (i===6){
  document.getElementById("optiona").style.color= "white";
    document.getElementById("optionb").style.color= "white";
    document.getElementById("optionc").style.color= "white";
    document.getElementById("optiond").style.color= "white";
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="Which of the following is not a <br>bard college?"
  document.getElementById("optiona").innerHTML="A)College of Glamour"
  document.getElementById("optionb").innerHTML="B)College of Lore"
  document.getElementById("optionc").innerHTML="C)College of Wealth"
  document.getElementById("optiond").innerHTML="D)College of Valor"
    document.view.qans.value=""
    document.mainImage.src = "images/6.png"
}
else if (i===7){
  document.getElementById("optiona").style.color= "white";
    document.getElementById("optionb").style.color= "white";
    document.getElementById("optionc").style.color= "white";
    document.getElementById("optiond").style.color= "white";
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="What are the primary abilities <br>scores of a monk? "
  document.getElementById("optiona").innerHTML="A)Strength & Charisma"
  document.getElementById("optionb").innerHTML="B)Dexterity & Charisma"
  document.getElementById("optionc").innerHTML="C)Constitution & Intelligence"
  document.getElementById("optiond").innerHTML="D)Dexterity & Wisdom"
    document.view.qans.value=""
    document.mainImage.src = "images/7.png"
}
else if (i===8){
  document.getElementById("optiona").style.color= "white";
    document.getElementById("optionb").style.color= "white";
    document.getElementById("optionc").style.color= "white";
    document.getElementById("optiond").style.color= "white";
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="Which is not a popular D&D <br>Youtube channel?"
  document.getElementById("optiona").innerHTML="A)Puffin Forest"
  document.getElementById("optionb").innerHTML="B)Death Noodle"
  document.getElementById("optionc").innerHTML="C)JoCat"
  document.getElementById("optiond").innerHTML="D)Dingo Doodles"
    document.view.qans.value=""
    document.mainImage.src = "images/8.png"
}
else if (i===9){
  document.getElementById("optiona").style.color= "white";
    document.getElementById("optionb").style.color= "white";
    document.getElementById("optionc").style.color= "white";
    document.getElementById("optiond").style.color= "white";
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="Which is not an evocation spell?"
  document.getElementById("optiona").innerHTML="A)Phantom Steed"
  document.getElementById("optionb").innerHTML="B)Cure Wounds"
  document.getElementById("optionc").innerHTML="C)Blinding Smite"
  document.getElementById("optiond").innerHTML="D)Wrath of Nature"
    document.view.qans.value=""
    document.mainImage.src = "images/9.png"
}
else if (i===10){
  document.getElementById("optiona").style.color= "white";
    document.getElementById("optionb").style.color= "white";
    document.getElementById("optionc").style.color= "white";
    document.getElementById("optiond").style.color= "white";
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="Which is not a weapon in standard <br>D&D 5e?"
  document.getElementById("optiona").innerHTML="A)Shovel"
  document.getElementById("optionb").innerHTML="B)Yklwa"
  document.getElementById("optionc").innerHTML="C)Neither"
  document.getElementById("optiond").innerHTML="D)Both"
    document.view.qans.value=""
    document.mainImage.src = "images/10.png"
}
else if (i===11){
  document.getElementById("optiona").style.color= "white";
    document.getElementById("optionb").style.color= "white";
    document.getElementById("optionc").style.color= "white";
    document.getElementById("optiond").style.color= "white";
  percentage = score*10
	document.getElementById("qnum").innerHTML="End of Quiz";
	document.getElementById("text").innerHTML ="You have finished the quiz with a <br>score of "+score+" ("+percentage+"%) <br>Would you like to retry?"
  document.getElementById("optiona").innerHTML="A)Yes"
  document.getElementById("optionb").innerHTML=""
  document.getElementById("optionc").innerHTML=""
  document.getElementById("optiond").innerHTML=""
    document.view.qans.value=""
    if (score>=5){document.mainImage.src = "images/yea.png"}

    else {
      document.mainImage.src = "images/nay.png"
    }
}
	i++;
}

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
        document.mainImage.src = "images/1-Correct.png"
        correctSound.play();
        score++

    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "images/1-Wrong.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===2){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "images/2-Correct.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "images/2-Wrong.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}

else if (ans===3){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "images/3-Correct.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "images/3-Wrong.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===4){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "images/4-Correct.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "images/4-Wrong.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===5){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "images/5-Correct.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "images/5-Wrong.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===6){
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "images/6-Correct.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "images/6-Wrong.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===7){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "images/7-Correct.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "images/7-Wrong.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===8){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "images/8-Correct.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "images/8-Wrong.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===9){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "images/9-Correct.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "images/9-Wrong.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===10){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "images/10-Correct.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "images/10-Wrong.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===11){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Continue To Next Question"
        document.getElementById("options").innerHTML =""
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
    document.getElementById("options").innerHTML="A)Charisma <br>B)Strength <br>C)Dexterity <br>D)Intelligence"
    document.view.qans.value=""
    document.mainImage.src = "images/1.png"
}
else if (i===2){
    document.getElementById("qnum").innerHTML="Question: "+i;
   	document.getElementById("text").innerHTML= "What is the name of the creature <br>that resembles a floating cyclops <br>head?"
    document.getElementById("options").innerHTML="A)Floating Cyclops Head <br>B)Tarrasque <br>C)Gob Bob <br>D)Beholder"
    document.view.qans.value=""
    document.mainImage.src = "images/2.png"
}
else if (i===3){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML= "In the popular podcast The <br>Adventure Zone, how is the name <br>of this Wizard from TV spelt?"
    document.getElementById("options").innerHTML= "A)Taco <br>B)Taako <br>C)Taaco <br>D)Tako"
    document.view.qans.value=""
    document.mainImage.src = "images/3.png"
}
else if (i===4){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML= "What is the full name of the tomb <br>from the Tomb of Annihilation <br>module?"
    document.getElementById("options").innerHTML= "A)Den of the Forgotten <br>B)Tomb of the Nine Gods <br>C)Acereraks Tomb <br>D)Azakas Caverns"
    document.view.qans.value=""
    document.mainImage.src = "images/4.png"
}
else if (i===5){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="What does DM stand for?"
  document.getElementById("options").innerHTML = "A)Dungeon Master <br>B)Donut Moose <br>C)Deal Maker <br>D)Death Monger"
    document.view.qans.value=""
    document.mainImage.src = "images/5.png"
}
else if (i===6){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="Which of the following is not a <br>bard college?"
  document.getElementById("options").innerHTML ="A)College of Glamour <br>B)College of Lore <br>C)College of Wealth <br>D)College of Valor"
    document.view.qans.value=""
    document.mainImage.src = "images/6.png"
}
else if (i===7){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="What are the primary abilities <br>scores of a monk? "
  document.getElementById("options").innerHTML ="A)Strength & Charisma <br>B)Dexterity & Charisma <br>C)Constitution & Intelligence <br>D)Dexterity & Wisdom"
    document.view.qans.value=""
    document.mainImage.src = "images/7.png"
}
else if (i===8){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="Which is not a popular D&D <br>Youtube channel?"
  document.getElementById("options").innerHTML ="A)Puffin Forest <br>B)Death Noodle <br>C)JoCat <br>D)Dingo Doodles"
    document.view.qans.value=""
    document.mainImage.src = "images/8.png"
}
else if (i===9){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="Which is not an evocation spell?"
  document.getElementById("options").innerHTML ="A)Phantom Steed <br>B)Cure Wounds <br>C)Blinding Smite <br>D)Wrath of Nature"
    document.view.qans.value=""
    document.mainImage.src = "images/9.png"
}
else if (i===10){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML ="Which is not a weapon in standard <br>D&D 5e?"
  document.getElementById("options").innerHTML ="A)Shovel <br>B)Yklwa <br>C)Neither <br>D)Both"
    document.view.qans.value=""
    document.mainImage.src = "images/10.png"
}
else if (i===11){
  percentage = score*10
	document.getElementById("qnum").innerHTML="End of Quiz";
	document.getElementById("text").innerHTML ="You have finished the quiz with a <br>score of "+score+" ("+percentage+"%) <br>Would you like to retry?"
  document.getElementById("options").innerHTML ="A)Yes"
    document.view.qans.value=""
    if (score>=5){document.mainImage.src = "images/yea.png"}

    else {
      document.mainImage.src = "images/nay.png"
    }
}
	i++;
}

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
        document.mainImage.src = "https://i.imgur.com/Pgp727h.png"
        correctSound.play();
        score++

    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "https://i.imgur.com/ejvWwAH.png"
        incorrectSound.play();
    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===2){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "https://i.imgur.com/Wzi0RLv.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "https://i.imgur.com/7peX7cL.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}

else if (ans===3){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "https://i.imgur.com/x7QJ9j4.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "https://i.imgur.com/uZ2jes0.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===4){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "https://i.imgur.com/zC9pL3v.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "https://i.imgur.com/GyejWWY.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===5){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "https://i.imgur.com/TSdbdi2.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "https://i.imgur.com/6A5TrJB.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===6){
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "https://i.imgur.com/9G2DGDH.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "https://i.imgur.com/FRxnLgS.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===7){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "https://i.imgur.com/YXgmV3x.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "https://i.imgur.com/jSoDDbF.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===8){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "https://i.imgur.com/6gMCIRm.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "https://i.imgur.com/zbS7p9N.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===9){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "https://i.imgur.com/fzMKwrV.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "https://i.imgur.com/ABmy8WE.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===10){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Correct"
        document.mainImage.src = "https://i.imgur.com/VeaClu1.png"
        correctSound.play();
         score++
    }
    else {
        document.getElementById("text").innerHTML="Incorrect"
        document.mainImage.src = "https://i.imgur.com/Nt6ExI0.png"
        incorrectSound.play();

    }
    document.getElementById("score").innerHTML= "Score: "+score
}
else if (ans===11){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("text").innerHTML="Continue To Next Question"
        document.mainImage.src = "https://i.imgur.com/Pmi3Ulg.png"
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
    document.mainImage.src = "https://i.imgur.com/cDuDNDb.png"
}
else if (i===2){
    document.getElementById("qnum").innerHTML="Question: "+i;
   	document.getElementById("text").innerHTML= "What is the name of the creature <br>that resembles a floating cyclops <br>head?"
    document.getElementById("options").innerHTML="A)Floating Cyclops Head <br>B)Tarrasque <br>C)Gob Bob <br>D)Beholder"
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/xfQM8Np.png"
}
else if (i===3){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML= "In the popular podcast The Adventure <br>Zone, how is the name of this Wizard <br>from TV spelt?"
    document.getElementById("options").innerHTML= "A)Taco <br>B)Taako <br>C)Taaco <br>D)Tako"
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/jsvWHlY.png"
}
else if (i===4){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.getElementById("text").innerHTML= "What is the full name of the tomb <br>from the Tomb of Annihilation <br>module?"
    document.getElementById("options").innerHTML= "A)Den of the Forgotten <br>B)Tomb of the Nine Gods <br>C)Acereraks Tomb <br>D)Azakas Caverns";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/HbpEYcK.png"
}
else if (i===5){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.view.question.value ="What does DM stand for? \nA)Dungeon Master \nB)Donut Moose \nC)Donut Maker \nD)Death Monger";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/R32OVIa.png"
}
else if (i===6){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.view.question.value ="Which of the following is not a bard college? \nA)College of Glamour  \nB)College of Lore \nC)College of Wealth \nD)College of Valor";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/KPcOZhT.png"
}
else if (i===7){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.view.question.value ="What are the primary abilities scores of a monk? \nA)Strength & Charisma  \nB)Dexterity & Constitution \nC)Constitution & Intelligence  \nD)Dexterity & Wisdom";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/cJEwbWR.png"
}
else if (i===8){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.view.question.value ="Which is not a popular D&D Youtube channel? \nA)Puffin Forest  \nB)Death Noodle \nC)JoCat  \nD)Dingo Doodles";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/CiXawUF.png"
}
else if (i===9){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.view.question.value ="Which spell is not evocation? \nA)Phantom Steed  \nB)Cure Wounds \nC)Blinding Smite  \nD)Wrath of Nature";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/PhYvJGF.png"
}
else if (i===10){
	document.getElementById("qnum").innerHTML="Question: "+i;
	document.view.question.value ="Which is not a weapon in standard D&D 5e? \nA)Shovel  \nB)Yklwa \nC)Neither  \nD)Both";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/1qVQ69O.png"
}
else if (i===11){
  percentage = score*10
	document.getElementById("qnum").innerHTML="End";
	document.view.question.value ="You have finished the quiz with a score of "+score+" ("+percentage+"%)\nWould you like to retry? \nA)Yes";
    document.view.qans.value=""
    if (score>=5){document.mainImage.src = "https://i.imgur.com/nJmD6EV.png"}

    else {
      document.mainImage.src = "https://i.imgur.com/gvRLAUb.png"
    }
}
	i++;
}

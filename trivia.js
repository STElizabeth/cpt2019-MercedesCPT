var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        document.mainImage.src = "https://i.imgur.com/Pgp727h.png"
        score++

    }
    else {
        document.getElementById("question").value="You are wrong"
        document.mainImage.src = "https://i.imgur.com/ejvWwAH.png"
    }
    document.view.qscore.value=score
}
else if (ans===2){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        document.mainImage.src = "https://i.imgur.com/Wzi0RLv.png"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.mainImage.src = "https://i.imgur.com/7peX7cL.png"

    }
    document.view.qscore.value=score
}

else if (ans===3){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        document.mainImage.src = "https://i.imgur.com/x7QJ9j4.png"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.mainImage.src = "https://i.imgur.com/uZ2jes0.png"

    }
    document.view.qscore.value=score
}
else if (ans===4){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        document.mainImage.src = "https://i.imgur.com/zC9pL3v.png"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.mainImage.src = "https://i.imgur.com/GyejWWY.png"

    }
    document.view.qscore.value=score
}
else if (ans===5){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        document.mainImage.src = "https://i.imgur.com/TSdbdi2.png"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.mainImage.src = "https://i.imgur.com/6A5TrJB.png"

    }
    document.view.qscore.value=score
}
else if (ans===6){
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        document.mainImage.src = "https://i.imgur.com/9G2DGDH.png"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.mainImage.src = "https://i.imgur.com/FRxnLgS.png"

    }
    document.view.qscore.value=score
}
else if (ans===7){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        document.mainImage.src = "https://i.imgur.com/YXgmV3x.png"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.mainImage.src = "https://i.imgur.com/jSoDDbF.png"

    }
    document.view.qscore.value=score
}
else if (ans===8){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        document.mainImage.src = "https://i.imgur.com/6gMCIRm.png"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.mainImage.src = "https://i.imgur.com/zbS7p9N.png"

    }
    document.view.qscore.value=score
}
else if (ans===9){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        document.mainImage.src = "https://i.imgur.com/fzMKwrV.png"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.mainImage.src = "https://i.imgur.com/ABmy8WE.png"

    }
    document.view.qscore.value=score
}
else if (ans===10){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        document.mainImage.src = "https://i.imgur.com/VeaClu1.png"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.mainImage.src = "https://i.imgur.com/Nt6ExI0.png"

    }
    document.view.qscore.value=score
}
else if (ans===11){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="Continue To Next Question"
        document.mainImage.src = "https://i.imgur.com/Pmi3Ulg.png"
         score = 0
         i = 1
         ans = 0
    }
    document.view.qscore.value=score
}
	ans++;
}





function main(){
if (i===1){
	document.view.qnum.value=i;
   	document.view.question.value ="Which ability score modifier affects the Sleight of Hand skill? \nA)Charisma \nB)Strength \nC)Dexterity \nD)Intelligence";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/cDuDNDb.png"
}
else if (i===2){
	document.view.qnum.value=i;
	document.view.question.value ="What is the name of the creature that resembles a floating cyclops head? \nA)Floating Cyclops Head \nB)Tarrasque \nC)Gob Bob \nD)Beholder";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/xfQM8Np.png"
}
else if (i===3){
	document.view.qnum.value=i;
	document.view.question.value ="In the popular podcast The Adventure Zone, how is the name of this Wizard from TV spelt? \nA)Taco \nB)Taako \nC)Taaco \nD)Tako";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/jsvWHlY.png"
}
else if (i===4){
	document.view.qnum.value=i;
	document.view.question.value ="What is the full name of the tomb from the Tomb of Annihilation module? \nA)Den of the Forgotten \nB)Tomb of the Nine Gods \nC)Acereraks Tomb \nD)Azakas Caverns";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/HbpEYcK.png"
}
else if (i===5){
	document.view.qnum.value=i;
	document.view.question.value ="What does DM stand for? \nA)Dungeon Master \nB)Donut Moose \nC)Donut Maker \nD)Death Monger";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/R32OVIa.png"
}
else if (i===6){
	document.view.qnum.value=i;
	document.view.question.value ="Which of the following is not a bard college? \nA)College of Glamour  \nB)College of Lore \nC)College of Wealth \nD)College of Valor";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/KPcOZhT.png"
}
else if (i===7){
	document.view.qnum.value=i;
	document.view.question.value ="What are the primary abilities scores of a monk? \nA)Strength & Charisma  \nB)Dexterity & Constitution \nC)Constitution & Intelligence  \nD)Dexterity & Wisdom";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/cJEwbWR.png"
}
else if (i===8){
	document.view.qnum.value=i;
	document.view.question.value ="Which is not a popular D&D Youtube channel? \nA)Puffin Forest  \nB)Death Noodle \nC)JoCat  \nD)Dingo Doodles";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/CiXawUF.png"
}
else if (i===9){
	document.view.qnum.value=i;
	document.view.question.value ="Which spell is not evocation? \nA)Phantom Steed  \nB)Cure Wounds \nC)Blinding Smite  \nD)Wrath of Nature";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/PhYvJGF.png"
}
else if (i===10){
	document.view.qnum.value=i;
	document.view.question.value ="Which is not a weapon in standard D&D 5e? \nA)Shovel  \nB)Yklwa \nC)Neither  \nD)Both";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/1qVQ69O.png"
}
else if (i===11){
	document.view.qnum.value="End";
	document.view.question.value ="You have finished the quiz with a score of "+score+"\nWould you like to retry? \nA)Yes";
    document.view.qans.value=""
    document.mainImage.src = "https://i.imgur.com/tnvBOAQ.png"
}
	i++;
}

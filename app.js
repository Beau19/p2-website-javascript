var userChoice = prompt("Kies jij steen, papier of schaar?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "steen";
} else if(computerChoice <= 0.67) {
	computerChoice = "papier";
} else {
	computerChoice = "schaar";
}
var compare=function(choice1,choice2){
    if(choice1===choice2){
        return "Het is een gelijk spel";
    }
    else if(choice1==="steen"){
        if(choice2==="schaar"){
            return "steen wint"
        }
        else if(choice2==="papier"){
            return "papier wint";
        }
    }
    else if(choice1==="papier"){
        if(choice2==="schaar"){
            return "schaar wint"
        }
        else if(choice2==="steen"){
            return "papier wint";
        }
    }
    else if(choice1==="schaar"){
        if(choice2==="papier"){
            return "schaar wint"
        }
        else if(choice2==="steen"){
            return "steen wint";
        }
    }
    
}
console.log(compare(userChoice,computerChoice));
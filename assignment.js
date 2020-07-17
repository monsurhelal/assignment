function feetToMile(feet){

    var mile = feet/5280;
    return mile;
}
var checkMile = feetToMile(5280);
console.log(checkMile);
// 1st problem complit

function woodCalculator(chair,table,cot){

    var makeChair = chair*1;
    var makeTable = table*3;
    var makeCot = cot*5;
    var totalWood = makeChair+makeTable+makeCot;

    return totalWood;

}

var totalWood = woodCalculator(2,2,3)

console.log(totalWood);

// 2nd problem complit

var friends = ['sajol','niaz','mohammad','ali','arman','walid','sakil','santonu','sokalkhan'];

function tinyFriends(array){
    var name = 0;
    var maxName;
for(var i = 0;i<friends.length;i++){

    if(array[i].length>name){

        name = array[i].length;
        maxName = array[i];
    }
}
return maxName;
}
var friendsName = tinyFriends(friends)
console.log(friendsName);

// 4th problem complit brickCalculator(roof)

//before problem was wrong

// and wright solution

function brickCalculator(roof){
var feet = 1000;
var needSton = 0;

if(roof<=10){

    needSton = feet*15;
}

else if (roof<=20){

    var firstFloor = feet*15;
    var remaining = roof - 10;
    var secenFloor = remaining * 12;
    needSton = firstFloor+secenFloor;

}
else{

    var firstFloor = feet*15;
    var secenFloor= feet*12;
    var remaining = roof - 20;
    var thirdFloor = remaining * 10;
    needSton = firstFloor + secenFloor + thirdFloor;


}
return needSton;
}






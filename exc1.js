//startupjobs

let jobPosition = prompt('enter your position code(HR/IT/BD/MKT').toUpperCase;

if(jobPosition == HR){
    return 'recruitment';
}
else if(jobPosition == IT){
    return 'dealing with engineering stuff';
}
else if(jobPosition == BD){
    return 'selling';
}
else if(jobPosition == MKT){
    return 'create demmand';
}
else{
    return 'wrong input';
}

//comparison between 2 values

let a = prompt('input first number');
let b = prompt('input second number');

if(a<b){
    return 'a is less than b';
}
else if (a>b){
    return 'a is greater than b';
}
else if(a==b){
    return 'a is equal to b';
}

//switch case number to day

let number = prompt('input a number between 1 to 7') ;
switch (dayName) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("wrong number input!");
}

//moving game

let input = prompt('please input up/right/bottom/left').toUpperCase;
switch (input) {
    case "UP":
        console.log("Karakter berjalan keatas");
        break;
    case "RIGHT":
        console.log("Karakter berjalan kekanan");
        break;
    case "BOTTOM":
        console.log("Karakter berjalan kebawah");
        break;
    case "LEFT":
        console.log("Karakter berjalan kekiri");
        break;
    default:
        console.log("wrong command input");
}

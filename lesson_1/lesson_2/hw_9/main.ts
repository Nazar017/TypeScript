let number:number = +prompt("Enter a day number");

switch (number) {
    case 0:
        console.log(`The number of day is ${number}. Working`);
        break;
    case 1:
        console.log(`The number of day is ${number}. Playing football`);
        break;
    case 2:
        console.log(`The number of day is ${number}. Working`);
        break;
    case 3:
        console.log(`The number of day is ${number}. Training in gym`);
        break;
    case 4:
        console.log(`The number of day is ${number}. Watching films`);
        break;
    case 5:
        console.log(`The number of day is ${number}. Sitting at home!`);
        break;
    case 6:
        console.log(`The number of day is ${number}. Sitting at home!`);
        break;
    default:
        console.log(`Are you ok? The day of number ${number} is incorrect.`);
        break;
}
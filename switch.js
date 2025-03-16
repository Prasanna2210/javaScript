// let day =1;
// switch(day) {
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;  
//     default:
//         console.log(`${day} is not a day`)  
// }






let testscore =g;
let LetterGrade;
switch(true) {
    case testscore >= 90:
        LetterGrade = 'A';
        break;
    case testscore >= 80:
        LetterGrade = 'B';
        break;
    case testscore >= 70:
        LetterGrade = 'C';
        break;
    case testscore >= 60:
        LetterGrade = 'D';
        break;
    case testscore >= 50:
        LetterGrade = 'E'; 
        break;
    case testscore <50:
        LetterGrade = 'F';
        break;
    default:
        console.log(`${testscore} is not valid`)  
}

console.log(LetterGrade);
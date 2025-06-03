// date objects = objects that contain values that represent dates and times
//                these date objects can be changed and formatted

const date = new Date();
console.log(date);

// for custom date
// Date(year,month, day,hour,minute,second,ns);
// const date1 = new Date(2023,3,10,6,23,2,5);
// console.log(date1);

// const date2 = new Date("2030-10-22T00:00:00z");
// console.log(date2);

// const date3 = new Date(17000000000);
// console.log(date3);



// getting date elements separately

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);



// setting date elements

// date.setFullYear(2023);
// date.setMonth(2);
// date.setDate(22);
// date.setHours(6);

// console.log(date);


// comparing dates
const date1 = new Date("2024-12-31");
const date2 = new Date("2025-01-01");
if(date2>date1) {
    console.log("Happy New Year");
}
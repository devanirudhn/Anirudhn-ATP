// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
 const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

//     1. filter() temperatures above 35
let filteredTemp= temperatures.filter((element) => element>35)
console.log(filteredTemp);
//     2. map() to convert all temperatures from Celsius → Fahrenheit
let TempInFar=temperatures.map((element) => (1.8*element)+32)
console.log(TempInFar);
//     3. reduce() to calculate average temperature
let avgTemp=temperatures.reduce((prev,next)=> prev +next ,0)/temperatures.length;

 

console.log(avgTemp);
//     4. find() first temperature above 40
 let Tbov40 =temperatures.find((element)=> element>40)
 console.log(Tbov40);
//  findindex
let index =temperatures.findIndex((element)=> element==28)
console.log(index);



// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:



// Tasks:




//     5. findIndex() of "Avengers"
 const movies = [
{ id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
{ id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
{ id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
{ id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//     1. filter() only "Sci-Fi" movies
let sciFic = movies.filter((element) => element.genre=="Sci-Fi" )
console.log(sciFic);

//     2. map() to return:
//             "Inception (8.8)"
const result = movies.map(movie => `${movie.title} (${movie.rating})`);

console.log(result);

//     3. reduce() to find average movie rating
let avgRating = movies.reduce((prev,next)=> prev+next.rating,0)/movies.length

console.log(avgRating);



//     4. find() movie "Joker"


let searchMovie = movies.find((element)=>element.title=="Joker");
console.log(searchMovie);


//     5. findIndex() of "Avengers"
let indOfMovie = movies.findIndex((element) => element.title==="Avengers");
console.log(indOfMovie);

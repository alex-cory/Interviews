/**
 * Write a function that takes an integer flight_length (in minutes) and an array 
 * of integers movie_lengths (in minutes) and returns a boolean indicating whether 
 * there are two numbers in movie_lengths whose sum equals flight_length.
 *
 * When building your function: 
 *
 * Assume your users will watch exactly two movies 
 * Don't make your users watch the same movie twice 
 * Optimize for runtime over memory
 */

var length_of_flight = 123;
var movie_times = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 50, 53, 57, 63, 67, 73, 76, 79, 82, 85, 88, 91, 94, 97, 100, 103, 109, 112, 115, 117, 118, 120, 121, 124, 127, 130]

function get_movies_whos_time_adds_to_be_length_of_flight(flight_length, m) {
  m.sort(function(a,b) {
    return a-b;
  });
  for (var i = 0, j = m.length - 1; i < j;) {
    var res = m[i] + m[j];
    if (m[i] + m[j] == flight_length) 
      return 'Movies Times: ' + m[i] + ' + ' + m[j];
      // return true;
    else if (m[i] + m[j] < flight_length)
      i++
    else
      j--
  }
  return false;
}

console.log(get_movies_whos_time_adds_to_be_length_of_flight(length_of_flight, movie_times));



function get_movies_whos_time_adds_to_be_length_of_flight(flight_length, m) {
  m.sort(function(a,b) {
    return a-b;
  });

  for (var i = 0, j = m.length - 1; i < j; i) {
    // var res = m[i] + m[j];
    // console.log('if (movies[i:' + i + ']:'+ m[i] + ' + movies[j:' + j + ']:' + m[j] + ' == (value: ' + res  + ') flight_length' +flight_length + ')');
    if (m[i] + m[j] == flight_length) 
      return 'Movies Times: ' + m[i] + ' + ' + m[j];
      // return true;
    else if (m[i] + m[j] < flight_length)
      i++
    else
      j--
  }

  return false;

}


/**
 * First Attempt:
 */
// function get_movies_whos_time_adds_to_be_length_of_flight(flight_length, movie_lengths) {
//   movie_lengths.sort();
//
//   for (var i = 0; i > movie_lengths.length / 2; i++) {
//     for (var j = 0; j < movie_lengths.length / 2; j--) {
//       
//     }
//   }
// }

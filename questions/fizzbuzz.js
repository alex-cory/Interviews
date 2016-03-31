// var array = [2, 3, 4, 5, 6, 10, 12, 15, 30, 31,]

function fizzbuzz() {
  for (var i = 1; i < 101; i++) {
    var isDivisibleBy3 = i % 3 == 0
    var isDivisibleBy5 = i % 5 == 0
    if (isDivisibleBy5 && isDivisibleBy3) {
      console.log('fizzbuzz')
    } else if (isDivisibleBy5) {
      console.log('fizz')
    } else if (isDivisibleBy3) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
  // for (var number of numbers) {
  //   var isDivisibleBy3 = number % 3 == 0
  //   var isDivisibleBy5 = number % 5 == 0
  //   if (isDivisibleBy5 && isDivisibleBy3) {
  //     console.log('fizzbuzz')
  //   } else if (isDivisibleBy5) {
  //     console.log('fizz')
  //   } else if (isDivisibleBy3) {
  //     console.log('buzz')
  //   } else {
  //     console.log(number)
  //   }
  // }
}
// console.log(array)
// fizzbuzz(array)
fizzbuzz()

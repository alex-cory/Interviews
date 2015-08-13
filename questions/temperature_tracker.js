/**
 * Temperature Tracker
 *Write a class TempTracker with these methods:

insert()—records a new temperature
get_max()—returns the highest temp we've seen so far
get_min()—returns the lowest temp we've seen so far
get_mean()—returns the mean ↴ of all temps we've seen so far
get_mode()—returns the mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the get_ functions over speeding up the insert() function.

get_mean() should return a float, but the rest of the get_ functions can return integers. Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
 */

/**
 * Logic Before:
 * 
 */

class TempTracker {
  constructor() {
    this.temps = [];
    this.mean;
    this.mode;
    this.min;
    this.max;

    this.sum = 0;
    this.tempCount = 0;
    this.tempCounts = [];
    this.maxTempCounts = 0;
  }

  insert(temp) {
    for (var i in arguments) {
      temp = arguments[i];
      // set mode
      if (this.temps.indexOf(temp) > -1) {
        var curr_temp_count = ++this.tempCounts[this.temps.indexOf(temp)]
        if (curr_temp_count > this.maxTempCounts) {
          this.maxTempCounts = curr_temp_count;
          this.mode = temp;
        }
      } else {
        this.temps.push(temp);
        this.tempCounts.push(1);
      }
      // set max
      if (!this.max || temp > this.max) {
        this.max = temp;
      }
      // set min
      if (!this.min || temp < this.min) {
        this.min = temp;
      }
      // set mean
      this.tempCount++
        this.sum += temp;
    }
  }

  get_mean() {
    return this.tempCount === 0 ? 'you need to add some temps' : this.sum / this.tempCount;
  }

  get_max() {
    return this.max;
  }

  get_min() {
    return this.min;
  }

  get_mode() {
    return this.mode;
  }
}
var p = new TempTracker();

p.insert(101, 102, 103, 104, 104, 104, 101, 101);
console.log(p.get_mean());
console.log(p.get_max());
console.log(p.get_min());
console.log(p.get_mode());

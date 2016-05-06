/**
 * http://bit.ly/1T4DS5P
 * @param  {[type]} _arr [description]
 * @param  {[type]} x    [description]
 * @return {[type]}      [description]
 */
var count_pairs = function(_arr,x) {
  if(!x) x = 0;
  var pairs = 0;
  var i = 0;
  var k = _arr.length-1;
  if((k+1)<2) return pairs;
  var halfX = x/2;
  while(i<k) {
    var curK = _arr[k];
    var curI = _arr[i];
    var pairsThisLoop = 0;
    if(curK+curI==x) {
      // if midpoint and equal find combinations
      if(curK==curI) {
        var comb = 1;
        while(--k>=i) pairs+=(comb++);
        break;
      }
      // count pair and k duplicates
      pairsThisLoop++;
      while(_arr[--k]==curK) pairsThisLoop++;
      // add k side pairs to running total for every i side pair found
      pairs+=pairsThisLoop;
      while(_arr[++i]==curI) pairs+=pairsThisLoop;
    } else {
      // if we are at a mid point
      if(curK==curI) break;
      var distK = Math.abs(halfX-curK);
      var distI = Math.abs(halfX-curI);
      if(distI > distK) while(_arr[++i]==curI);
      else while(_arr[--k]==curK);
    }
  }
  return pairs;
}
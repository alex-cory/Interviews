/**
 * Rectangular Love
 *
 * Write a function to find the rectangular intersection of two given love rectangles.
 */

/**
 * Logic Before:
 * 
 *
 */

var  myrectangle = {

    // coordinates of bottom-left corner:
    'x': 1,
    'y': 5,

    // width and height
    'width': 10,
    'height': 4,

}

var  herrectangle = {

    // coordinates of bottom-left corner:
    'x': 0,
    'y': 3,

    // width and height
    'width': 20,
    'height': 4,

}

console.log(find_overlap(myrectangle, herrectangle));

function find_overlap(my, her) {
  var res = {};

  var her_bottom_right_x = her.x + her.width;
  var my_bottom_right_x = my.x + my.width;
  var res_bottom_right_x = Math.min(my_bottom_right_x, her_bottom_right_x);
  res.x = Math.max(my.x, her.x);
  res.width = res_bottom_right_x - res.x;

  var her_top_left_y = her.y + her.height;
  var my_top_left_y = my.y + my.height;
  var res_top_left_y = Math.min(my_top_left_y, her_top_left_y);
  res.y = Math.max(my.y, her.y);
  res.height = res_top_left_y - res.y;

  return res;
}

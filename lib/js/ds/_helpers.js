/**
 *  * Accurately Check Type Helper Function
 *   */
// export type = (function(global) {
//   var cache = {};
//   return function(obj) {
//     var key;
//     return obj === null ? 'null' // null
//       : obj === global ? 'global' // window in browser or global in nodejs
//       : (key = typeof obj) !== 'object' ? key // basic: string, boolean, number, undefined, function
//       : obj.nodeType ? 'object' // DOM element
//       : cache[key = ({}).toString.call(obj)] // cached. date, regexp, error, object, array, math
//       || (cache[key] = key.slice(8, -1).toLowerCase()); // get XXXX from [object XXXX], and cache it
//   };
// }(this));



/*
 * Checks to see if an object is empty.
 * Ref: http://stackoverflow.com/a/4994244/2782583
 */
export function isObjEmpty(obj) {

  // Speed up calls to hasOwnProperty
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0)    return false;
  if (obj.length === 0)  return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}

/*
 * isObjEmpty Examples
 */
// isEmpty(""), // true
// isEmpty([]), // true
// isEmpty({}), // true
// isEmpty({length: 0, custom_property: []}), // true
//
// isEmpty("Hello"), // false
// isEmpty([1,2,3]), // false
// isEmpty({test: 1}), // false
// isEmpty({length: 3, custom_property: [1,2,3]}) // false

let string = "abcabcbbaa"

// current = a
// max = 'abc'
// function lengthOfLongestSubstring(string) {
// 	let current = {}
// 	let count = 0
// 	let maxLen = 0
// 	for (var i = 1; i < string.length; i++) {
// 		if (!(string[i] in current)) {
// 			current[string[i]] = count++
// 		} else {
// 			maxLen = Math.max(Object.keys(current).length, maxLen)
// 			current = {}
// 		}
// 	}
// 	return maxLen
// }

// function lengthOfLongestSubstring(string) {
// 	let current = {}
// 	let maxLen = 0
// 	for (var i in string) {
// 		if (!(string[i] in current)) {
// 			current[string[i]] = i
// 		} else {
// 			maxLen = Math.max(Object.keys(current).length, maxLen)
// 			current = {}
// 		}
// 	}
// 	return maxLen
// }

function lengthOfLongestSubstring(string, maxLen = 0) {
	for (var i in string) {
		let current = current || {}
		maxLen = Math.max(Object.keys(current).length, maxLen) || 0
		if (!(string[i] in current)) current[string[i]] = i
	}
	return maxLen
}
console.log(lengthOfLongestSubstring(string));



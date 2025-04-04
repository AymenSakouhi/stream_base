/* Heres a good JS test. 
  Show us how to execute 5 promises in parallel, 
  then show how to execute sequentially
*/

const promy1 = new Promise((resolve) =>
  setTimeout(() => {
    console.log("promise 1")
    resolve()
  }, 1000),
)

const promy2 = new Promise((resolve) =>
  setTimeout(() => {
    console.log("promise 2")
    resolve()
  }, 2000),
)
// sequentially
Promise.all([promy1, promy2]).then(() => {
  console.log("i am done")
})

// all parralle
Promise.allSettled([promy1, promy2]).then(() => {
  console.log("i am done")
})

// console.log("==1==>", [1, 2, 3, 4].map(num => parseInt(num))
//Write a function deepEqual(a, b) that returns true
//if two objects are deeply equal.
const deepEqual = (a, b) => {
  if (a === b) return true
  if (Array.isArray(a) && Array.isArray(b) && a.every((ele, index) => ele === b[index])) return true
  if (a === null || typeof a !== "object" || b === null || typeof b !== "object") return false
  const keysOfA = Object.keys(a)
  const keysOfB = Object.keys(b)
  if (keysOfA.length !== keysOfB.length) return false
  return keysOfA.every((key) => keysOfB.includes[key] && deepEqual(a[key], b[key]))
}
/* console.log(deepEqual({ a: 7 }, { a: 5 })) //false
console.log(deepEqual(7, 7)) //true
console.log(deepEqual([1, 2, 3], [1, "2", 3])) //false
console.log(deepEqual([1, 2, 3], [1, 2, 3])) //true
console.log(deepEqual({ a: 5 }, { a: 5 })) //true */
/*
 * Flatten Multi Arrays
 * @params {[][]} arr - Nested Arrays
 * @return {[]} Flattened Arr
 * @example
 * Flatten([[1,2,[3]], 4, 5, [[[[[[[6], [7]]]]]]]])
 *
 * */

const Flatten = (arr) => {
  return arr.reduce(
    (acc, curr) => (Array.isArray(curr) ? acc.concat(Flatten(curr)) : acc.concat(curr)),
    [],
  )
}

// example of how api reducer function work
// console.log([1, 2, 3].reduce((acc, val) => acc + val, 0))

// console.log(Flatten([[1, 2, [3]], 4, 5, [[[[[[[6], [7]]]]]]]]))
/*
 * Debounce Function (Medium)
 * @params {Function} Fn - function to debounce
 * @params delay - value in milliseconds
 * @return {Function}
 * @example
 * const log = debounce(Date.now(), 3000)
 * */

const debounce = (fn, delay) => {
  let timer
  return function (...args) {
    //this to bind later
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}
const log = debounce((a = "test", b = "best") => console.log("hi there", a, b), 3000)

/*
 * Valid Anagram (easy - medium)
 * @params {string} s
 * @params {string} t
 * @return {string} the words [anagram,gramana] are  Anagram
 * @example
 * isAnagram("anagram", "gramana") // true
 * isAnagram("cat", "pat") //false
 * */

const isAnagram = (s, t) => {
  let result = true

  if (s.length !== t.length) {
    result = false
  }

  let count = {}

  for (const char of s) {
    count[char] = (count[char] || 0) + 1
  }

  for (const char of t) {
    if (!count[char]) {
      result = false
    }
    count[char]--
  }

  return `the words [${s},${t}] are${result ? " " : " not"} Anagram`
}

/* console.log(isAnagram("anagram", "gramana"))
console.log(isAnagram("cat", "pat"))
console.log(isAnagram("catt", "pat"))
console.log(isAnagram("caat", "catt")) */

/* Given a linked list, swap every two adjacent nodes and return its head.
You must solve the problem without modifying the values
  in the list's nodes (i.e., only nodes themselves may be changed.) */

/* Input: head = [1, 2, 3, 4]
Output: [2, 1, 4, 3] */
class LinkedList {
  constructor(head = null) {
    this.head = head
  }
}

const swapPairs = (head) => {
  if (!head || !head.next) return head

  let first = head
  let second = head.next

  first.next = swapPairs(second.next) //23
  second.next = first // 01

  return second
}
const list = new LinkedList([1, 2, 3, 4])
// console.log(swapPairs([1, 2, 3, 4]))

/* Given an integer x, return true if x is a 
palindrome
, and false otherwise. */
/* Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome. */
// bonus create your own unique password
// const uuid = () => Math.random().toString(26).slice(2)
const isPalindrome = (input) => {
  return input.toString().split("").reverse().join("") === input.toString()
}

/* console.log(isPalindrome("121")) // true
console.log(isPalindrome("-121")) //false */
/* Given an array nums of n integers, 
  return an array of all the unique 
quadruplets [nums[a], nums[b], nums[c], nums[d]] such that */
// nums[a] + nums[b] + nums[c] + nums[d] == target
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
//
//Input: nums = [1,0,-1,0,-2,2], target = 0
/* Output: [
  [-2, -1, 1, 2],
  [-2, 0, 0, 2],
  [-1, 0, 0, 1],
] */
const fourSum = (nums, target) => {
  // skip nulled length arrays
  if (!nums.length) return []
  nums.sort((a, b) => a - b)
  let result = []
  for (let i = 0; i < nums.length - 3; i++) {
    // skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let left = j + 1
      let right = nums.length - 1

      while (left < right) {
        // unnecessary step
        let sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]])
          // skip the duplicates for left and right
          while (left < right && nums[left] === nums[left + 1]) left++
          // thank you for correction SoundzzSaz
          while (left < right && nums[right] === nums[right - 1]) right--

          left++
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }

  return result
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
/* Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4 */

const searchInsert = (nums, target) => {
  const indexOfTarget = nums.indexOf(target)
  let affectedIndex = -1
  if (indexOfTarget !== -1) {
    return indexOfTarget
  } else {
    nums
      .sort((a, b) => a - b)
      .forEach((ele, idx) => {
        if (target > ele) {
          affectedIndex = idx + 1
        }
      })
    if (affectedIndex !== -1) {
      return affectedIndex
    } else {
      return nums.length
    }
  }
}

// console.log(searchInsert([1, 3, 5, 6], 7))
// seperate balls problem
// @input = string
// s = 100
// @output
// o = 2
//
/**
 * @param {string} s
 * @return {number}
 */

var minimumSteps = function (s) {
  let ans = 0
  let blackCount = 0 // Tracks the number of black balls (1s)

  // Traverse through the string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      // White ball encountered, add the number of black balls on its left
      ans += blackCount
    } else {
      // Black ball encountered, increment the black ball count
      blackCount++
    }
  }

  return ans
}

// console.log(minimumSteps("100"))
// ----- my approach
const swapBlackBalls = (s) => {
  let left = 0
  let right = s.length - 1
  let swaps = 0

  while (left < right) {
    // we need to move the left pointer until 1 is actually found
    while (left < right && s[left] === "0") {
      // copied from Bstudio in the chat
      // best contributor
      left++
    }
    while (left < right && s[right] === "1") {
      right--
    }

    if (left < right) {
      swaps++
      left++
      right--
    }
  }
  return swaps
}

// console.log(swapBlackBalls("100"))

// Thanks to BStudio for the interview question
function countOnes(to) {
  var str = ""
  var count = 0

  for (let i = 0; i <= to; i++) {
    str = str + i
  }

  for (let i = 0; i <= str.length; i++) {
    if (str[i] == "1") {
      count += 1
    }
  }
  return count
}

// console.log(countOnes(13))
// console.log("----")

// Input: text = "AI is fun. AI is the future."
// Output: { ai: 2, is: 2, fun: 1, the: 1, future: 1 }

const textRepeatCounter = (str) => {
  const splittedString = str
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
  // const splittedString = str.replaceAll(".", "").split(" ")
  return splittedString.reduce((freq, word) => {
    freq[word] = (freq[word] || 0) + 1
    return freq
  }, {})
}
// console.log(textRepeatCounter("AI is fun, AI is the future."))

// Longest Substring Without Repeating Characters
//  Input: s = "abcabcbb"
//  longest one = "abc"
//
const longestSubstring = (s) => {
  let set = new Set()
  let left = 0
  let maxLength = 0
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}

// console.log(longestSubstring("abcabcbb"))

// 8. Count Primes
// Goal: Count the number of prime numbers
// less than the given number n.
const countPrimes = (n) => {
  if (n < 2) return 0
  const isPrime = new Array(n).fill(true)
  isPrime[0] = isPrime[1] = false
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false
      }
    }
  }
  return isPrime.filter(Boolean).length
  // return true
}
// Example
// console.log(countPrimes(20)) // Output: 4
// How Map Works in JavaScript
/* A Map is a collection of key-value pairs. 
 * Keys can be of any data type, 
 * and the Map maintains the order of insertion. 
 * Key methods include:

// map.set(key, value) – Adds or updates a key-value pair.
map.get(key) – Retrieves the value associated with the key.
map.has(key) – Checks if the key exists.
map.delete(key) – Deletes a key-value pair.
map.size – Returns the number of key-value pairs. */

// console.log(typeof null) // output: Object
// console.log(typeof 1) // output: Number
// console.log(typeof []) // object
// console.log(typeof {}) // object

const fruits = ["banana", "strawberry", "banana", "mango", "strawberry"]
const fruitsCount = new Map()
for (const fruit of fruits) {
  fruitsCount.set(fruit, (fruitsCount.get(fruit) || 0) + 1)
}
// console.log(fruitsCount)

const numbers = [1, 2, 2, 3, 3, 4]
// const numbersWithoutDupes = [...new Set(numbers)]

// How Set Works in JavaScript
/* A Set is a collection of unique values. It doesn’t allow duplicate elements. Key methods include:
set.add(value) – Adds a value to the set.
set.has(value) – Checks if the value exists.
set.delete(value) – Removes a value from the set.
set.size – Returns the number of elements in the set. */

const mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.add(2) // won't be acc

mySet.has(2) // true
for (value of mySet) {
  // 1st will be 1
  // 2st will be 2
}

// 4. Valid Parentheses
// Goal: Check if a string with parentheses,
// brackets, and braces is valid
// (properly closed and nested).
const isValid = (s) => {
  const stack = []
  const map = { ")": "(", "}": "{", "]": "[" }
  for (const char of s) {
    if (!map[char]) stack.push(char)
    else if (stack.pop() !== map[char]) return false
  }
  return stack.length === 0
}

// Example
// console.log(isValid("()[]{}")) // Output: true
// 5. Find the Missing Number
// Goal: Find the missing number in an array of size n containing numbers from 0 to n.
const missingNumber = (nums) => {
  const n = nums.length
  const total = (n * (n + 1)) / 2
  const sum = nums.reduce((acc, curr) => acc + curr, 0)
  return total - sum
}

// console.log(missingNumber([2, 3, 0, 1, 5])) // Output: 2
// 9. Remove Duplicates from Sorted Array
// Goal: Remove duplicates from a sorted array in-place and return the length of the modified array.
const removeDuplicates = (arr) => {
  // return new Set(arr)
  return [...new Set(arr)]
}
// Example
// console.log(removeDuplicates([1, 1, 2])) // Output: 2 (array becomes [1, 2])
// 6. Merge Two Sorted Arrays
// Goal: Merge two sorted arrays
// into one sorted array.

const mergeSortedArrays = (nums1, nums2) => {
  const bothArrays = [...nums1, ...nums2]
  const concatinatedArr = nums1.push(nums2.flat())
  return bothArrays.sort((a, b) => b - a)
}
// Example
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])) // Output: [1, 2, 3, 4, 5, 6]

// how to sum up an arr in js
const arr = [1, 2, 3]
const sum = arr.reduce((acc, curr) => acc + curr, 0)
const rum = arr.reduce((acc, curr) => acc - curr, 0)
// console.log(["a", "b", "c"].reduce((acc, curr) => acc + " " + curr, ""))
arr.sum

// console.log(sum, rum)
// console.log(arr.some((ele) => ele === 2))

// 10. Find the Intersection of Two Arrays
// Goal: Find the intersection of two arrays
// (common elements without duplicates).
const intersection = (nums1, nums2) => {
  const spreadSet1 = [...new Set(nums1)]
  const set2 = new Set(nums2)
  return spreadSet1.filter((item) => set2.has(item))
}
//
// Example
// console.log(intersection([1, 2, 2, 1], [1, 2])) // Output: [2]
// 1. Reverse a String
// Goal: Reverse the given string
// and return the reversed version.
// junior problem
const reverseString = (s) => {
  return s.split("").reverse().join("")
}
// Example
// console.log(reverseString("hello")) // Output: "olleh"

const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) {
      return [map.get(diff), i]
    }
    map.set(nums[i], i)
  }
  return []
}

// 3. FizzBuzz
// Goal: Print numbers from 1 to n. If divisible by 3,
// print "Fizz";
// if divisible by 5, print "Buzz";
// if divisible by both, print "FizzBuzz".
//
const fizzBuzz = (num) => {
  const result = []
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz")
    } else if (i % 3 === 0) {
      result.push("Fizz")
    } else if (i % 5 === 0) {
      result.push("Buzz")
    } else {
      result.push("Pizz")
    }
  }
  return result
}

// Example
// console.log(fizzBuzz(15)) // Output: ["1", "2", "Fizz", ..., "FizzBuzz"]
// 2. Two Sum
// Goal: Find two numbers in the array
// that add up to the target and return their indices.

// Example
// console.log(twoSum([2, 7, 11, 15], 9)) // Output: [0, 1]
// 4. Valid Parentheses
// Goal: Check if a string with parentheses, brackets, and braces is valid (properly closed and nested).

// Example
// console.log(isValid("()[]{}")) // Output: true

// Example

// 7. Maximum Subarray
// Goal: Find the contiguous subarray with the largest sum in the given array.

// Example
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // Output: 6

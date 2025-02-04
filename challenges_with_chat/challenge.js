// Thanks to BStudio for the interview question
function countOnes(to) {
  var str = "";
  var count = 0;
  
  for (i = 0; i <= to; i++){
    str = str + i;
  }
  
  for (i = 0; i <= str.length; i++){
    if (str[i] == '1') {
      count+=1;
    }
  }
  return count;
}

console.log(countOnes(13))
console.log("----")

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
console.log(textRepeatCounter("AI is fun, AI is the future."))

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

console.log(longestSubstring("abcabcbb"))

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
console.log(countPrimes(20)) // Output: 4
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

console.log(typeof null) // output: Object
console.log(typeof 1) // output: Number
console.log(typeof []) // object
console.log(typeof {}) // object

const fruits = ["banana", "strawberry", "banana", "mango", "strawberry"]
const fruitsCount = new Map()
for (const fruit of fruits) {
  fruitsCount.set(fruit, (fruitsCount.get(fruit) || 0) + 1)
}
console.log(fruitsCount)

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
console.log(isValid("()[]{}")) // Output: true
// 5. Find the Missing Number
// Goal: Find the missing number in an array of size n containing numbers from 0 to n.
const missingNumber = (nums) => {
  const n = nums.length
  const total = (n * (n + 1)) / 2
  const sum = nums.reduce((acc, curr) => acc + curr, 0)
  return total - sum
}

console.log(missingNumber([2, 3, 0, 1, 5])) // Output: 2
// 9. Remove Duplicates from Sorted Array
// Goal: Remove duplicates from a sorted array in-place and return the length of the modified array.
const removeDuplicates = (arr) => {
  // return new Set(arr)
  return [...new Set(arr)]
}
// Example
console.log(removeDuplicates([1, 1, 2])) // Output: 2 (array becomes [1, 2])
// 6. Merge Two Sorted Arrays
// Goal: Merge two sorted arrays
// into one sorted array.

const mergeSortedArrays = (nums1, nums2) => {
  const bothArrays = [...nums1, ...nums2]
  const concatinatedArr = nums1.push(nums2.flat())
  return bothArrays.sort((a, b) => b - a)
}
// Example
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])) // Output: [1, 2, 3, 4, 5, 6]

// how to sum up an arr in js
const arr = [1, 2, 3]
const sum = arr.reduce((acc, curr) => acc + curr, 0)
const rum = arr.reduce((acc, curr) => acc - curr, 0)
console.log(["a", "b", "c"].reduce((acc, curr) => acc + " " + curr, ""))
arr.sum

console.log(sum, rum)
console.log(arr.some((ele) => ele === 2))

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
console.log(intersection([1, 2, 2, 1], [1, 2])) // Output: [2]
// 1. Reverse a String
// Goal: Reverse the given string
// and return the reversed version.
// junior problem
const reverseString = (s) => {
  return s.split("").reverse().join("")
}
// Example
console.log(reverseString("hello")) // Output: "olleh"

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
console.log(fizzBuzz(15)) // Output: ["1", "2", "Fizz", ..., "FizzBuzz"]
// 2. Two Sum
// Goal: Find two numbers in the array
// that add up to the target and return their indices.

// Example
console.log(twoSum([2, 7, 11, 15], 9)) // Output: [0, 1]
// 4. Valid Parentheses
// Goal: Check if a string with parentheses, brackets, and braces is valid (properly closed and nested).

// Example
console.log(isValid("()[]{}")) // Output: true

// Example

// 7. Maximum Subarray
// Goal: Find the contiguous subarray with the largest sum in the given array.

// Example
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // Output: 6

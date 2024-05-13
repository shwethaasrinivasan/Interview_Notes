var characterReplacement = function (s, k) {
    let start = 0;
    let frequencyMap = {};
    let maxFreq = 0;
    let longestSubstringLength = 0;
    for (let end = 0; end < s.length; end++) {
      // if element not present in map, then initialize it with 0
      if (!frequencyMap[s[end]]) {
        frequencyMap[s[end]] = 0;
      }
      frequencyMap[s[end]]++;
  
      maxFreq = Math.max(maxFreq, frequencyMap[s[end]]);
      let isValid = end - start + 1 - maxFreq <= k;
      if (!isValid) {
        // decrease frequency of the start element in frequency map
        frequencyMap[s[start]]--;
        start++;
      }
  
      longestSubstringLength = end - start + 1;
    }
    return longestSubstringLength;
  };


// Here are the examples you provided:

// 1. **Example 1**:
//    - Input: `s = "ABAB"`, `k = 2`
//    - Output: 4
//    - Explanation: You can replace the two 'A's with two 'B's (or vice versa) to form the substring "BBBB," which has the longest repeating letters.

// 2. **Example 2**:
//    - Input: `s = "AABABBA"`, `k = 1`
//    - Output: 4
//    - Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA." The substring "BBBB" also has the longest repeating letters, which is 4.

// Remember the constraints:
// - `1 <= s.length <= 105`
// - `s` consists of only uppercase English letters.
// - `0 <= k <= s.length`

// Feel free to ask if you need further clarification or assistance! 😊

// Source: Conversation with Bing, 5/13/2024
// (1) Longest Repeating Character Replacement - LeetCode. https://leetcode.com/problems/longest-repeating-character-replacement/.
// (2) 424. Longest Repeating Character Replacement - Leetcode. https://leetcode.ca/all/424.html.
// (3) 424. Longest Repeating Character Replacement | Grandyang's Blogs. https://grandyang.com/leetcode/424/.
// (4) 424 - Longest Repeating Character Replacement | Leetcode. https://leetcode.ca/2017-01-27-424-Longest-Repeating-Character-Replacement/.
// (5) Longest Repeating Character Replacement · Leetcode Solutions With Analysis. https://dilyar85.gitbooks.io/leetcode-solutions-with-analysis/Problems/424.html.
Merge Sort works by dividing the array into smaller arrays, sorting those arrays, and then merging them back together into a single sorted array. Here's a detailed breakdown of the steps involved and how the merging process works:

Steps in Merge Sort
Divide: The array is divided into two halves, recursively, until each sub-array contains a single element or no elements (an array with a single element is considered sorted).

Conquer (Sort): Once the division process reaches the point where sub-arrays cannot be further divided (i.e., each sub-array has one or zero elements), the merge process begins.

Combine (Merge): Two adjacent sub-arrays are merged into a single sorted array. This process continues recursively up the call stack, merging the now-sorted sub-arrays into larger sorted arrays until the entire array is merged and sorted.

How Merging Works
The merge process involves comparing the elements of the two sub-arrays and combining them into a single sorted array. Here’s how it typically works:

Initial Setup: Two pointers (or indices) are set up, each pointing to the start of the two arrays being merged.
Comparison and Merging: At each step, the element pointed to by each pointer is compared. The smaller of the two is taken and placed into the new array, and the pointer for that element's array is moved one position forward.
Handling Remaining Elements: Once all elements from one of the sub-arrays have been merged but there are still elements left in the other sub-array, those remaining elements are copied into the new array.
Result: The result is a single array that contains all elements from the two sub-arrays, sorted in order.
Implementation of Merge Sort
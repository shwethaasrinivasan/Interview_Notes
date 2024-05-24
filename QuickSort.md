The provided Quick Sort function works based on the divide-and-conquer strategy. It sorts an array by selecting a 'pivot' element and then partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The steps are then recursively applied to the sub-arrays. Here's a step-by-step breakdown of how it works:

Choosing a Pivot: The partition function selects the last element of the array or sub-array as the pivot.

Partitioning:

The partition function rearranges the elements so that all elements less than the pivot come before the pivot, and all elements greater than the pivot come after it.
It maintains an index i as the boundary for where the next smaller (than pivot) element should be moved to.
As it scans through the array (with index j), whenever it finds an element less than the pivot, it increments i and swaps the elements at i and j. This effectively grows the region of elements less than the pivot.
After scanning, the pivot is placed after the last element smaller than it, at index i + 1, by swapping the pivot with the element at i + 1. This ensures the pivot is placed in its correct sorted position.
Recursive Calls:

The array is now partitioned around the pivot element.
The function then recursively sorts the sub-array to the left of the pivot and the sub-array to the right of the pivot by making two recursive calls to quickSort.
Base Case:

The recursion has a base case when the low index is not less than the high index, meaning the sub-array has zero or one element and does not need sorting.
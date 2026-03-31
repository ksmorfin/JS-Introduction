const numbers = [4, 7, 18, 19, 3, 9, 5, 2, 6];

function findmax(arr, left, right) {

    // Base case: If the array has only one element
    if (left === right) {
        return arr[left];
    }

    // Divide the array into two halves
    const mid = Math.floor((left + right) / 2);

    // Recurisivity
    const leftmax = findmax(arr, left, mid);
    const rightmax = findmax(arr, mid + 1, right);
    
    //Combine the results
    return Math.max(leftmax, rightmax);
}

//Example usage
console.log(findmax(numbers, 0, numbers.length - 1));
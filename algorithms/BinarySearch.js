const binarySearch = (sortedArr, value) => {
    let start = 0;
    let end = sortedArr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (sortedArr[mid] === value) {
            return mid;
        }

        if (sortedArr[mid] > value) {
            end = mid - 1;
        }

        if (sortedArr[mid] < value) {
            start = mid + 1;
        }
    }

    return -1;
};

const recursiveBinarySearch = (arr, value, start = 0, end = arr.length - 1) => {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === value) {
        return mid;
    }

    if (start >= end) {
        return -1;
    }

    if (arr[mid] > value) {
        return recursiveBinarySearch(arr, value, start, mid - 1);
    }

    if (arr[mid] < value) {
        return recursiveBinarySearch(arr, value, mid + 1, end);
    }
};


console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 2));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 2));
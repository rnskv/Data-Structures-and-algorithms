const defaultComparator = (a, b) => {
    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 0;
};

const mergeSort = (arr, comparator = defaultComparator) => {
    if (!arr || !arr.length) {
        return 0;
    }

    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);

    return merge(mergeSort(leftArray), mergeSort(rightArray))
};

const merge = (firstArr, secondArr) => {
    const sortedArr = [];
    let i = 0,
        j = 0;

    const firstArrEnd = firstArr.length - 1;
    const secondArrEnd = secondArr.length - 1;

    while (i <= firstArrEnd && j <= secondArrEnd ) {
        sortedArr.push(
            firstArr[i] < secondArr[j] ? firstArr[i++] : secondArr[j++]
        )
    }

    return [
        ...sortedArr,
        ...firstArr.slice(i),
        ...secondArr.slice(j)
    ]
};

console.log(mergeSort([1, 5, 122, 523, 63, 2, 4, 6,7]));
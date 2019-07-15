const linearSearch = (arr, value) => {
    const end = arr.length;
    let i = 0;

    while (arr[i] !== value && i !== end) i++;

    if (i < end) {
        return i;
    } else {
        return -1;
    }
};

console.log(linearSearch([1, 2, 3, 5, 7, 2, 65, 12], 3));

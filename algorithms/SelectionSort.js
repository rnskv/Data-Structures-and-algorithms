const selectionSort = (array) => {
    let i, j;

    for (i = 0; i < array.length - 1; i++) {
        let min = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        const temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }

    return array;
};

console.log(selectionSort([1, 4, 6, 2, 3, 5, 7, 7, 2, 9, 2]))